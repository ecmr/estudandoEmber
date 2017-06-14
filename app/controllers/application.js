import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Ember',
  greeting: 'Salutations',
  restaurant: {name: 'Our Awsome restaurant', yearOpen: 1},
  newItem: null,
  menuLength: Ember.computed.alias('model.length'),
  avaliableItems: Ember.computed.filterBy('model', 'isAvaliable', true),
  qtdeTotal: Ember.computed.sum('qtde'),
  actions: {
    wasClicked(elementName){
      alert(`${elementName} was clicked!`);
    },
    makeUnavaliable(food){
      Ember.set(food, 'isAvaliable', false);
      food.save();
    },
    makeAvaliable(food){
      Ember.set(food, 'isAvaliable', true);
      food.save();
    },
    saveNewItem(){
      this.store.createRecord('food', {
        isAvaliable: false,
        name: this.get('newItem')
      }).save();
      this.set('newItem', '');
    },
    destroyItem(food){
      food.destroyRecord();
    },
    Somar(food){
      food.set('qtde', food.get('qtde') + 1);
      food.save();
    },
    Subtrair(food){
      if (food.get('qtde') > 0){
        food.set('qtde', food.get('qtde') - 1 );
        food.save();
      }
    }
  }

});
