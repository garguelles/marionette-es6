import $ from 'jquery';
import Marionette from 'backbone.marionette';
import AppController from '../controllers/main-controller';

export default Marionette.AppRouter.extend({

  initialize() {
    this.controller = new AppController();
    console.log('appcontroller', this.controller);
  },

  appRoutes: {
    '': 'dashboard'
  }
/*
  initialize() {
    $('body').append('<div id="js-app"></div>');
  },

  dashboard() {
    var helloView = new HelloView({
      template: _.template('Hello <%= name %> !')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  },

  about() {
    var helloView = new HelloView({
      template: _.template('Im the about page')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  }
*/
});
