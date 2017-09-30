import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    showNotificationDropDown: false,
    showProfileDropDown: false,

    actions: {
        toggleNotificationDropDown() {
            this.toggleProperty('showNotificationDropDown');
        },

        toggleProfileDropDown() {
            this.toggleProperty('showProfileDropDown');
        }
    }
});
