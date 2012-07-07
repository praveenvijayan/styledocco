(function() {
  var customCss, files, findit, fs, generateFile, getResourcePath, getSections, jade, langs, marked, menu, mkdirp, optimist, options, parser, path, readme, readmeText, sections, sources, templateFile, writeFile, writeStaticFile, _;

  fs = require('fs');

  path = require('path');

  findit = require('findit');

  jade = require('jade');

  marked = require('marked');

  mkdirp = require('mkdirp');

  optimist = require('optimist');

  langs = require('./languages');

  parser = require('./parser');

  _ = require('./utils');

  marked.setOptions({
    gfm: true
  });

  options = optimist.usage('Usage: $0 [options] [INPUT]').describe('name', 'Name of the project').alias('n', 'name').demand('name').describe('out', 'Output directory').alias('o', 'out')["default"]('out', 'docs').describe('resources', 'Directory for static resources').alias('s', 'resources')["default"]('resources', path.resolve(__dirname, '../resources')).describe('preprocessor', 'Custom preprocessor command').describe('include', 'CSS to include on all pages').argv;

  options["in"] = options._[0] || './';

  getResourcePath = function(fileName) {
    if (fs.existsSync(path.join(options.resources, fileName))) {
      return path.join(options.resources, fileName);
    } else {
      return path.resolve(__dirname, path.join('../resources', fileName));
    }
  };

  templateFile = getResourcePath('docs.jade');

  customCss = options.include != null ? fs.readFileSync(options.include, 'utf8') : '';

  getSections = function(filename) {
    var data, lang;
    lang = langs.getLanguage(filename);
    data = fs.readFileSync(filename, 'utf-8');
    if (lang != null) {
      return parser.makeSections(parser.extractBlocks(lang, data));
    } else {
      return parser.makeSections([
        {
          docs: data,
          code: ''
        }
      ]);
    }
  };

  generateFile = function(source, data) {
    var dest, lang, render, root;
    if (source.match(/readme/i)) {
      source = 'index.html';
      dest = _.makeDestination(source);
      root = './';
	  index = true;
    } else {
      dest = 'html/' + _.makeDestination(source);
      root = '../';
	  index = false;
    }
    data.project = {
      name: options.name,
      menu: menu,
      root: root,
	  index:index
    };
    render = function(data) {
      var html, template;
      template = fs.readFileSync(templateFile, 'utf-8');
      html = jade.compile(template, {
        filename: templateFile,
        pretty: true
      })(data);
      console.log("styledocco: " + source + " -> " + (path.join(options.out, dest)));
      return writeFile(dest, html);
    };
    if (langs.isSupported(source) && options.preprocessor !== 'none') {
      lang = langs.getLanguage(source);
      return lang.compile(source, options.preprocessor, function(err, css) {
        if (err != null) throw err;
        data.css = css + customCss;
        return render(data);
      });
    } else {
      data.css = customCss;
      return render(data);
    }
  };

  writeFile = function(dest, contents) {
    dest = path.join(options.out, dest);
    mkdirp.sync(path.dirname(dest));
    return fs.writeFileSync(dest, contents);
  };

  sources = findit.sync(options["in"]);

  files = sources.filter(function(source) {
    if (source.match(/(\/|^)\.[^\.]/)) return false;
    if (!langs.isSupported(source)) return false;
    if (!fs.statSync(source).isFile()) return false;
    return true;
  }).sort();

  menu = _.makeMenu(files);

  readme = _.findFile(options["in"], /^readme/i) || _.findFile(process.cwd(), /^readme/i) || _.findFile(options.resources, /^readme/i) || path.resolve(__dirname, '../resources/README.md');

  readmeText = path.extname(readme) === '.md' ? marked(fs.readFileSync(readme, 'utf-8')) : fs.readFileSync(readme, 'utf-8');

  sections = [
    {
      docs: readmeText
    }
  ];

  generateFile(readme, {
    menu: menu,
    sections: sections,
    title: '',
    description: ''
  });

  files.forEach(function(file) {
    sections = getSections(file);
    return generateFile(file, {
      menu: menu,
      sections: sections,
      title: file,
      description: ''
    });
  });

  writeStaticFile = function(fileName) {
    var outPath;
    outPath = path.join(options.out, fileName);
    fs.writeFileSync(outPath, fs.readFileSync(getResourcePath(fileName), 'utf-8'));
    return console.log("styledocco: writing " + outPath);
  };

  writeStaticFile('docs.css');
  writeStaticFile('flipStyleGuide.css');
  writeStaticFile('docs.js');
  writeStaticFile('jquery.min.js');
  writeStaticFile('turn.min.js');

}).call(this);
