'use strict';

userApp.component('userDetail', {
    controller: function userDetailCtrl ($routeParams, UsersService) {
        var user = this;
        user.userLoaded = false;
        user.notfoundError = false;

        this.user = UsersService.get({
            userId: $routeParams['userId']
        }, function(successResult) {
            user.userLoaded = true;
    
            user.activeTab = 1;
            user.disableControlTab = true;
        }, function(errorResult) {
            user.notfoundError = true;
            user.userLoaded = true;
        });
    
        user.user.$promise.then(function(result) {
            //user.userLoaded = true;
        });
    
        user.deleteUser = function(userId) {
    
            this.user.$delete({
                userId: userId
            }, function(successResult) {
                // Окей!
                user.deletionSuccess = true;
            }, function(errorResult) {
                // Не окей..
                user.deletionError = true;
            });
    
        }
    },
    templateUrl: './src/UserDetail/UserDetail.html'
});
