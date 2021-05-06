var work_slideshow_position = 0;
var work_slideshow_count = 0;
var isMobile = false;

$(function() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    isMobile = true;
  }
  var mouse_pos = {
    x: 0,
    y: 0
  }
  var cursor_pos = {
    x: 0,
    y: 0
  }
  var pos_difference = {
    x: 0,
    y: 0
  }
  var body_rotation = {
    x: 0,
    y: 0
  }
  var window_size = {
    width: $(window).width(),
    height: $(window).height(),
  }
  var rot_difference = {
    x: 0,
    y: 0
  }
  var body_rotation_multiplier = 3000;
  if(isMobile == false) {
    setInterval(move_cursor, 16.666666666666);
  }
  function move_cursor() {
    pos_difference.x = mouse_pos.x - cursor_pos.x;
    pos_difference.y = mouse_pos.y - cursor_pos.y;
    if(pos_difference.x != 0 || pos_difference.y != 0) {
      cursor_pos.x += pos_difference.x * 0.01;
      cursor_pos.y += pos_difference.y * 0.01;
      $('#cursor-gradient').css("transform", "translate("+cursor_pos.x+"px, "+cursor_pos.y+"px)");
    }
    rot_difference.x = mouse_pos.y - window_size.height / 2 - body_rotation.x;
    rot_difference.y = mouse_pos.x - window_size.width / 2 - body_rotation.y;
    if(rot_difference.x != 0 || rot_difference.y !=0) {
      body_rotation.x += rot_difference.x * 0.5;
      body_rotation.y += rot_difference.y * 0.5;

      $('.inner-body').css('transform', 'translate3d(0px, 0px, -15px) rotateX('+ body_rotation.x / -body_rotation_multiplier*3 +'deg) rotateY(' + body_rotation.y / -body_rotation_multiplier + 'deg)');
    }
  }
  $(document).mousemove(function(e) {
    mouse_pos.x = e.pageX;
    mouse_pos.y = e.pageY;
  });
  function natural_body() {
    $('body').addClass('mega_perspective');
    setTimeout(function(e) {
      $('body').removeClass('mega_perspective');
    }, 60);
  }
  var starsVisible = false;
  $('.eu-link').on('click', function(e) {
    $('.eu-stars').css('display', 'block');
    starsVisible = true;
    $('.eu-stars').stop().animate({opacity:'100'});
    fadeOutStars();
  }).on('mouseleave', function(e) {
    return;
  });

  $('.about-link').on('click', function(e) {
    natural_body();
    $('.about').addClass('open');
    $(document).one('keydown', function(e) {
      if(e.key == 'Escape') {
        $('.about .close').click();
      }
    })
    $('.threed').hide();
  });
  $('.about .close').on('click', function(e) {
    natural_body();
    $('.about').removeClass('open');
    $('.threed').show();
  });


  function scrollToTop() {
    $('html, body').animate({ scrollTop: 0}, 150);
  }

  function toggleTopBitBackground() {
    if($(document).scrollTop() > 30) {
      $('.top-bit').css('background', 'none');
      //$('.top-bit').css('z-index', 9);
      //$('.menu').css('opacity', 1);
    } else {
      $('.top-bit').css('background', 'none');
      //$('.top-bit').css('z-index', 1);
      //$('.menu').css('opacity', 0);
    }
  }

  function fadeOutStars() {
    $('.eu-stars').fadeOut(10000, function(e) {
      starsVisible = false;
      $('.eu-stars').removeClass('rotating');
    });
  }
  function IsScrollbarAtBottom() {
    return;
    var documentHeight = $(document).height();
    var scrollDifference = $(window).height() + $(document).scrollTop();
    return (documentHeight == scrollDifference);
  }
  $('.skillset-link').on('click', function() {
    $('#cube').removeClass('cube-animation');
    setTimeout( function() {$('#cube').addClass('cube-animation')}, 10);
  });
  $('#cube').on('click', function(e) {
    $('#cube').removeClass('cube-animation');
  })
});