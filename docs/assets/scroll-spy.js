/*
 *  polyfill Element.closest
 */
if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest =
    function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this;
        do {
            i = matches.length;
            while (--i >= 0 && matches.item(i) !== el) {};
        } while ((i < 0) && (el = el.parentElement));
        return el;
    };
}


(function () {
  'use strict';

  var affixId = "affix";

  var section = document.querySelectorAll(".post-content div h2, .post-content div h3, .post-content div h4, .post-content div h5");
  var sections = [];
  var i = 0;

  var setScrollPosition = function(section) {
    var sections = [];

    Array.prototype.forEach.call(section, function(e) {
      sections.push({
        id: e.id,
        pos: e.offsetTop
      });
    });

    return sections
  }

  sections = setScrollPosition(section, sections);

  window.addEventListener('scroll',function() {
    var scrollPosition = window.scrollY;
    var found;

    var opened = document.querySelector('#'+ affixId + ' .opened');
    if(opened)
      opened.classList.remove('opened');

    var active = document.querySelector('#'+ affixId + ' .active');
    if(active)
      active.classList.remove('active');


    for (var i in sections) {
      if (sections[i].pos <= scrollPosition) {
        var a = document.querySelector('#'+ affixId + ' a[href$="#' + sections[i].id + '"]')

        if(a)
          found = a.parentElement
      } else {
        break;
      }
    }


    if(found) {
      found.classList.add('active');

      if(found.classList.contains('collapsible')) {
        found.classList.add('opened')
        // var ul = found.nextElementSibling;
        // if(ul)
        // ul.classList.add('opened');
      } else {
        var ul = found.parentElement;
        if(ul) {
          var li = ul.previousElementSibling
          if(li && li.classList.contains('collapsible'))
            li.classList.add('opened');
        }
      }
    }

  });

  window.addEventListener('click', function(e) {
    var target = e.target;
    setTimeout(function() {
      if(target.href == location.href) {
        var li = target.parentElement;
        if(li.classList.contains('collapsible')) {
          var ul = li.closest('ul');

          ul.querySelectorAll('#'+ affixId + ' .collapsible').forEach(function(li) {
            li.classList.remove('opened');
          });

          li.classList.add('opened');
        }
      }
    }, 1)
  });

  setTimeout(function() {
    window.scrollTo(window.scrollX, window.scrollY)
  }, 1)

  window.addEventListener("load", function() {
    sections = setScrollPosition(section, sections)
  })

})();
