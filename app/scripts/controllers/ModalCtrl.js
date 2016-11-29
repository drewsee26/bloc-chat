(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        var ctrl = this;
        ctrl.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        ctrl.submit = function () {
            Room.add(ctrl.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
