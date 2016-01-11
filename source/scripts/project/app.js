/* App Configuration */

angular.module( "ink", [
    "ngRoute",
    "ngTouch",
    "ngSanitize",
    "ngMessages",
    "ngAnimate",
    "ink.controllers",
    "ink.services",
    "ink.directives",
    "ink.filters"
] )

.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider",

    function ( $routeProvider, $locationProvider, $sceDelegateProvider )
    {
        "use strict";

        $routeProvider.when( "/", {
            templateUrl: "/build/templates/partials/home.html",
            controller: "Home",
            controllerAs: "home"
        } );
        $routeProvider.otherwise( {
            redirectTo: "/"
        } );

        $locationProvider.html5Mode( true ).hashPrefix( "!" );

        $sceDelegateProvider.resourceUrlWhitelist(
            [ "self" ]
        );
    }

] )

.constant( "APIRoot",   "{{ APIROOT }}" )
.constant( "LoginPath", "/path/to/login/" );

angular.module( "ink.controllers", [] );
angular.module( "ink.services", [] );
angular.module( "ink.directives", [] );
angular.module( "ink.filters", [] );
