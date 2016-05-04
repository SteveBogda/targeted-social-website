app.config(function($routeProvider) {
$routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'javascript/templates/modules/home/home.html'
    })

    .when('/clients', {
        templateUrl : 'javascript/templates/pages/partners.html'
    })

    .when('/creative', {
        templateUrl : 'javascript/templates/pages/creative.html'
    })

    .when('/paid-media', {
        templateUrl : 'javascript/templates/pages/media.html'
    })


    .when('/technology', {
        templateUrl : 'javascript/templates/pages/tech.html'
    })


    .when('/content-management', {
        templateUrl : 'javascript/templates/pages/social.html'
    })

    .when('/team', {
        templateUrl : 'javascript/templates/pages/leaders.html'
    })


    .when('/contact', {
        templateUrl : 'javascript/templates/pages/contact.html'
    });


});


