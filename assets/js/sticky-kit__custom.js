// EXEC BIO - STICKY KIT - OFFSET TOP //
    $("#profile").stick_in_parent({offset_top: 130});

// SIDEBAR - STICKY KIT - OFFSET TOP //
    $("#sidebar").stick_in_parent({offset_top: 130});

// TABS FOR PRIVACY AND TERMS - STICKY KIT - OFFSET TOP //
    $("#tabs").stick_in_parent({offset_top: 130});


// TURN OFF STICKY KIT ON MOBILE //
    jQuery(document).ready(function(){

    var window_width = jQuery( window ).width();

    if (window_width < 600) {
      jQuery(".sticky-item").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }

    jQuery( window ).resize(function() {

      window_width = jQuery( window ).width();

      if (window_width < 601) {
        jQuery(".sticky-item").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    function make_sticky() {
      jQuery(".sticky-item").stick_in_parent({
        parent: '.sticky-wrapper'
      });
    }

});

// STICKY KIT - CUSTOM INITIALIZE //
  (function() {
    var win = $(window);
    var sizes = {
      half: 0.5,
      full: 1,
      threequarter: 3/4,
      onefive: 1.5,
      "double": 2,
      triple: 3
    }
    for (k in sizes) {
      var v = sizes[k]
      $("." + k).css({
       height: Math.floor(win.height() * v) + "px"
      });
    }

    function attach() {
      $(".sticky-wrapper .sticky-item").stick_in_parent();

      $(".sticky-wrapper .sticky-item").stick_in_parent({
        parent: ".sticky-wrapper",
        spacer: ".manual_spacer"
      });
    }

    attach();

    $("#events_container").on("sticky_kit:stick", function(e) {
      $(e.target).html("got stick event");
    });

    $("#events_container").on("sticky_kit:unstick", function(e) {
      $(e.target).html("got unstick event");
    });

    $("#events_container").on("sticky_kit:bottom", function(e) {
      $(e.target).html("got bottom event");
    });

    $("#events_container").on("sticky_kit:unbottom", function(e) {
      $(e.target).html("got unbottom event");
    });

    $(document.body)
      .on("click", ".recalc", function() {
        console.log("Triggering recalc");
        $(document.body).trigger("sticky_kit:recalc")
      })
      .on("click", ".detach", function() {
        console.log("Triggering detach");
        $(".container .item").trigger("sticky_kit:detach");
      })
      .on("click", ".attach", function() {
        console.log("Triggering attach");
        attach();
      })
      .on("click", ".grow_element", function(e) {
        var elm = $($(e.currentTarget).data("target"));
        elm.animate({height: elm.height() * 2}, function() {
          console.log("triggering recalc...");
          $(document.body).trigger("sticky_kit:recalc")
        });
      })
      .on("click", ".scramble_element", function(e) {
        var elm = $($(e.currentTarget).data("target"));
        var new_height = Math.floor(win.height() * (1 + Math.random()));
        console.log("setting new height", new_height);
        elm.css({height: new_height + "px"});
      });

  })();
