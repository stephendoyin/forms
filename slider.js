var myMin = 0,
  myMax = 150000;
$("#slider-range").slider({
  range: true,
  min: myMin,
  max: myMax,
  values: [75000, 100000],
  slide: function (event, ui) {
    $("#amount").val("₦" + ui.values[0] + " - ₦" + ui.values[1]);
    var left = (100 * (ui.values[0] - myMin)) / (myMax - myMin);
    var right = (100 * (ui.values[1] - myMin)) / (myMax - myMin);
    $(this).css(
      "background-image",
      "-webkit-linear-gradient(left, #144175 " +
        left +
        "%, #144175 " +
        right +
        "%)"
    );
  },
});

$("#amount").val(
  "₦" +
    $("#slider-range").slider("values", 0) +
    " - ₦" +
    $("#slider-range").slider("values", 1)
);
