import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  attributeBindings: [
    'isActive:aria-current'
  ],

  index: computed('siblings', function() {
    return this.get('siblings').indexOf(this);
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
