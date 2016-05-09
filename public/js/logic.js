(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;
    var $base = $('.base');
    var $lol = $('.lol');
    var $hacked = $('.hacked');
    var $23sec = $('.23sec');
    var $selfie = $('.selfie');
    var $conor = $('.conor');
    var $dead = $('.dead');
    window.videos = {

            "lol" : {
                "text": "we're going to be together forever",
                "path": "80213525"},

            "23sec": {
                "text": "i don't want to upset him",
                "path": "81457879"
            },
            "hacked" : {
                "text": "lol i don't remember a thing",
                "path": "81520380"
            },
            "selfie" : {
                    "text": "we just need to be good to each other",
                    "path": "82058356"
                },
            "conor" : {
                    "text": "i can't believe this shit",
                    "path": "81400274"
                },
            "dead" : {
                    "text": "they won't let me in : (",
                    "path": "80194872"}
        };

    window.texts = {
        'one' : ["Revolving around the anxiety of creating a new identity, why7not is a personal introspection into the fabrication of our personal biographies. Starting at a granular level of online profile creation, and eventually scoping to macro details about the framing of our self-image and the way the public views am individual.The pieces aim to blur the lines between a fixed personality and a fluid and editable mode of expressing oneself, while at the same time capturing the anxiety of the vast freedom in being the author of your social presence."],
        'two' : [],
        'three' : [],
     }

    $document.ready(function() {
        
        //PROJECT RENDERER, DO NOT ALTER
        window.render = function(video) { // a key
            $('.text-frame').html(video.text); //put the response on the dom
            var iframePrefix = '<iframe class="vimeo" src="https://player.vimeo.com/video/';
            var iframeSuffix = '?autoplay=1" frameborder="0"></iframe>';
            var iframeHtml = iframePrefix + video.path + iframeSuffix;
            console.log(iframeHtml);
            $('#content-zone .video-frame').html(iframeHtml); //put the response on the dom
        }

        window.displayText = function() {
            $('#content-zone .video-frame').html('<img src="public/imgs/thumb.png"/>'); //empty footer area
            $('.text-frame').html('<br><h1 class="base-text">'+texts['one']+'</h1>'); //put the response on the dom
        }
        
        displayText();


     });
})();