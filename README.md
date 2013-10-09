Cordova Share Plugin for Android
================================

A very simple plugin for Cordova 3.x.x to share a message and an image using Android's native share dialog.

By Ronald Klip ([github.com/RonaldPK](https://github.com/RonaldPK)).

Based on the PhoneGap Android Share Plugin by Joram Teusink (http://teusink.blogspot.nl/2013/04/phonegap-android-share-plugin.html).

## Supported Platforms ##
- **Android**

## Adding the Plugin to your project ##
Through the [Command-line Interface](http://cordova.apache.org/docs/en/3.0.0/guide_cli_index.md.html#The%20Command-line%20Interface):
```
cordova plugin add https://github.com/RonaldPK/Share.git
```

## Release Notes ##
#### Version 1.0.0 (02-09-2013) ####
- Initial release.

## Using the plugin ##
The plugin creates the object ```window.plugins.share``` with one method:

### show() ###
Takes three parameters: a success callback, a fail callback, and a set of message parameters
```javascript
window.plugins.share.show(messageParams, success, fail);
```

messageParams should be an object with four properties:
```javascript
{
	subject:	'subject line', // string
	text:		'text here',    // string
	imagePath: 	'path/to/image',// string
	mimeType:	'type'          // string
}
```

imagePath should be a valid path to a local file. Use PhoneGap's File and FileTransfer core plugins if you need to fetch an image over the web.

mimeType should be one of "image/jpeg", "image/gif", "image/png" or "image/bmp", matching the image.

####  Example ####
```javascript
window.plugins.share.show({subject: 'Hi there!', text: 'Main message here', imagePath: 'file:///storage/sdcard0/myApp/picture.jpg', 'image/jpeg'}, success, fail);
function success() {}
function fail(error) {console.log('Error: ' + error);}
```

## Facebook ##
Please note that Facebook's Android app does not allow Android's native share dialog to post text (sigh). Using this plugin will only post an image.

=======
