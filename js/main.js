/*
 * File: main.js
 * Authors: Patrick Ferguson.
 * Created: 22/09/2015
 * Copyright: ©2015 Plann3d Pty Ltd
 * Purpose: Basic site functionality. Provides CSS animation and GA event hooks.
 */

/*global ga */

var Plann3dMainDOM = {
    
};

/**
 * Sets up any CSS animation hooks that will occur throughout the document.
 */
Plann3dMainDOM.InitAnimHooks = function () {
    'use strict';
    
    // Fade in hero title text a few seconds after the start
    $('#hero-title').delay(500).animate({
        'opacity': '1.0'
    });
    
    // Fade in hero title sub-text a few seconds after the start
    $('#hero-title-subtext').delay(1500).animate({
        'opacity': '1.0'
    });
    
    // Fade in the subscribe text a small amount after the hero title subtext
    $('#hero-subscribe').delay(2500).animate({
        'opacity': '1.0'
    });
    
    // Table play button on hover
    var playHolder = $('#plann3d-player-link-holder');
    var playBtn = $('.plann3dPlayBtn');
    var lrgBtn = $('.plann3dPlayLargeBtn, .plann3dPlayLargeBtnText');
    playHolder.on('mouseover', function () {
        // Fade out
        playBtn.stop(true, false);
        playBtn.animate({
            'opacity': '0.0'
        });
        // Fade in
        lrgBtn.stop(true, false);
        lrgBtn.animate({
            'opacity': '1.0'
        });
    });
    playHolder.on('mouseleave', function () {
        // Fade in
        playBtn.stop(true, false);
        playBtn.animate({
            'opacity': '1.0'
        });
        // Fade out
        lrgBtn.stop(true, false);
        lrgBtn.animate({
            'opacity': '0.0'
        });
    });
    
    // Table auxiliary element on hover text
    var headset = $('.plann3dHeadset');
    var tablet = $('.plann3dTablet');
    var headsetText = $('.plann3dHeadsetText');
    var tabletText = $('.plann3dTabletText');
    headset.on('mouseover', function () {
        // Fade in
        headsetText.stop(true, false);
        headsetText.animate({
            'opacity': '1.0'
        });
    });
    headset.on('mouseleave', function () {
        // Fade out
        headsetText.stop(true, false);
        headsetText.animate({
            'opacity': '0.0'
        });
    });
    tablet.on('mouseover', function () {
        // Fade in
        tabletText.stop(true, false);
        tabletText.animate({
            'opacity': '1.0'
        });
    });
    tablet.on('mouseleave', function () {
        // Fade out
        tabletText.stop(true, false);
        tabletText.animate({
            'opacity': '0.0'
        });
    });
};

/**
 * Runs basic site functionality. Provides CSS animation and GA event hooks.
 */
Plann3dMainDOM.InitFunc = function () {
    'use strict';
    Plann3dMainDOM.InitAnimHooks();

    // Subscribe form submit
    $('#mc_embed_signup form').on('submit', function () {
        // Store analytics event
        ga('send', {
            'hitType': 'event', 
            'eventCategory': 'button', 
            'eventAction': 'click', 
            'eventLabel': 'Subscription button'
        });
    });

    // Contact form submit
    $('#contact-form').on('submit', function () {
        // Store analytics event
        ga('send', {
            'hitType': 'event', 
            'eventCategory': 'button', 
            'eventAction': 'click', 
            'eventLabel': 'Contact button'
        });
    });

    // Only load the player on click

    // Open
    $('.plann3dPlayerLink').on('click', function () {
        // Set frame reference
        var player = $('#plann3d-player');
        // Only add player if on PC
        if ($(window).width() >= 767) {
            player.attr('src', player.attr('data-src'));
        }

        // Store analytics event
        ga('send', {
            'hitType': 'event', 
            'eventCategory': 'button', 
            'eventAction': 'click', 
            'eventLabel': 'Player button'
        });
    });

    // Close
    $('.modal-footer a, .close-modal').on('click', function () {
        // Clear fame reference
        var player = $('#plann3d-player');
        player.attr('src', '');
    });
};

// Trigger init
$(Plann3dMainDOM.InitFunc);