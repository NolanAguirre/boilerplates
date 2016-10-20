angular.module('demo')
    .config(Router);

Router.$inject = ['$routeProvider'];
function Router($routeProvider) {
    $routeProvider
        .when('/', {/*controller: 'Controller as vm',*/templateUrl:'templates/home.html'})
        .otherwise({redirectTo: '/'});
}
