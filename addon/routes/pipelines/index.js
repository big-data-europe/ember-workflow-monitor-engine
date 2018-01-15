import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model: function() {
    return this.get('store').query('pipeline', {
      page: {
        size: 10000
      },
      sort: 'title'
    });
  }
});
