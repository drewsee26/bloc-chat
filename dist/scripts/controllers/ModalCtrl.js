(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        var ctrl = this;
        ctrl.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        ctrl.createRoom = function () {
            Room.add(ctrl.newRoom);
            $uibModalInstance.close();
        };
        
        ctrl.createUsername = function () {
            $cookies.put('blocChatCurrentUser', ctrl.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
