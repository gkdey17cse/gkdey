
  $(document).ready(function () {
    var lastId,
        topMenu = $("#menu-content"),
        topMenuHeight = topMenu.outerHeight() || 0,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    menuItems.click(function (e) {
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - 60; // adjust scroll offset
      $('html, body').stop().animate({ scrollTop: offsetTop }, 400);
      e.preventDefault();
    });

    $(window).scroll(function () {
      var fromTop = $(this).scrollTop() + 80; // adjust scroll position

      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
      });

      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
        lastId = id;
        menuItems
          .removeClass("font-bold text-yellow-300")
          .filter("[href='#" + id + "']")
          .addClass("font-bold text-yellow-300");
      }
    });
  });



  console.log("Sc working");