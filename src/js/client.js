console.log('hello world');

$(() => {

  $('.index-beer').on('mouseenter', function() {
    // $(this).find('.index-text').css({display: 'inline-block'});
    $(this).find('.index-text').delay(120).fadeIn();

  });

  $('.index-beer').on('mouseleave', function() {
    // $(this).find('.index-text').css({display: 'none'});
    $(this).find('.index-text').delay(120).fadeOut();
  });

  // $('.profile-display').on('mouseenter', function() {
  //   // $(this).find('.profile-text').css({display: 'inline-block'});
  //   $(this).find('.profile-text').delay(120).fadeIn();
  //
  // });
  //
  // $('.profile-display').on('mouseleave', function() {
  //   // $(this).find('.profile-text').css({display: 'none'});
  //   $(this).find('.profile-text').delay(120).fadeOut();
  // });

  $('a.navbar-brand').on('mouseenter', function() {
    $(this).find('#nav-logo').attr('src', '../images/minilogowhite.png');
    //$(this).html('<img id="nav-logo" src="../images/minilogowhite.png">');
  });

  $('a.navbar-brand').on('mouseleave', function() {
    $(this).find('#nav-logo').attr('src', '../images/minilogo.png');
    //$(this).html('<img id="nav-logo" src="../images/minilogowhite.png">');
  });

});
