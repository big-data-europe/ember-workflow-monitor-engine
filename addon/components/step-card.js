import Ember from 'ember';

export default Ember.Component.extend({
  statusIcon: Ember.computed('step.status', function() {
    switch (this.get('step.status')) {
      case 'starting':
        return 'hourglass_empty';
      case 'running':
        return 'play_arrow';
      case 'ready':
        return 'swap_horiz';
      case 'done':
        return 'done';
      case 'failed':
        return 'bug_report';
      default:
        return 'snooze';
    }
  }),
  userCanFinish: Ember.computed('step.status', function() {
    return this.get('step.status') === 'not_started';
  }),
  didInsertElement: function() {
    var performUpdate;
    performUpdate = (function(_this) {
      return function() {
        return Ember.run.next(function() {
          if (!_this.get('step.isDestroyed')) {
            _this.get('step').reload();
            return setTimeout(performUpdate, 1000);
          }
        });
      };
    })(this);
    return performUpdate();
  },
  actions: {
    finish: function() {
      this.set('step.status', 'done');
      return this.get('step').save();
    }
  }
});

