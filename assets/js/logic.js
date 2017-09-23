(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;

    // image path arrays, name of dir is first index 
    window.paths = {
        "paint" : {
            "arr" : [
                "paint",
                ["14.JPG",['example title' , '2017']],
                ["17.JPG",['example title' , '2017']],
                ["19.JPG",['example title' , '2017']],
                ["21.JPG",['example title' , '2017']],
                ["22.JPG",['example title' , '2017']],
                ["23.JPG",['example title' , '2017']],
                ["24.JPG",['example title' , '2017']],
                ["25.JPG",['example title' , '2017']],
                ["26.JPG",['example title' , '2017']],
                ["29.JPG",['example title' , '2017']]
            ]
        },
        "paper" : {
            "arr" : [
                "paper",
                ["11.JPG",['example title' , '2017']],
                ["13.JPG",['example title' , '2017']],
                ["29.JPG",['example title' , '2017']],
                ["30.JPG",['example title' , '2017']],
                ["32.JPG",['example title' , '2017']],
                ["33.JPG",['example title' , '2017']],
                ["34.JPG",['example title' , '2017']],
                ["35.JPG",['example title' , '2017']],
                ["37.JPG",['example title' , '2017']],
                ["40.JPG",['example title' , '2017']],
                ["47.JPG",['example title' , '2017']]
            ]
        },
        "cloth" : {
            "arr" : [
                "cloth",
                ["47.JPG",['example title' , '2017']]
            ]
        },
        "contact" : {
            "text" : ""
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

        // called when art links clicked
        window.renderArt = function(folderPath) { // a key

            //get general arr of clicked category
            var selectedFolder = window.paths[folderPath].arr;

            // get name
            window.stringPath = selectedFolder[0];

            let markup = ''

            // iterate through arrays after title, index 0 = filename, 1 = caption string
            for (i = 1; i < selectedFolder.length; i++) {
                //add filename
                var imageHtml = pushPaths(selectedFolder[i][0]);
                
                let textArr = selectedFolder[i][1];
                let title = textArr[0];
                let year = textArr[1];

                let textHtml = `<h4 class="title">${title} </h4><br><h5 class="year">${year} </h5>`;
                if(i == 1) {
                    var markupString = `<div class="pair top">${imageHtml} <div class="textbox">${textHtml} </div> </div>`;
                } else {
                    var markupString = `<div class="pair">${imageHtml} <div class="textbox">${textHtml} </div> </div>`;
                }
                markup += (markupString);
            }
            $('#content-zone').html(markup); //put the response on the dom
            // $('.text-frame').html(img.toString().split('.')[0]); //put the response on the dom
        }

        // called when text links clicked
        window.renderText = function(folderPath) { // a key

            // //get general arr of clicked category
            // var selectedFolder = window.paths[folderPath].arr;

            // // get name
            // window.stringPath = selectedFolder[0];

            // let markup = ''

            // // iterate through arrays after title, index 0 = filename, 1 = caption string
            // for (i = 1; i < selectedFolder.length; i++) {
            //     //add filename
            //     var imageHtml = pushPaths(selectedFolder[i][0]);
            //     let textString = selectedFolder[i][1];
            //     let brokenText = textString.split(',');
            //     let title = brokenText[0];
            //     let year = brokenText[1];
            //     let textHtml = `<p class="textContent"><strong>${title}</strong><br> <i><${year}/i> </p></br>`;

            //     markup += (`<div class="pair">${imageHtml} <div class="textbox">${textHtml} </div> </div>`);
            // }
            // $('#content-zone').html(markup); //put the response on the dom
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