'use strict';

userApp.component('userDetail', {
    controller: function userDetailCtrl ($routeParams, UsersService) {
        this.userLoaded = false;
        this.notfoundError = false;
        let userLoaded = this.userLoaded;
        let notfoundError = this.notfoundError;

        this.user = UsersService.get({
            userId: $routeParams['userId']
        }, function(successResult) {
            userLoaded = true;
    
            this.activeTab = 1;
            this.disableControlTab = true;
        }, function(errorResult) {
            notfoundError = true;
            userLoaded = true;
        });
    
        this.user.$promise.then(function(result) {
            //this.userLoaded = true;
        });
    
        this.deleteUser = function(userId) {
    
            this.user.$delete({
                userId: userId
            }, function(successResult) {
                // Окей!
                this.deletionSuccess = true;
            }, function(errorResult) {
                // Не окей..
                this.deletionError = true;
            });
    
        }
    },
    templateUrl: './src/UserDetail/UserDetail.html'
});
