(function() {
    function HomeCtrl(Room, $uibModal) {
        var ctrl = this;
        ctrl.title = "Bloc Chat";
        ctrl.rooms = Room.all;
        ctrl.newRoomModal = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();