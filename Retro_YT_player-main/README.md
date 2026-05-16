![header](https://github.com/dorianbay/github_images/blob/6622100b5614e30fc3fc35f56da6640c86971eb8/YT_player/YT_player_header.png)

# Retro YouTube player for indie web

This is a retro YouTube player widget for the girls, gays, and theys! I made this widget especially for the girly webmasters, like myself, who want to share their favourite music on their personal sites. It's look is inspired by the audio players of the 2000s, while being responsive and customisable.

I was looking for a player for my own site and was disappointed when none of them matched my style. So I decided to create one! It is coded is purely coded in HTML, CSS, and JavaScript so it can be used on sites such as Neocities even with a free account. It is also fully responsive. As such it can be viewed and used on mobile devices.

## Features

- Make your own playlists
- Customise the player by defining your own themes
- Controls for media playback and volume
- Enable/disable shuffle during media playback
- Automatically play the next song if the previous one ended
- Fully responsive for mobile devices
- Coded exclusively with HMTL, CSS, and JavaScript
- Private! By default it uses `youtube-nocookie` to play videos
    - some data will still get sent to YouTube but `youtube-nocookie` URLs block a lot of it

## How to use

There are three files and one folder in this download which you will need for the player to work properly.

### Explaining the player files

- the `player_themes` folder - contains the icons for each theme of the player
- `player.html` - the HTML code of the player, its skeleton
- `player_style.css` - the CSS rules of the player
- `playlist.js` - the scripts required for the player to work, this is where you'll define your playlists and themes

### Setting the player up

#### Method 1

1. Download and extract the source code from GitHub
2. Copy and paste the `YT_player` folder into your website's directory

#### Method 2

1. Open the `player.html` file. Copy the entire `div` with the id `mp3_player`
2. Paste the `div` into your HTML document
3. Open the `player.html` file again and copy the code between its `head` tags. Paste the code between the `head` tags of your HTML document
4. If you put the `player_style.css` file in another folder, make sure to adjust the path of the `href` attribute accordingly
5. Copy the line `<script src="playlist.js"></script>` right above the closing `body` tag of your HTML document.
6. If you put the `playlist.js` file in another folder, make sure to adjust the path of the `src` attribute accordingly
7. Adjust the paths to the control icons in the `player.html` and `playlist.js` files

The player should now be working! For now you have my starting playlists. Let's add some of your own!

**Important** The videos will only play if the player is uploaded to a server or to your `localhost` because of the YouTube API requirements. The videos will not load if you use it as a local file.

### Adding your own playlists

1. Open the `playlist.js` file
2. At the top of the file you'll find an array of objects named `playlists`. Each object represents a playlist. Each playlist has an `Id`, `Name`, and an array called `songs`.
3. Copy one of the pre-existing playlists and paste it into the `playlists` array or adjust a pre-existing one
4. If you are pasting a new playlist into the `playlists` array, **don't forget to add a comma after the previous one**
5. Change a playlist's name by changing the value of the `Name:` attribute
6. Change the value of the `Id` attribute to fit the name but don't include spaces

   ![GIF showing how to add and edit a playlist.](https://github.com/dorianbay/github_images/blob/62a088347c2d4e5e0e693960b7bc4f6964b748a2/YT_player/new_playlist_0.2.0.gif)
   
7. In the `songs` array, add each song's name, artist, album, and year of release by changing the corresponding values
8. Change the value of the `videoId:` attribute to the ID of your desired video on YouTube. An ID of a video is a string of letters and numbers that you see in a video URL.
   - if vour video URL looks like this: `https://youtu.be/vBynw9Isr28`, its ID is located after `https://youtu.be/`
   - if your video URL looks like this: `https://www.youtube.com/watch?v=vBynw9Isr28`, its ID is located after `watch?v=` 
   - if your video URL looks like this: `https://www.youtube-nocookie.com/embed/vBynw9Isr28`, its ID is located after `/embed/`
   - in this case, the ID is `vBynw9Isr28`.

    ![GIF showing how to add and edit a song.](https://github.com/dorianbay/github_images/blob/62a088347c2d4e5e0e693960b7bc4f6964b748a2/YT_player/new_song_0.2.0.gif)
    
9. To add more playlists, copy the same structure of the previous ones and change the values. Same goes for the songs. Add howevermany you want!

### Adding your own themes

1. Open the `playlist.js` file
2. Find the array of objects named `themes`. Each object represents a theme. Each theme has an `Id`, `Name`, and three colours called `colourMain`, `colourSecond`, `colourThird`
3. Copy one of the pre-existing themes and paste it into the `themes` array or adjust a pre-existing one
4. If you are pasting a new theme into the `themes` array, **don't forget to add a comma after the previous one**
5. Change a theme's name by changing the value of the `Name:` attribute
6. Change the value of the `Id` attribute to fit the name but don't include spaces
7. Change the colour scheme of a theme by changing the HEX codes of each colour

    ![GIF showing how to add and edit a song.](https://github.com/dorianbay/github_images/blob/197f4cf51113dc2d45213dd872cc232448348f18/YT_player/new_theme.gif)
   
9. To add matching control icons, create a new sub-folder in the `player_themes` folder and give it the same name as the `Id` of your new theme
10. Put your icons into the folder

## Credits

- Huge thanks to the Stack Overflow users who helped me figure out how to properly display the duration of a YouTube video. [Here are their answers to my question](https://stackoverflow.com/questions/79856475/youtube-apis-getduration-function-keeps-returning-0-or-undefined)
- Huge thanks to cristiancfm for his [Webdeck Player code](https://github.com/cristiancfm/webdeck-player.git). I learned so much about the YouTube API by studying their code
- Icons made by me. Feel free to use them and modify them however
  
---

I would love to see if you use my player 💜 Send me an email at dorianbay@proton.me or leave a message on my guestbook on my [Neocities website](https://dorianbay.neocities.org/)

If you would like to credit me, please link to my [Neocities website](https://dorianbay.neocities.org/)
