var Boxlayout = function() {

  var wrapper = document.body,
      sections = Array.from(document.querySelectorAll('.section')),
      closeButtons = Array.from(document.querySelectorAll('.close-section')),
      expandedClass = 'is-expanded',
      hasExpandedClass = 'has-expanded-item';

  return { init : init };

  function init() {
    _initEvents();
  }

  function _initEvents() {    
    sections.forEach(function(element) {
      element.onclick = function() {
        _openSection(this);
      };
    });
    closeButtons.forEach(function(element) {
      element.onclick = function(element) {
        element.stopPropagation();
        _closeSection(this.parentElement);
      };
    });
  }

  function _openSection(element) {
    if ( ! element.classList.contains(expandedClass) ) {
      element.classList.add(expandedClass);
      wrapper.classList.add(hasExpandedClass);
    }
  }

  function _closeSection(element) {
    if ( element.classList.contains(expandedClass) ) {
      element.classList.remove(expandedClass);
      wrapper.classList.remove(hasExpandedClass);
    }
  }

}();

Boxlayout.init();