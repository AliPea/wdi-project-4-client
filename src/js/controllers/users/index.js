angular
.module("pintage")
.controller("UsersIndexCtrl", UsersIndexCtrl);

UsersIndexCtrl.$inject = ["User"];
function UsersIndexCtrl(User){
  const vm = this;
  User
  .query()
  .$promise
  .then(data => {
    vm.users = data.users;
  });
}
