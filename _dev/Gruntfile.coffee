path = require("path");

LIVERELOAD_PORT = 35729;
lrSnippet = require("connect-livereload") { port: LIVERELOAD_PORT }
mountFolder = (connect, dir) ->
 return connect.static path.resolve dir

paths = {
  dev:  __dirname
  app:  __dirname + "/app/"
  dist: path.dirname(__dirname)
}

console.log "--------------------------"
console.log "paths.app: #{paths.app}"
console.log "paths.dist: #{paths.dist}"
console.log "--------------------------"

module.exports = (grunt) ->
  require("load-grunt-tasks")(grunt)

  grunt.initConfig {
    pkg: grunt.file.readJSON "package.json"

    watch: {
      coffee: {
        files: ['app/scripts/**/*.coffee']
        tasks: ['coffee']
        options: {
          livereload: true
          spawn: false
          interrupt: false,
          debounceDelay: 250
        }
      }

      sass: {
        files: ['app/styles/**/*.{scss,sass}']
        tasks: ['sass']
        options: {
          livereload: true
          spawn: false
          interrupt: false,
          debounceDelay: 250
        }
      }

      jst: {
        files: ["app/templates/**/*.jst"]
        tasks: ['jst']
        options: {
          livereload: true
          spawn: false
          interrupt: false,
          debounceDelay: 250
        }
      }

      emberTemplates: {
        files: ["app/templates/**/*.hbs"]
        tasks: ['emberTemplates']
        options: {
          livereload: true
          spawn: false
          interrupt: false,
          debounceDelay: 250
        }
      }

      jade: {
        files: ["app/index.jade"]
        tasks: ['jade']
        options: {
          livereload: true
          spawn: false
          interrupt: false,
          debounceDelay: 250
        }
      }
    }

    coffee:
      compile:
        files: [
          expand: true
          cwd: paths.app + "/scripts"
          src: ["**/*.coffee"]
          dest: paths.dist + "/scripts"
          ext: ".js"       
        ]

    sass:
      options:
        # sourceMap: true
        outputStyle: "expanded" # nested, compact, compressed, expanded
      compile: 
        expand: true,
        flatten: true,
        cwd: paths.app + "/styles/",
        src: ['*.sass'],
        dest: paths.dist + "/styles/",
        ext: '.css'


    jst:
      options:
        # templateSettings: {
        #   interpolate : /\{\{(.+?)\}\}/g
        # }

        processName: (path) ->
          dir = paths.app + "/templates/"
          extension = ".jst"

          path.substr(0, path.length-extension.length).replace(dir, "")
      
      compile:
        files: 
          paths.dist + "/scripts/templates.js": ["app/templates/**/*.jst"]

    emberTemplates:   
      options:
        templateBasePath: "app/templates/"
      compile:
        files:
          "../scripts/templates.js": ["app/templates/**/*.hbs"]

    jade:
      options:
        pretty: true
      compile:
        expand: true,
        flatten: true,
        pretty: true,
        cwd: paths.app + "/",
        src: ['*.jade'],
        dest: paths.dist + "/",
        ext: '.html'


    # TODO: Save hash of file contents to determine if fresh files need to be copied over.
    # TODO: Move some of the static files in paths.dist into paths.app, then copy them over in this task.
    #       This means having double of each static file, but it allows the folder that gets distributed
    #       to be completely non-dependant of a layout, meaning the dist folder can be cleaned and rebuilt
    #       to help with debugging.
    copy:
      main:
        files: [
          { src: paths.dev + "/bower_components/backbone/backbone.js", dest: paths.dist + "/vendor/backbone.js" }
          { src: paths.dev + "/bower_components/jquery/dist/jquery.js", dest: paths.dist + "/vendor/jquery.js" }
          { src: paths.dev + "/bower_components/underscore/underscore.js", dest: paths.dist + "/vendor/underscore.js" }
          { src: paths.dev + "/bower_components/pure/pure.css", dest: paths.dist + "/vendor/pure.css" }
          { src: paths.dev + "/bower_components/semantic/build/packaged/css/semantic.css", dest: paths.dist + "/vendor/semantic.css" }
          { src: paths.dev + "/bower_components/semantic/build/packaged/javascript/semantic.js", dest: paths.dist + "/vendor/semantic.js" }
          { src: paths.dev + "/bower_components/handlebars/handlebars.js", dest: paths.dist + "/vendor/handlebars.js" }
          { src: paths.dev + "/bower_components/ember/ember.js", dest: paths.dist + "/vendor/ember.js" }
          { src: paths.dev + "/bower_components/showdown/src/showdown.js", dest: paths.dist + "/vendor/showdown.js" }
          { src: paths.dev + "/bower_components/moment/moment.js", dest: paths.dist + "/vendor/moment.js" }
        ]

    connect: {
      options: {
        port: 9001
        hostname: "localhost"
      }
      livereload: {
        options: {
          middleware: (connect) ->
            return [
              lrSnippet
              mountFolder(connect, paths.dist)
            ]
        }
      }
    }

    open: {
      server: {
        path: "http://<%= connect.options.hostname %>:<%= connect.options.port %>"
      }
    }
  }

  grunt.registerTask "default", [
    "coffee", "sass", "emberTemplates", "jade", "copy"
  ]

  grunt.registerTask "serve", [
    "default"
    "connect:livereload"
    "open"
    "watch"
  ]


