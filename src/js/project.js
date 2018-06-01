/* constants */
$(function() {
  console.log('roger');

  $(".devices__laptop-screen").scroll(function() {
    scrolling('laptop')
  });

  $(".devices__phone-screen").scroll(function() {
    scrolling('phone')
  });

  function scrolling(device) {
    $('.js-scrollable-' + device).fadeOut();
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('.js-scrollable-' + device).fadeIn();
    }, 1600));
  }
});
