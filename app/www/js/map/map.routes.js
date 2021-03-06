(function()
{
  angular
    .module('map')
    .config(config);

  function config($stateProvider, $urlRouterProvider) 
  {
    $stateProvider
      .state('app.map',
      {
        url: '/map/:gameID',
        params: {
          lat: '',
          long: ''
        },
        views: {
          menuContent: {
            templateUrl: 'js/map/map.tpl.html',
            controller: 'MapController'
          }
        }
      });
      
  }
})();