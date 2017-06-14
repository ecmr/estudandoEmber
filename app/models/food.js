import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  isAvaliable: attr('boolean'),
  qtde: attr('number', {defaultValue: 0})
});
