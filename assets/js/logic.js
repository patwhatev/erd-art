(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;

    // image path arrays, name of dir is first index 
    window.paths = {
        "paint" : {
            "arr" : [
                "paint",
                ["14.JPG",""],
                ["17.JPG",""],
                ["19.JPG",""],
                ["21.JPG",""],
                ["22.JPG",""],
                ["23.JPG",""],
                ["24.JPG",""],
                ["25.JPG",""],
                ["26.JPG",""],
                ["29.JPG",""]
            ]
        },
        "paper" : {
            "arr" : [
                "paper",
                ["11.JPG",""],
                ["13.JPG",""],
                ["29.JPG",""],
                ["30.JPG",""],
                ["32.JPG",""],
                ["33.JPG",""],
                ["34.JPG",""],
                ["35.JPG",""],
                ["37.JPG",""],
                ["40.JPG",""],
                ["47.JPG",""]
            ]
        },
        "cloth" : {
            "arr" : [
                "cloth",
                ["1.JPG","'baby' in rose, johnsons logo, 'doggy' in hebrew"],
                ["2.JPG","'im gonna kill you ray romano, anime girl 3, 'baby' in rose, johnson's baby, 'doggy' in hebrew, arnold, greek heads"],
                ["3.JPG","'im gonna kill you ray romano, anime girl 3'"],
                ["4.JPG","'im gonna kill you ray romano', anime girl 3, 'doggy' in hebrew, arnold, johnsons logo, anime girl 2"],
                ["5.JPG","crying daisy duck"],
                ["6.JPG","crying daisy, arnold, anime girl 2"]
            ]
        }
    }

    // default text
    window.texts = {
        'one' : "a catalog of most of the tattoos on my body",
        'two' : [],
        'three' : []
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
                var imagePrefix = '<img class="image" src="./assets/Images/' + window.stringPath + '/_CV_00';
                var imageSuffix = '"></br>';
                var imageHtml = imagePrefix + img + imageSuffix;

                return imageHtml;
        }

        window.displayText = function() {
            $('#content-zone').html('<img class="image top" src="assets/Images/paint/_CV_0019.jpg"/>'); //empty footer area
        }
        
        displayText();


     });
})();