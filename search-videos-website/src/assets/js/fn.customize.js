(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function($, undefined) {
  'use strict';
  $.showLoading = function(elm) {
    $('body').addClass('cursor-wait');
    if (elm) {
      $(elm).LoadingOverlay('show', {
        maxSize: 60,
        imageColor: '#85CE36',
      });
    } else
      $.LoadingOverlay('show', {
        maxSize: 60,
        imageColor: '#85CE36',
      });
  };
  $.hideLoading = function(elm) {
    if (elm) {
      $(elm).LoadingOverlay('hide');
    } else $.LoadingOverlay('hide');
    setTimeout(() => {
      $('body').removeClass('cursor-wait');
    }, 300);
  };

  $.success = function(msg, position = 'toast-top-right') {
    toastr.options = {
      positionClass: position,
    };
    toastr.success(msg, 'success');
  };
  $.warning = function(msg, position = 'toast-top-right') {
    toastr.options = {
      positionClass: position,
    };
    toastr.warning(msg, 'warning');
  };
  $.info = function(msg, position = 'toast-top-right') {
    toastr.options = {
      positionClass: position,
    };
    toastr.info(msg, 'info');
  };
  $.error = function(msg, position = 'toast-top-right') {
    toastr.options = {
      positionClass: position,
    };
    toastr.error(msg, 'error');
  };
});
