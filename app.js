window.onload = function () {

    var openMe = Array.prototype.slice.call(document.getElementsByClassName("open"));
    var count = 0;
    openMe.forEach(function (item) {
        item.addEventListener('click', function () {
            if (count === 0) {
                item.lastElementChild.style.display = "block";
                count = 1;
            }
            else {
                item.lastElementChild.style.display = "none";
                count = 0;
            }
        });
    });

    var link = document.createElement("link");
    link.href = "otherStyle.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
};


//$('.parentList').each(function (id, element) {
//    $(element).click(function () {
//        this.children('ul').show('slow');


//    })
//})



//});
