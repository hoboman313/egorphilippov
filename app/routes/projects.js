import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(){
    document.title = 'Projects';
  }
});
