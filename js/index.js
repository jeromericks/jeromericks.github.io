$(document).ready(function() {
	"use strict";

	
	$('.pause').click(function() {
		var $this = $(this);
	    $('header').css('background', 'url(/1.4.5._Twitter_Bootstrap/background2.jpg) no-repeat center center');
	    $('header').css('background-size', 'cover');
	    $('header').css('-webkit-background-size', 'cover');
	    $('header').css('-moz-background-size', 'cover');
		$('header').css('-o-background-size', 'cover');

		if($this.hasClass('pause')) {
			$this.removeClass('pause').addClass('play');
		}

		if($this.hasClass('play')) {
			$('.play').html('<i class="fa fa-fw fa-play"></i>');
		}
	});

	$('.play').click(function() {
		var $this = $(this);
		console.log($this);
		$('header').css('background', 'url(/1.4.5._Twitter_Bootstrap/background.gif) no-repeat center center');
	    $('header').css('background-size', 'cover');
	    $('header').css('-webkit-background-size', 'cover');
	    $('header').css('-moz-background-size', 'cover');
		$('header').css('-o-background-size', 'cover');
		if($this.hasClass('play')) {
			$this.removeClass('play').addClass('pause');
		}

		if($this.hasClass('pause')) {
			$('.pause').html('<i class="fa fa-fw fa-pause"></i>');
		}
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('.page-scroll a').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});

	// Floating label headings for the contact form
	$(function() {
	    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
	        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
	    }).on("focus", ".floating-label-form-group", function() {
	        $(this).addClass("floating-label-form-group-with-focus");
	    }).on("blur", ".floating-label-form-group", function() {
	        $(this).removeClass("floating-label-form-group-with-focus");
	    });
	});

	var words = ['Jerome Ricks', "Full-Stack Web Developer", "Hi", "Bye"],
    	div = document.getElementById('name'),
    	character_counter = 0,
    	counter = 0;

	function updateWords(){ 
		if(character_counter < words[counter].length) {
		  if(words[counter][character_counter] == ' ') {
		    div.innerHTML = div.innerHTML+'&nbsp;';
		  }
		  else {
		    if(character_counter == 0){
		    	div.innerHTML = words[counter][character_counter];
		    } else {
		    	div.innerHTML = div.innerHTML+ words[counter][character_counter];
		    }
		  }
		}

		character_counter++;

		if(character_counter == words[counter].length + 4){  
		    if(counter == 0){
		        div = document.getElementById('desc');
		        character_counter = 0;
		        counter ++;
		    } 
	    }
	}

	var nameInterval = setInterval(updateWords, 300);

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});
});