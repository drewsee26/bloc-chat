(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        var ctrl = this;
        ctrl.rooms = Room.all;
        ctrl.currentRoomName = null;

        ctrl.newRoomModal = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        
        ctrl.setCurrentRoom = function (room) {
            ctrl.currentRoomName = room;
            ctrl.messages = Message.getByRoomId(ctrl.currentRoomName.$id);
        }
        
        
        
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();