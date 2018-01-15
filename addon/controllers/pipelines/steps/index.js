import Ember from 'ember';

export default Ember.Controller.extend({
  stepSorting: ['order'],
  sortedSteps: Ember.computed.sort('model', 'stepSorting')
});
