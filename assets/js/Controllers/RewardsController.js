app.controller('RewardsController',['$scope', function($scope) {
    $scope.title = 'Rewards';
    $scope.rewardCount = 999;
    $scope.rewards = [
        {
            id: 1,
            name : '£10 Voucher',
            description : 'Redeem this reward and receive a £10 voucher you can spend at any Chain Reaction Cycles store!',
            creditCost : 500
        },
        {
            id: 2,
            name : '£20 Voucher',
            description : 'Redeem this reward and receive a £20 voucher you can spend at any Chain Reaction Cycles store!',
            creditCost : 900
        },
        {
            id: 3,
            name : 'Free Service',
            description : 'Redeem this reward and receive a £20 voucher you can spend at any Chain Reaction Cycles store!',
            creditCost : 900
        },
        {
            id: 4,
            name : 'Free Pump',
            description : 'Redeem this reward and receive a £20 voucher you can spend at any Chain Reaction Cycles store!',
            creditCost : 900
        }
    ];
}]);