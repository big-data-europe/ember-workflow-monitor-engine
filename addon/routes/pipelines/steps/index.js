import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model: function() {
    return this.modelFor('pipelines.steps').get('steps');
  }
});

