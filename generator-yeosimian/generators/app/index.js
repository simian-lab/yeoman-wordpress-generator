'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the splendid ' + chalk.red('generator-yeosimian') + ' generator!'
    ));

    done();
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('Vagrantfile'),
      this.destinationPath('Vagrantfile')
    );
    this.fs.copy(
      this.templatePath('index.php'),
      this.destinationPath('index.php')
    );
    this.fs.copy(
      this.templatePath('licencia.txt'),
      this.destinationPath('licencia.txt')
    );
    this.fs.copy(
      this.templatePath('license.txt'),
      this.destinationPath('license.txt')
    );
    this.fs.copy(
      this.templatePath('readme.html'),
      this.destinationPath('readme.html')
    );
    this.fs.copy(
      this.templatePath('shippable.yml'),
      this.destinationPath('shippable.yml')
    );
    this.fs.copy(
      this.templatePath('vagrant.sh'),
      this.destinationPath('vagrant.sh')
    );
    this.fs.copy(
      this.templatePath('wp-activate.php'),
      this.destinationPath('wp-activate.php')
    );
    this.fs.copy(
      this.templatePath('wp-blog-header.php'),
      this.destinationPath('wp-blog-header.php')
    );
    this.fs.copy(
      this.templatePath('wp-comments-post.php'),
      this.destinationPath('wp-comments-post.php')
    );
    this.fs.copy(
      this.templatePath('wp-config-sample.php'),
      this.destinationPath('wp-config-sample.php')
    );
    this.fs.copy(
      this.templatePath('wp-cron.php'),
      this.destinationPath('wp-cron.php')
    );
    this.fs.copy(
      this.templatePath('wp-links-opml.php'),
      this.destinationPath('wp-links-opml.php')
    );
    this.fs.copy(
      this.templatePath('wp-load.php'),
      this.destinationPath('wp-load.php')
    );
    this.fs.copy(
      this.templatePath('wp-login.php'),
      this.destinationPath('wp-login.php')
    );
    this.fs.copy(
      this.templatePath('wp-mail.php'),
      this.destinationPath('wp-mail.php')
    );
    this.fs.copy(
      this.templatePath('wp-settings.php'),
      this.destinationPath('wp-settings.php')
    );
    this.fs.copy(
      this.templatePath('wp-signup.php'),
      this.destinationPath('wp-signup.php')
    );
    this.fs.copy(
      this.templatePath('wp-trackback.php'),
      this.destinationPath('wp-trackback.php')
    );
    this.fs.copy(
      this.templatePath('xmlrpc.php'),
      this.destinationPath('xmlrpc.php')
    );
    this.fs.copy(
      this.templatePath('.openshift'),
      this.destinationPath('.openshift')
    );
    this.fs.copy(
      this.templatePath('stack'),
      this.destinationPath('stack')
    );
    this.fs.copy(
      this.templatePath('wp-admin'),
      this.destinationPath('wp-admin')
    );
    this.fs.copy(
      this.templatePath('wp-content'),
      this.destinationPath('wp-content')
    );
    this.fs.copy(
      this.templatePath('wp-includes'),
      this.destinationPath('wp-includes')
    );
  },

  install: function () {
  }
});
