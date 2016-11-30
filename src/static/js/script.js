var $html = $('html');

var scrollbarWidth = window.innerWidth - $(window).width();
var sidePaddingDesktop = 34;

// Detect whether device supports orientationchange event, otherwise fall back to
// the resize event.
var supportsOrientationChange = "onorientationchange" in window,
	orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

// Update viewportWidth when viewport size changed
var viewportWidth = window.innerWidth;

$(window).on(orientationEvent, function(e){
	viewportWidth = window.innerWidth;
});


// DOM ready
$(document).ready(function () {

	$(window).trigger(orientationEvent);
  const transformFactor = 0.4;

// Functions
  const scale = (n, min, max) => n * (max - min) + min;
  const calculateAngle = (x, y, width, height) => Math.atan2(x - (width / 2), -(y - (height / 2))) * (180 / Math.PI);

// TODO: Use requestAnimationFrame?
// TODO: Make interface for matrix transformation
// TODO: Make interface for the component with options
//       for easy customization.

  const $square = $('.wrap');

  let squareW = $square.width();
  let squareH = $square.height();

  $square.on('mousemove', function (e) {
    const x = e.pageX - $(this).offset().left;
    const y = e.pageY - $(this).offset().top;

    const scaledX = scale(x / squareW, -0.01, 0.01);
    const scaledY = scale(y / squareH, -0.05, 0.05);
    const scaledX1 = scale(x / squareW, 0.99, 1);
    const scaledY1 = scale(y / squareH, -0.05, 0.05);

    const maxX = Math.atan2(9999, squareH * .5 * 180 / Math.PI);
    const maxY = Math.atan2(9999, squareW * .5 * 180 / Math.PI);

    // FEATURE: Use radial gradient for better shadow.

    $(this).css({
      transform: `matrix3d(
      ${scaledX1}, 0, ${-scaledY * transformFactor}, 0,
      0, 1, ${-scaledX * transformFactor}, 0,
      0, 0, 1, 0,
      0, ${-scaledX * transformFactor}, 0, 1
    )`
    });
  });



});
