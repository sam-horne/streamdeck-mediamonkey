# Mediamonkey Stream Deck integration

Control Mediamonkey with real-time feedback on your Elgato Stream Deck device.

<br>

![screenshot](images/docs/screenshot.PNG)
<br>

## Installation

1. Install [mediamonkey](https://www.mediamonkey.com/download).
2. Install the streamdeck-mediamonkey5 plugin from the [Elgato store](https://apps.elgato.com/plugins/com.samhorne.mediamonkey5) or one of the [releases](https://github.com/sam-horne/streamdeck-mediamonkey/releases).
3. Add desired actions to control Mediamonkey from the streamdeck.

## Features
* Control playback
  * Play
  * Pause
  * Stop
  * Previous/next track
  * Add tracks to now playing from:
    * Album
    * Artist
    * Playlist
  * Shuffle status
  * Repeat status
  * Volume and mute
  * Seek forwards or backwards
* Display information of current track
  * Title
  * Album
  * Artist
  * Album artwork
  * Rating
  * Track length
* Modify tracks
  * Increase or decrease rating of current track
* Modify playlist
  * Add or remove current track

Mediamonkey integration is implemented through the javascript [API](https://www.mediamonkey.com/docs/api/) using the Chrome DevTools protocol.

## Credits
[David Borzek (streamdeck-foobar2000)](https://github.com/davidborzek/streamdeck-foobar2000)