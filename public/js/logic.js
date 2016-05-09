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

    $document.ready(function() {
        
        var videos = {

            "base" : {
                "text": "this is the base text",
                "path": ""},

            "lol" : {
                "text": "this is the lol text",
                "path": "80213525"},

            "23sec": {
                "text": "23 sec text",
                "path": "81457879"
            },
            "hacked" : {
                "text": "hacked text",
                "path": "81520380"
            },
            "selfie" : {
                    "text": "selfie text",
                    "path": "82058356"
                },
            "conor" : {
                    "text": "did conor cheat on u",
                    "path": "81400274"
                },
            "dead" : {
                    "text": "your dead",
                    "path": "80194872"}
        };


        //PROJECT RENDERER, DO NOT ALTER
        function render(video) { // a key
            $('.text-frame').html(video.text); //put the response on the dom
            var iframePrefix = '<iframe class="vimeo" src="https://player.vimeo.com/video/';
            var iframeSuffix = '?autoplay=0" frameborder="0"></iframe>';
            var iframeHtml = iframePrefix + video.path + iframeSuffix;
            console.log(iframeHtml);
            $('#content-zone .video-frame').html(iframeHtml); //put the response on the dom
        }

        //to swap out an image source, use
        function swapSrc(img, src) {
            $(iframe).attr('src', src);
        }

        $base.click(function(e) {
            console.log('render queued');
            render(videos['base']);         
         });

        $lol.click(function(e) {
            console.log('render queued');
            render(videos['lol']);         
         });

        $hacked.click(function(e) {
            console.log('render queued');
            render(videos['hacked']);         
         });

        $23sec.click(function(e) {
            console.log('render queued');
            render(videos['23sec']);         
         });

        $selfie.click(function(e) {
            console.log('render queued');
            render(videos['selfie']);         
         });

        $conor.click(function(e) {
            console.log('render queued');
            render(videos['conor']);         
         });

        $dead.click(function(e) {
            console.log('render queued');
            render(videos['dead']);         
         });
    

     });
})();