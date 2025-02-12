// YouTube Player Script
// Load YouTube API asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// Initialize YouTube Player
function onYouTubeIframeAPIReady(){
    player = new YT.Player('player',{
        videoId: 'TbiPcMCz0Ek',
        playerVars:{
            autoplay: 1,
            mute: 1,
            controls: 0,
            loop: 1,
            playlist: 'TbiPcMCz0Ek',
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            cc_load_policy: 0,
            hl: 'en',
        },
        events:{
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

// Play video when ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Monitor video state and loop if near the end
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        const videoDuration = player.getDuration();

        setInterval(() => {
            const currentTime = player.getCurrentTime();
            if (videoDuration - currentTime <= 28) {
                player.seekTo(0);
            }
        }, 1000);
    }
}