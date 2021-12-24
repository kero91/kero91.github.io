(function() {
  osSelector = {
    init: function() {
      var selector = document.querySelector('#os-selector');
      if(!selector) return;
      selector.onchange = function(event) {
        var selectedOs = event.currentTarget.value.toLowerCase();
        if(selectedOs.indexOf('win') >= 0) { // move to win
          location.href = location.href.replace('mac', 'win');
        } else { // move to mac
          location.href = location.href.replace('win', 'mac');
        }
      };
    }
  };

  osSelector.init();
})();