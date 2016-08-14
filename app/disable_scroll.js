'use strict';

/*
Found script: https://gist.github.com/oxguy3/ebd9fe692518c7f7a1e9#file-roughscroll-js
*/

document.getElementsByTagName("body")[0].addEventListener("wheel",function (event) {
    // exception for ACE Editor, JS text editor used by sites like GitHub
    if (event.target.classList.contains('ace_content')) {
        return;
    }

    event.stopPropagation();
}, true);
