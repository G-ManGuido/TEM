
$(document).ready(function () {

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [

        {
            title: "<b>Tim</b>                  02:40",
            mp3: "mp3/Tim.mp3"
        },
        {
            title: "<b>Scheduled</b>            01:57",
            mp3: "mp3/Scheduled.mp3"
        },
        {
            title: "<b>Fools' Empires</b>      01:57",
            mp3: "mp3/Fools.mp3"
        },
        {
            title: "<b>Remains Of The Day</b>  02:39",
            mp3: "mp3/Remains.mp3"
        },
        {
            title: "<b>Sustaining Days</b>     01:38",
            mp3: "mp3/Sustainingdays.mp3"
        },
        {
            title: "<b>Punkrockers Lullaby</b>  01:38",
            mp3: "mp3/Punkrockers.mp3"
        },
        {
            title: "<b>Sad about Amanda</b>     02:01",
            mp3: "mp3/Sadaboutamanda.mp3"
        }

    ], {
        swfPath: "assets/jPlayer/dist/jplayer",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });
});

