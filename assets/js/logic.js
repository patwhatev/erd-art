(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;

    // image path arrays, name of dir is first index 
    window.paths = {
        "knees" : {
            "arr" : [
            "knees",
            ["1.JPG","dat knee, disney"],
            ["2.JPG","snap chat"]
            ]
        },
        "leftArm" : {
            "arr" : [
                "leftArm",
                ["1.JPG","anime girl, shy guy on telephone"],
                ["2.JPG","big man, caroline david drawing, dice of life"],
                ["3.JPG","boy with exposed belly, ysl, alien workshop logo"],
                ["4.JPG","chino, crying mickey, angelina jolie's dragon tattoo, richie rich, text bubbles, alien workshop logo, smile now cry later"],
                ["5.JPG","chino, crying mickey, angelina jolie's dragon tattoo, richie rich, text bubbles, alien workshop tattoo 2"],
                ["6.JPG","chino, crying mickey, angelina jolie's dragon tattoo, richie rich, text bubbles, alien workshop tattoo"],
                ["7.JPG","douzo yoroshiku with handshake, nothing"],
                ["8.JPG","linus, nothing"],
                ["9.JPG","mac finder logo, spongebob succ meme"],
                ["10.JPG","rolls royce logo, angry tweety, womb to the tomb, rip shane"],
                ["11.JPG","sensitive thug, no fear eyes, suicidal fish, 'more problems, more money' in russian"],
                ["12.JPG","womb to the tomb, rip shane with teardrop, aesthetics logo, big man, trust, dice of life"]
            ]
        },
        "leftLeg" : {
            "arr" : [
                "leftLeg",
                ["1.JPG","akachan, anime girl"],
                ["2.JPG","puppet, praying calvin"],
            ]
        },
        "leftThigh" : {
            "arr" : [
                "leftThigh",
                ["1.JPG","'baby' in rose, johnsons logo, 'doggy' in hebrew"],
                ["2.JPG","'im gonna kill you ray romano, anime girl 3, 'baby' in rose, johnson's baby, 'doggy' in hebrew, arnold, greek heads"],
                ["3.JPG","'im gonna kill you ray romano, anime girl 3'"],
                ["4.JPG","'im gonna kill you ray romano', anime girl 3, 'doggy' in hebrew, arnold, johnsons logo, anime girl 2"],
                ["5.JPG","crying daisy duck"],
                ["6.JPG","crying daisy, arnold, anime girl 2"]
            ]
        },
        "rightArm" : {
            "arr" : [
                "rightArm",
                ["1.JPG","be true, sad clown, girl with armleg, toy machine mascot, 'promise' in russian, empty favicon, godfather logo, face, guardian angel, 456 dice, plug"],
                ["2.JPG","crying minnie, guardian angel, godfather logo"],
                ["3.JPG","godfather logo, 'forever mañana, girl escaping window, wizard staffs"],
                ["4.JPG","jerry, mickey gloves, will dayer drawing, girl in shorts climbing through window, sad devil"],
                ["5.JPG","jerry, mickey gloves, will dyer drawing, girl escaping window, godfather logo, forever mañana"],
                ["6.JPG","jerry, mickey gloves, will dyer drawing, girl with armleg, 'promise' in russian, godfather logo, empty favicon, guardian angel, forever mañana, girl escaping window"],
                ["7.JPG","sad clown, girl with armleg, toy machine logo, empty favicon, 'promise' in russian, face"],
                ["8.JPG","sad clown, hello kitty, plug, ralph lauren logo, foundation moon, 456 dice, guardian angel, face"],
                ["9.JPG","sad devil, 'appropriation' in russian, hotel browanda"],
                ["10.JPG","suicidal daisy duck, 'god' in sign language 2"],
                ["11.JPG","suicidal daisy duck, 'god' in sign language, king lion"],
                ["12.JPG","suicidal daisy duck, 'god' in sign language"]
            ]
        },
        "rightLeg" : {
            "arr" : [
                "rightLeg",
                ["1.JPG","509, scream mask, homer with gun, anime girl 6"],
                ["2.JPG","smile now cry later 2, matisse's dance with 'never fake it' caption"],
                ["3.JPG","smile now cry later 2, matisse's dance with 'never fake it' in cursive"]
            ]
        },
        "rightThigh" : {
            "arr" : [
                "rightThigh",
                ["1.JPG","deteriorating bugs bunny, 'regret' in japanse, angela doll, symmetrical faces, anime girl 8, 'twitter' in arabic, 'jumpman', keith haring rendition of icp logo"],
                ["2.JPG","deteriorating bugs bunny, 'regret' in kanji, angela doll, symmetrical faces, anime girl 7, 'twitter' in arabic"],
                ["3.JPG","deteriorating bugs, regret in japanese"]
            ]
        }
    }

    // default text
    window.texts = {
        'one' : "a catalog of most of the tattoos on my body",
        'two' : [],
        'three' : [],
     }

    // create string for image paths
    window.stringPath = '';

    $document.ready(function() {
        //PROJECT RENDERER, DO NOT ALTER

        // called when link is clicked 
        window.render = function(folderPath) { // a key

            //get general arr of clicked category
            var selectedFolder = window.paths[folderPath].arr;

            // get name
            window.stringPath = selectedFolder[0];

            let markup = ''

            // iterate through arrays after title, index 0 = filename, 1 = caption string
            for (i = 1; i < selectedFolder.length; i++) {
                //add filename
                var imageHtml = pushPaths(selectedFolder[i][0]);
                
                let textString = selectedFolder[i][1];
                let brokenText = textString.split(',');
                let textHtml = ''
                for(x=0; x < brokenText.length; x++) {
                    textHtml += `<p class="text">${brokenText[x]} </p></br>`;
                }
                markup += (`<div class="pair">${imageHtml} <div class="textbox">${textHtml} </div> </div>`);
                console.log(markup);
            }
            $('#content-zone').html(markup); //put the response on the dom
            // $('.text-frame').html(img.toString().split('.')[0]); //put the response on the dom
        }

        // take each image, concat path
        window.pushPaths = function(img) {
                var imagePrefix = '<img class="image" src="./public/Images/' + window.stringPath + '/';
                var imageSuffix = '"></br>';
                var imageHtml = imagePrefix + img + imageSuffix;

                return imageHtml;
        }

        window.displayText = function() {
            $('#content-zone').html('<img class="image top" src="public/Images/rightThigh/1.JPG"/>'); //empty footer area
        }
        
        displayText();


     });
})();