$(document).ready(function () {
  $(document).mousemove(function (p) {
    var cursorX = p.pageX;
    var cursorY = p.pageY;
    var tranX = (7 * cursorX) / 570 + 40;
    var tranY = (7 * cursorY) / 570 + 50;
    $(".text").css({
      "background-position": tranX + "%" + tranY + "%",
    });
  });
});
