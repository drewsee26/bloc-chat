(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        var ctrl = this;
        ctrl.rooms = Room.all;
        ctrl.currentRoomName = null;
        ctrl.currentUser = $cookies.get('blocChatCurrentUser');

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
        
        ctrl.sendMessage = function () {
            ctrl.newMessage.roomId = ctrl.currentRoomName.$id;
            ctrl.newMessage.username = ctrl.currentUser;
            Message.send(ctrl.newMessage);
        }
        
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();