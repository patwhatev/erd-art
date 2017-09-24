(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;

    // image path arrays, name of dir is first index 
    window.paths = {
        "paint" : {
            "arr" : [
                "paint",
                ["59c7ed2103596e9882d487a6/59c7eebc59cc68469d08cb11/1506275027311/_CV_0014.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7eea5268b96c839ea94ab/1506275007707/_CV_0017.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7eea4a803bbff9d2a7dbe/1506275010327/_CV_0019.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee8ba9db099270729e28/1506274983172/_CV_0021.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee7fc027d8d270c8b222/1506274962884/_CV_0022.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee79a803bbff9d2a7c74/1506274958062/_CV_0023.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee6af43b55ff86c1e5a1/1506274946439/_CV_0024.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee66d55b414bfd56fa10/1506274940249/_CV_0025.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee548419c269b825da1c/1506274920904/_CV_0026.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee540abd04d34ca8d860/1506274925283/_CV_0029.jpg",['example title' , '2017']]
            ]
        },
        "paper" : {
            "arr" : [
                "paper",
                ["59c7ed2103596e9882d487a6/59c7eec5cd39c354a17fb2a5/1506275045935/_CV_0011.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7eed0edaed88dfdfc9e41/1506275052015/_CV_0010.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee3fcd0f687a8b26fdf5/1506274903257/_CV_0030.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee419f8dcec995898173/1506274903195/_CV_0032.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee2d64b05f184cbe6ac3/1506274883916/_CV_0033.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee2cedaed88dfdfc983f/1506274882028/_CV_0034.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee1659cc68469d08c597/1506274863393/_CV_0035.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee1618b27d6b849b8d07/1506274865414/_CV_0037.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ed22e5dd5b140a5beaf5/1506274611972/_CV_0040.jpg",['example title' , '2017']],
            ]
        },
        "cloth" : {
            "arr" : [
                "cloth",
                ["59c7ed2103596e9882d487a6/59c7ed22d7bdce9aca01c317/1506274627830/_CV_0047.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee8f4c326d162b6c11f9/1506274985711/_CV_0020.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7eebc03596e9882d4972e/1506275017631/_CV_0013.jpg",['example title' , '2017']]
            ]
        },
        "contact" : {
            "text" : "henry@example.com"
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

            var text = window.paths[folderPath].text;
            let markup = ` <div class="renderedText"><h5>${text}</h5></div>`;
            $('#content-zone').html(markup); //put the response on the dom
            $('.text-frame').html(img.toString().split('.')[0]); //put the response on the dom
        }

        // take each image, concat path
        window.pushPaths = function(img) {
                var imagePrefix = '<img class="image" src="https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/';
                var imageSuffix = '"></br>';
                var imageHtml = imagePrefix + img + imageSuffix;
                console.log(imageHtml);
                return imageHtml;
        }

        window.displayText = function() {
            $('#content-zone').html('<img class="image top" src="assets/Images/paint/_CV_0019.jpg"/>'); //empty footer area
        }
        
        displayText();


     });
})();