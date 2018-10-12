import Component from '@ember/component';
import { A as emberA } from '@ember/array';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  classNames: ['my-parent'],

  init() {
    this._super(...arguments);
    this.set('_children', emberA());
    this.set('children', emberA());
    this.set('activeChildIndex', -1);
  },

  _scheduleUpdateChildren() {
    scheduleOnce('afterRender', this, '_updateChildren');
  },

  _updateChildren() {
    this.set('children', emberA(this._children.toArray()));
  },

  actions: {
    registerChild(child) {
      this._children.addObject(child);
      this._scheduleUpdateChildren();
    },

    deregisterChild(child) {
      this._children.removeObject(child);
      this._scheduleUpdateChildren();
    },

    activateChildAtIndex(index) {
      this.set('activeChildIndex', index);
    }
  }
});
