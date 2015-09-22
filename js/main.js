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
 * Runs basic site functionality. Provides CSS animation and GA event hooks.
 */
Plann3dMainDOM.InitFunc = function () {
    'use strict';
    // Fade in hero title text a few seconds after the start
    $('#hero-title-subtext').delay(3500).animate({
        'opacity': '1.0'
    });

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
        player.attr('src', player.attr('data-src'));

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