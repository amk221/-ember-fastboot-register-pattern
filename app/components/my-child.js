import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Component.extend({
  attributeBindings: [
    'isActive:aria-current'
  ],

  index: computed('children', function() {
    return this.get('children').indexOf(this);
  }),

  isActive: computed('index', 'active-index', function() {
    return this.get('index') === this.get('active-index');
  }),

  init() {
    this._super(...arguments);
    this.get('on-register')(this);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('on-deregister')(this);
  }
});
