angular
  .module("pintage")
  .controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "$stateParams", "Drink"];
function usersShowCtrl(User, $stateParams, Drink){
  const vm = this;
  vm.user  = User.get($stateParams);

  vm.addDrink = function(){
    Drink
      .save({ drink: vm.drink })
      .$promise
      .then(data => {
        $('#addDrink').modal('toggle');
        vm.user = User.get($stateParams);
      });
  };
}
