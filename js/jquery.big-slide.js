/*! bigSlide - v0.4.0 - 2013-12-18
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2013 Adam D. Scott; Licensed MIT */
(function($) {
  'use strict';

  $.fn.bigSlide = function(options) {

    var settings = $.extend({
      'menu': ('#menu'),
      'push': ('.push'),
      'side': 'left',
      'sideStay': '54',
      'menuWidth': '371',
      'speed': '300',
      'triggerRes': 1024
    }, options);

    var menuLink = this,
        menu = $(settings.menu),
        push = $(settings.push),
        width = settings.menuWidth;

    var positionOffScreen = {
      'position': 'fixed',
      'top': '0',
      'bottom': '0',
      'settings.side': '-' + settings.menuWidth,
      'width': settings.menuWidth,
      'height': '100%'
    };

    var animateSlide = {
      '-webkit-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-moz-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-ms-transition': settings.side + ' ' + settings.speed + 'ms ease',
      '-o-transition': settings.side + ' ' + settings.speed + 'ms ease',
      'transition': settings.side + ' ' + settings.speed + 'ms ease'
    };

    menu.css(positionOffScreen);
    menu.css(animateSlide);
    push.css(animateSlide);

    menu._state = 'closed';

    menu.open = function() {
      menu._state = 'open';
      menu.css(settings.side, '0');
      push.css(settings.side, (width - settings.sideStay));
      menu.addClass('active');
      $('body').css({paddingLeft: "54px"});
    };

    menu.close = function() {
      menu._state = 'closed';
      if(settings.triggerRes < $(window).width()){
	  	menu.css(settings.side, '-' + (width - settings.sideStay) + "px");
      }
      else {
      	menu.css(settings.side, '-' + width + "px");
      	$('body').css({paddingLeft: "0"});
      }
	  push.css(settings.side, '0');
	  menu.removeClass('active');
    };

    menuLink.on('click.bigSlide', function(e) {
      e.preventDefault();
      if (menu._state === 'closed') {
        menu.open();
      } else {
        menu.close();
      }
    });
    
    $(window).resize(function(){
    	if(menu._state != 'open'){
    	  if(settings.triggerRes < $(window).width()){
		  	menu.css(settings.side, '-' + (width - settings.sideStay) + "px");
		  	$('body').removeAttr('style');
	      }
	      else {
	      	menu.css(settings.side, '-' + width + "px");
      		$('body').css({paddingLeft: "0"});
	      }
	    }
    });

    return menu;

  };

}(jQuery));
