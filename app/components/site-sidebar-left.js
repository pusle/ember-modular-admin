import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    currentPath: null,

    init() {
        this._super(...arguments);

        let curPath = Ember.getOwner(this).lookup('controller:application').currentPath;
        this.set('currentPath', curPath);
    }
});
