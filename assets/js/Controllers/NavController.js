app.controller('NavController',['$scope', function($scope) {
    $scope.links = [
        {
            title: "Home",
            url: "index.html"
        },
        {
            title: "Fix It",
            url: "fixit.html"
        },
        {
            title: "Shop",
            url: "shop.html"
        },
        {
            title: "Events",
            url: "events.html"
        },
        {
            title: "Rewards",
            url: "rewards.html"
        }
    ]
}]);

