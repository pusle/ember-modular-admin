import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('edit');
    this.route('lists');
    this.route('flot-charts');
    this.route('morris-charts');
    this.route('static-tables');
    this.route('responsive-tables');
    this.route('forms');
    this.route('ui-elements', function() {
        this.route('buttons');
        this.route('cards');
        this.route('typography');
        this.route('icons');
        this.route('grid');
    });
});

export default Router;
