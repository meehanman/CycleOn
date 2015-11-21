app.controller('NavController',['$scope', function($scope) {
    $scope.links = [
        {
            title: "Home",
            url: "index.html"
        },
        {
            title: "Fix It",
            url: ""
        },
        {
            title: "Shop",
            url: ""
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