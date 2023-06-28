var work_slideshow_position = 0;
var work_slideshow_count = 0;
var isMobile = false;

$(function() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    isMobile = true;
  }
  if(isMobile) {
    setTimeout(function(e) {
      //$('.mobile-question').fadeIn(100);
    }, 8000);
    $('.mobile-question .stay').on('click', function() {
      console.log('clicked');
      $('.mobile-question').fadeOut(0);
    });
    $('.mobile-question .leave').on('click', function() {
      $('.mobile-mountains').fadeIn(2000);
      console.log('clicked');
    });
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

  $('.logo-text-only').on('click', scrollToTop);

  $('.about-link').on('click', function(e) {
    $('.about').addClass('open');
    $(document).one('keydown', function(e) {
      console.log(e.key);
      if(e.key == 'Escape') {
        $('.about .close').click();
      }
    })
    $('.threed').hide();
  });
  $('.about .close').on('click', function(e) {
    $('.about').removeClass('open');
    $('.threed').show();
  })

  $('.instagram').on('mouseover', function(e) {
    $('.threed').css('transform', 'translateY(850px) translateZ(-1px) rotateZ(90deg) scale(0.2, 0.2)');
  }).on('mouseout', function(e) {
    $('.threed').css('transform', 'translateY(0px) translateZ(-1px) rotateZ(0deg) scale(1, 1)');
  })

  work_slideshow_count = $('.work-item-container').children().length;
  setWorkCountText();

  $('.work-right').on('click', function(e) {
    work_slideshow_position += 1;
    if(work_slideshow_position >= work_slideshow_count) {
      work_slideshow_position = 0;
    }
    $('.work-item-container').css('left', work_slideshow_position * -100 + '%');
    setWorkCountText();
  });
  $('.work-left').on('click', function(e) {
    work_slideshow_position -= 1;
    if(work_slideshow_position < 0) {
      work_slideshow_position = work_slideshow_count-1;
    }
    $('.work-item-container').css('left', work_slideshow_position * -100 + '%');
    setWorkCountText();
  });
  function animateWorkItem(dir) {
    var angle = 0;
    var transformOrigin = '';
    if(dir == 'right') {
      angle = 0;
      transformOrigin = 'left';
    } else {
      angle = -0;
      transformOrigin = 'right';
    }
    $('.work').css('transform-origin', transformOrigin + ' center').css('transform', 'rotateY(' + angle + 'deg) scale(1.005, 1)');
    setTimeout(function(e) {
      $('.work').css('transform', 'rotateY(0deg)  scale(1, 1)');
    }, 100);
  }

  function setWorkCountText() {
    var count_display = work_slideshow_count -1;
    $('.work-count').text(work_slideshow_position + "/" + count_display);
  }

  var scrollTimeout = setTimeout(function(){}, 1);
  $(window).on('scroll', function(e) {
    if (starsVisible) {
      $('.eu-stars').css('transform', 'rotate(' + -$(document).scrollTop()/10 + 'deg)');
    }
    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('.work').offset().top - 70,
    distance      = (elementOffset - scrollTop);
    if(Math.abs(distance) < 50) {
      $('.main-title.selected-projects').css('opacity', '0');
    } else {
      $('.main-title.selected-projects').css('opacity', '1');
    }
    clearTimeout(scrollTimeout);
    if( $('html, body').is(':animated') ) {

    } else {
      $('html, body').stop();
      if(Math.abs(distance) < 200) {
        scrollTimeout = setTimeout(function(){
          $('html, body').animate({ scrollTop: elementOffset}, 150);
        }, 500);
      } else {
      }
    }

    toggleTopBitBackground();
  })

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