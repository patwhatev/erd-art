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

     });
})();