// ==UserScript==
// @name         OzBargain Hide All Comment Replies
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide all comment replies on OzBargain
// @author       Dazweeja
// @match        https://www.ozbargain.com.au/node/*
// @grant        none
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    var replies = $('ul.comment.level1');
    var showLink = $('<a>hide replies</a>').click(function() {
        if ($( this ).text() == 'show replies') {
            replies.css('display', 'block');
            $( this ).text('hide replies');
        }
        else {
            replies.css('display', 'none');
            $( this ).text('show replies');
        }
    });

    var item = $('<span>').append(' (').append(showLink).append(')').css('text-transform', 'none');
    $('#comment').append(item);
})();