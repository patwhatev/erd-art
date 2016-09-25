(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;

    window.paths = {
        "knees" : {
            "arr" : [
            "knees",
            "dat knee, disney.JPG",
            "snap chat.JPG"
            ]
        },
        "leftArm" : {
            "arr" : [
                "leftArm",
                "anime girl, shy guy on telephone.JPG",
                "big man, caroline david drawing, dice of life.JPG",
                "boy with exposed belly, ysl, alien workshop logo.JPG",
                "chino, crying mickey, angelina jolie's dragon tattoo, richie rich, text bubbles, alien workshop logo, smile now cry later.JPG",
                "chino, crying mickey, angelina jolie's dragon tattoo, richie rich, text bubbles, alien workshop tattoo 2.JPG",
                "chino, crying mickey, angelina jolie's dragon tattoo, richie rich, text bubbles, alien workshop tattoo.JPG",
                "douzo yoroshiku with handshake, nothing, .JPG",
                "linus, nothing.JPG",
                "mac finder logo, spongebob succ meme.JPG",
                "rolls royce logo, angry tweety, womb to the tomb, rip shane.JPG",
                "sensitive thug, no fear eyes, suicidal fish, 'more problems, more money' in russian.JPG",
                "womb to the tomb, rip shane with teardrop, aesthetics logo, big man, trust, dice of life.JPG"
            ]
        },
        "leftLeg" : {
            "arr" : [
                "leftLeg",
                "akachan, anime girl 1.JPG",
                "puppet, praying calvin.JPG"
            ]
        },
        "leftThigh" : {
            "arr" : [
                "leftThigh",
                "'baby' in rose, johnsons logo, 'doggy' in hebrew.JPG",
                "'im gonna kill you ray romano, anime girl 3, 'baby' in rose, johnson's baby, 'doggy' in hebrew, arnold, greek heads.JPG",
                "'im gonna kill you ray romano, anime girl 3'.JPG",
                "'im gonna kill you ray romano', anime girl 3, 'doggy' in hebrew, arnold, johnsons logo, anime girl 2.JPG",
                "crying daisy duck.JPG",
                "crying daisy, arnold, anime girl 2.JPG"
            ]
        },
        "rightArm" : {
            "arr" : [
                "rightArm",
                "be true, sad clown, girl with armleg, toy machine mascot, 'promise' in russian, empty favicon, godfather logo, face, guardian angel, 456 dice, plug.JPG",
                "crying minnie, guardian angel, godfather logo.JPG",
                "godfather logo, 'forever mañana, girl escaping window, wizard staffs.JPG",
                "jerry, mickey gloves, will dayer drawing, girl in shorts climbing through window, sad devil.JPG",
                "jerry, mickey gloves, will dyer drawing, girl escaping window, godfather logo, forever mañana.JPG",
                "jerry, mickey gloves, will dyer drawing, girl with armleg, 'promise' in russian, godfather logo, empty favicon, guardian angel, forever mañana, girl escaping window.JPG",
                "sad clown, girl with armleg, toy machine logo, empty favicon, 'promise' in russian, face.JPG",
                "sad clown, hello kitty, plug, ralph lauren logo, foundation moon, 456 dice, guardian angel, face.JPG",
                "sad devil, 'appropriation' in russian, hotel browanda.JPG",
                "suicidal daisy duck, 'god' in sign language 2.JPG",
                "suicidal daisy duck, 'god' in sign language, king lion.JPG",
                "suicidal daisy duck, 'god' in sign language.JPG"
            ]
        },
        "rightLeg" : {
            "arr" : [
                "rightLeg",
                "509, scream mask, homer with gun, anime girl 6.JPG",
                "smile now cry later 2, matisse's dance with 'never fake it' caption.JPG",
                "smile now cry later 2, matisse's dance with 'never fake it' in cursive.JPG"
            ]
        },
        "rightThigh" : {
            "arr" : [
                "rightThigh",
                "deteriorating bugs bunny, 'regret' in japanse, angela doll, symmetrical faces, anime girl 8, 'twitter' in arabic, 'jumpman', keith haring rendition of icp logo.JPG",
                "deteriorating bugs bunny, 'regret' in kanji, angela doll, symmetrical faces, anime girl 7, 'twitter' in arabic.JPG",
                "deteriorating bugs, regret in japanese.JPG"
            ]
        }
    }

    window.texts = {
        'one' : "a catalog of most of the tattoos on my body",
        'two' : [],
        'three' : [],
     }

    window.stringPath = '';

    $document.ready(function() {
        //PROJECT RENDERER, DO NOT ALTER
        window.render = function(folderPath) { // a key
            window.stringPath = window.paths[folderPath].arr[0];
            for (i = 1; i < window.paths[folderPath].arr.length; i++) {
                pushPaths(window.paths[folderPath].arr[i]);
            }
        }

        window.pushPaths = function(img) {
                var imagePrefix = '<img class="image" src="./public/Images/' + window.stringPath + '/';
                var imageSuffix = '"></br>';
                var imageHtml = imagePrefix + img + imageSuffix;
                console.log(imageHtml);
                $('#content-zone .image-frame').html(imageHtml); //put the response on the dom
                $('.text-frame').html(img.toString().split('.')[0]); //put the response on the dom
        }

        window.displayText = function() {
            $('#content-zone .image-frame').html('<img src="public/Images/rightThigh/deteriorating bugs, regret in japanese.JPG"/>'); //empty footer area
            $('.text-frame').html('<br><h1 class="base-text">'+texts['one']+'</h1>'); //put the response on the dom
        }
        
        displayText();


     });
})();