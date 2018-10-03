// ==UserScript==
// @name         OzBargain Hide Comment Replies
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide comment replies on OzBargain
// @author       Dazweeja
// @match        https://www.ozbargain.com.au/node/*
// @grant        none
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $('ul.comment.level1').each(function() {
        var replies = $( this );
        var showLink = $('<a>show replies</a>').click(function() {
            if ($( this ).text() == 'show replies') {
                replies.css('display', 'block');
                $( this ).text('hide replies');
            }
            else {
                replies.css('display', 'none');
                $( this ).text('show replies');
            }
        });
        var item = $('<li>').append(showLink);
        replies.prev().find('ul.links').append(item);
        replies.css('display', 'none');
    });
})();