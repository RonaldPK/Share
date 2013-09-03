/**
 *  share.js
 *  Cordova Share Plugin for Android
 *
 *  Created by Ronald Klip ((github.com/RonaldPK)) on 02-09-2013.
 *  Copyright 2013 Ronald Klip. All rights reserved.
 *  LGPL v3 licensed
 */

var Share = function () {

};

Share.prototype = {
    /**
     * Open the Android share dialog.
     */
	show: function (message, win, fail) {
		var types = ["image/jpeg", "image/gif", "image/png", "image/bmp"];
		if (types.join("|").indexOf(message.mimeType) < 0) {
			return false;
		}
		cordova.exec(win, fail, 'Share', 'show', [{subject: message.subject, text: message.text, imagePath: message.imagePath, mimeType: message.mimeType}]);
	}
		   
};

var share = new Share();

module.exports = share;
