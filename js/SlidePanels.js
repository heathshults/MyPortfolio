// JavaScript Document
$(function () {
	"use strict";

	/* SLIDE FULL IMAGE */
	$('#sliderwrap.slidefullimage').hover(function () {
			$(this).children('#front').stop().animate({
				"top": '360px'
			}, 700);
		},
		function () {
			$(this).children('#front').stop().animate({
				"top": '0px'
			}, 400);
		});


	/* SLIDE CAPTION 20% */
	$('#sliderwrap.slideupcaption').hover(function () {
			$(this).children('#front').stop().animate({
				"top": '25%'
			}, 400);
		},

		function () {
			$(this).children('#front').stop().animate({
				"top": '360px'
			}, 800);
		}
	);


	/* SLIDE FULL IMAGE CAPTION */
	$('#sliderwrap.slidefullcaption').hover(function () {
			$(this).children('#front').stop().animate({
				"top": '360px'
			}, 700);
		},
		function () {
			$(this).children('#front').stop().animate({
				"top": '0px'
			}, 1000);
		});


	/* SLIDE CAPTION from 20% to half of the image*/
	$('#sliderwrap.slidehalfcaption').hover(function () {
			$(this).children('#front').stop().animate({
				"top": '110px'
			}, 200);
		},
		function () {
			$(this).children('#front').stop().animate({
				"top": '145px'
			}, 100);
		});


	/* SLIDE IMAGE HORIZONTAL to 20% */
	$('#sliderwrap.slideimghorizontal').hover(function () {

		$(this).children('#front').stop().animate({
			"top": '55px'
		}, 300);

	}, function () {

		$(this).children('#front').stop().animate({
			"top": '0px'
		}, 200);

	});


	/* SLIDE IMAGE DIAGONAL */
	$('#sliderwrap.slideimgdiagonal').hover(function () {

		$(this).children('#front').stop().animate({
			"top": '310px',
			"left": '450px'
		}, 600);

	}, function () {

		$(this).children('#front').stop().animate({
			"top": '0px',
			"left": '0px'
		}, 800);

	});

});