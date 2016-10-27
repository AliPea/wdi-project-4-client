angular
  .module("pintage")
  .factory("Drink", drinkFactory);

drinkFactory.$inject = ["API", "$resource"];
function drinkFactory(API, $resource){
  return $resource(`${API}/drinks/:id`, { id: "@id"}, {});
}
