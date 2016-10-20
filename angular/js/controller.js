angular.module('demo')
    .controller('Controller', HomeController);

HomeController.$inject = ['$routeParams']
function HomeController($routeParams) {
    var vm = this;
}
