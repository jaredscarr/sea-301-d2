(function(module) {
  var adminController = {};

  adminController.boss = function() {
      $('.index').hide();
      $('.admin').fadeIn();
  };

  module.adminController = adminController;
})(window);
