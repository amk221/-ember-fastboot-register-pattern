import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['my-child'],
  attributeBindings: ['isActive:aria-current'],

  index: computed('siblings', function() {
    return this.siblings.indexOf(this);
  }),

  isActive: computed('index', 'activeIndex', function() {
    return this.index === this.activeIndex;
  }),

  init() {
    this._super(...arguments);
    this.onRegister(this);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.onDeregister(this);
  },

  mouseEnter() {
    this._super(...arguments);
    this.onActivate(this.index);
  }
});
