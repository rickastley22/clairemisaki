//Playlist defined as an array of objects
let playlists = [
    {
        "Id": "dollzHits",
        "name": "Dollz hits",
        "songs": [
            {
                "title": "Dollz Doll - Sasha Solo",
                "artist": "Bratz",
                "album": "Bratz Angelz",
                "year": 2026,
                "videoId": "5mmSXIg6Ig4"
            },

            {
                "title": "Think About It",
                "artist": "Bratz",
                "album": "Bratz Angelz",
                "year": 2026,
                "videoId": "lfYl_f8zo9Y"
            },

            {
                "title": "We're The Bratz",
                "artist": "Bratz",
                "album": "We're The Bratz",
                "year": 2023,
                "videoId": "dPAaKXnmIQw"
            },

            {
                "title": "My Attitude",
                "artist": "Bratz",
                "album": "Forever Diamondz",
                "year": 2006,
                "videoId": "8av6HM1ttmI"
            },

            {
                "title": "You've Got It",
                "artist": "Bratz",
                "album": "Forever Diamondz",
                "year": 2006,
                "videoId": "z4tMfUVZA-4"
            }
        ]
    },
    
    {
        "Id": "hannahFaves",
        "name": "Hannah faves",
        "songs": [
            {
                "title": "Barefoot Cinderella",
                "artist": "Hannah Montana",
                "album": "Hannah Montana Forever",
                "year": 2010,
                "videoId": "fCAE3nJzGp4"
            },

            {
                "title": "Kiss It Goodbye",
                "artist": "Hannah Montana",
                "album": "Hannah Montana Forever",
                "year": 2010,
                "videoId": "veyJF9qfI-Y"
            },

            {
                "title": "I'm Still Good",
                "artist": "Hannah Montana",
                "album": "Hannah Montana Forever",
                "year": 2010,
                "videoId": "JLKPUfWUjj4"
            },

            {
                "title": "Don't Wanna Be Torn",
                "artist": "Hannah Montana",
                "album": "Hannah Montana 3",
                "year": 2009,
                "videoId": "DRdG1p9lPRc"
            },

            {
                "title": "Let's Do This",
                "artist": "Hannah Montana",
                "album": "Hannah Montana 3",
                "year": 2009,
                "videoId": "WITFQsMEnuo"
            }
        ]
    },

    {
        "Id": "myPlaylist",
        "name": "My playlist",
        "songs": [
            {
                "title": "Abracadabra",
                "artist": "Lady Gaga",
                "album": "Mayhem",
                "year": 2025,
                "videoId": "vBynw9Isr28"
            },

            {
                "title": "Kiss It Goodbye",
                "artist": "Hannah Montana",
                "album": "Hannah Montana Forever",
                "year": 2010,
                "videoId": "veyJF9qfI-Y"
            },

            {
                "title": "I'm Still Good",
                "artist": "Hannah Montana",
                "album": "Hannah Montana Forever",
                "year": 2010,
                "videoId": "JLKPUfWUjj4"
            },

            {
                "title": "Don't Wanna Be Torn",
                "artist": "Hannah Montana",
                "album": "Hannah Montana 3",
                "year": 2009,
                "videoId": "DRdG1p9lPRc"
            },

            {
                "title": "Let's Do This",
                "artist": "Hannah Montana",
                "album": "Hannah Montana 3",
                "year": 2009,
                "videoId": "WITFQsMEnuo"
            }
        ]
    }
]

//Themes defined as an array of objects
let themes = [
    {
        "Id": "default",
        "name": "Default",
        "colourMain" : "#fffdfd",
        "colourSecond" : "#5f1da2",
        "colourThird" : "#da67e3"
    },
    {
        "Id": "popDemonz",
        "name": "Pop Demonz",
        "colourMain" : "#cd2429",
        "colourSecond" : "#fffdfd",
        "colourThird" : "#0f0010"
    },
    {
        "Id": "pastelGoth",
        "name": "Pastel Goth",
        "colourMain" : "#f9baff",
        "colourSecond" : "#0f0010",
        "colourThird" : "#0f0010"
    },
    {
        "Id": "neonBlue",
        "name": "Neon Blue",
        "colourMain" : "#080909",
        "colourSecond" : "#fffdfd",
        "colourThird" : "#22c2ef"
    }
]

const urlStart = 'https://www.youtube-nocookie.com/embed/';
let selectedPlaylist = playlists[0].Id;
let selectedTheme = themes[0].Id;
let playlistLength = playlists[0].songs.length;
let i = 0;
let refreshInterval;
let isAdjustingTime = false;
let lastVolume = 50;
let lastState = 0;
let currentPlaylistIndex;
let currentThemeIndex;



//Selecting the elements
let varColourMain = '--colour_main';
let varColourSecond = '--colour_second';
let varColourThird = '--colour_third';
let playlistMenu = document.getElementById('playlist_select');
let themeMenu = document.getElementById('theme_select');

let songTitle = document.getElementById('song_title');
let songArtist = document.getElementById('song_artist');
let songAlbum = document.getElementById('song_album');
let songYear = document.getElementById('song_release_year');

let barSeek = document.getElementById('seek_bar');
let btnToggle = document.getElementById('toggle');
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('previous');
let btnVolume = document.getElementById('volume_button');
let barVolume = document.getElementById('volume_bar');
let btnShuffle = document.getElementById('shuffle');

//YT-api
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt_video', {
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'rel': 0,
            'fs': 0,
            'disablekb': 1,
            'origin': 'https://www.youtube-nocookie.com',
            'widget_referrer': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {

    playlistMenu.addEventListener('change', choosePlaylist);
    themeMenu.addEventListener('change', chooseTheme);
    btnToggle.addEventListener('click', playPause);
    btnPrev.addEventListener('click', previousSong);
    btnNext.addEventListener('click', nextSong);
    barSeek.addEventListener('input', timeAdjust);
    barSeek.addEventListener('mouseup', barSeekProgress);
    btnVolume.addEventListener('click', volumeMute);
    barVolume.addEventListener('input', volumeAdjust);
    btnShuffle.addEventListener('click', shufflePlaylist);

    //Key press event listeners
    window.addEventListener('keydown', e => {
        if(e.key === ' ') {playPause();}
        if(e.key === 'm') {volumeMute();}
        if(e.key === 'ArrowLeft') {player.seekTo(player.getCurrentTime() - 5);}
        if(e.key === 'ArrowRight') {player.seekTo(player.getCurrentTime() + 4);}
    });    
    
    setSongInfo(i);
}


function onPlayerStateChange() {
    
    //If the user clicks the play button on the player, the buttons on the side get synced
    if(player.getPlayerState() === YT.PlayerState.PLAYING ) {
        btnToggle.innerHTML = '<img src="player_themes/' + selectedTheme + '/pause.png" width="100%" alt="Pause song.">';
        lastState = player.getPlayerState();
    } else {
        btnToggle.innerHTML = '<img src="player_themes/' + selectedTheme + '/play.png" width="100%" alt="Play song.">';
    }

    

    //Gets and updates duration of the song
    let duration = 0;
    duration = player.getDuration();
    barSeek.max=  player.getDuration();
    updateTime(duration, 'song_finish');

    //Gets and updates current time of the song
    let currentTime = 0;
    function refreshCurrentTime() {
        currentTime = player.getCurrentTime();
        if(!isAdjustingTime) {
            barSeek.value = player.getCurrentTime();
        }
        updateTime(currentTime, 'song_start');

        
    }
    clearInterval(refreshInterval);
    refreshInterval = setInterval(refreshCurrentTime, 100);

    //Plays next song if current one has ended
    if(player.getPlayerState() === YT.PlayerState.ENDED) {
        nextSong();
    }
}

//Creating the plylist menu options based on the "playlists" array
populateMenu(playlists, playlistMenu);

populateMenu(themes, themeMenu);

function populateMenu(array, targetMenu) {
    let arraySize = array.length;
    for (let j = 0; j < arraySize; j++) {
        let menuOption = document.createElement('option');
        targetMenu.appendChild(menuOption).setAttribute('value', array[j].Id);
        menuOption.textContent = array[j].name;
    }

    targetMenu.firstElementChild.setAttribute('selected', true);
}

function updateTime(time, elementId) {
    // Convert the seconds (obtained from the getDuration() and getCurrentTime() functions):
    let date = new Date(0);
    date.setSeconds(time); // specify value for SECONDS here
    time = addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    document.getElementById(elementId).innerHTML = time;
    
    // Add zeros and colons to display the time
    function addZero(i) {
        if (i < 10) {
        i = '0' + i;
    }
    return i;
}
}

//Passes the info of the song to the player
function setSongInfo(i) {
    currentPlaylistIndex = playlists.findIndex(sameId);
    playlistLength = playlists[currentPlaylistIndex].songs.length;
    
    songTitle.textContent = playlists[currentPlaylistIndex].songs[i].title;
    songArtist.textContent = 'Artist: ' + playlists[currentPlaylistIndex].songs[i].artist;
    songAlbum.textContent = 'Album: ' + playlists[currentPlaylistIndex].songs[i].album;
    songYear.textContent = 'Year of release: ' + playlists[currentPlaylistIndex].songs[i].year;
    player.loadVideoByUrl(urlStart + playlists[currentPlaylistIndex].songs[i].videoId);
    songContinue();    
    
    
    //Checks if the previous video was paused or not and plays or pauses the next one based on that
    function songContinue() {
        if(lastState === 1) {
            player.playVideo();
        } else {
            player.pauseVideo();
        }
    }
}

//Finds the index of playlist based on its Id
function sameId(playlist) {
    if(playlist.Id === selectedPlaylist) {
        return playlist;
    }
}
function choosePlaylist() {
    selectedPlaylist = playlistMenu.value;
    currentPlaylistIndex = playlists.findIndex(sameId);
    
    i = 0;
    setSongInfo(i);
    return selectedPlaylist;
}
//Updates the play/pause button
function playPause() {
    let isPlaying = player.getPlayerState();
    if(isPlaying === YT.PlayerState.PLAYING) {
        player.pauseVideo();
        lastState = 0;
        btnToggle.innerHTML = '<img src="player_themes/' + selectedTheme + '/play.png" width="100%" alt="Play song.">';
    } else {
        player.playVideo();
        lastState = 1;
        btnToggle.innerHTML = '<img src="player_themes/' + selectedTheme + '/pause.png" width="100%" alt="Pause song.">';
    }
}

//Makes the index a random number
function shufflePlaylist() {
    let previousIndex = i;
    //Prevents repetition
    while (i === previousIndex) {
        i = Math.floor(Math.random() * playlistLength);
    }
}

//Plays the previous song in the playlist
function previousSong() {
    if(btnShuffle.checked) {
        shufflePlaylist();
    } else {
        i--;
    }
    if(i < 0) {
        i = playlistLength - 1;
    }
    setSongInfo(i);
}

//plays the next song in the playlist
function nextSong() {
    if(btnShuffle.checked) {
        shufflePlaylist();
    } else {
        i++;
    }
        if (i >= playlistLength) {
        i = 0;
    }
    setSongInfo(i);
    
}

//If the user is sliding the seek bar, it adjusts the video time
function timeAdjust() {
    isAdjustingTime = true;
    player.seekTo(barSeek.value);
}

//Says the user is not sliding the seek bar anymore
function barSeekProgress() {
    isAdjustingTime = false;
}

//Mutes the video
function volumeMute() {
    if(!player.isMuted()) {
        player.mute();
        barVolume.value = 0;
        btnVolume.innerHTML = '<img src="player_themes/' + selectedTheme + '/muted.png" width="100%" alt="Volume muted.">';
    } else {
        player.unMute();
        player.setVolume(lastVolume);
        barVolume.value = lastVolume;
        btnVolume.innerHTML = '<img src="player_themes/' + selectedTheme + '/volume.png" width="100%" alt="Volume.">';
    }
}

//Adjusts the volume based on the volume bar
function volumeAdjust() {
    lastVolume = barVolume.value;
    player.setVolume(lastVolume);
    return lastVolume;
}

//Adjusts the CSS colour variables and the icons based on the Id
function chooseTheme() {
    selectedTheme = themeMenu.value;
    currentThemeIndex = themes.findIndex(sameThemeId);
    document.documentElement.style.setProperty(varColourMain, themes[currentThemeIndex].colourMain);
    document.documentElement.style.setProperty(varColourSecond, themes[currentThemeIndex].colourSecond);
    document.documentElement.style.setProperty(varColourThird, themes[currentThemeIndex].colourThird);
    
    if(player.getPlayerState() === YT.PlayerState.PLAYING) {
        btnToggle.innerHTML = '<img src="player_themes/' + selectedTheme + '/pause.png" width="100%" alt="Pause song.">';
    } else {
        btnToggle.innerHTML = '<img src="player_themes/' + selectedTheme + '/play.png" width="100%" alt="Play song.">';
    }

    btnNext.innerHTML = '<img src="player_themes/' + selectedTheme + '/forward.png" width="100%" alt="Next song.">';
    btnPrev.innerHTML = '<img src="player_themes/' + selectedTheme + '/backward.png" width="100%" alt="Previous song.">';

    if(player.getVolume() === 0) {
        btnVolume.innerHTML = '<img src="player_themes/' + selectedTheme + '/muted.png" width="100%" alt="Volume muted.">';
    } else {
        btnVolume.innerHTML = '<img src="player_themes/' + selectedTheme + '/volume.png" width="100%" alt="Volume.">';
    }

    function sameThemeId(theme) {
        if(theme.Id === selectedTheme) {
            return theme;
        }
    }
    return selectedTheme;
}

//Initialises the first player song
songTitle.textContent = playlists[0].songs[0].title;
songArtist.textContent = 'Artist: ' + playlists[0].songs[0].artist;
songAlbum.textContent = 'Album: ' + playlists[0].songs[0].album;
songYear.textContent = 'Year of release: ' + playlists[0].songs[0].year;