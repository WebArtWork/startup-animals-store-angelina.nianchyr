// tabcontent in index page
function openClothes(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("collection__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("collection__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

 

// slider for tabs
console.log("H");
$(document).ready(function () {
    $('.collection__tabcontent').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
    });

    $(window).on('resize', function () {
        if ($(window).width() < 1100) {
            $('.collection__tabcontent').slick('slickSetOption', 'slidesToShow', 1, true);
        } else if ($(window).width() < 1400) {
            $('.collection__tabcontent').slick('slickSetOption', 'slidesToShow', 2, true);
        } else if ($(window).width() < 1740) {
            $('.collection__tabcontent').slick('slickSetOption', 'slidesToShow', 3, true);
        } else {
            $('.collection__tabcontent').slick('slickSetOption', 'slidesToShow', 4, true);
        }
    });

});


// photo slider
console.log("H");
$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(window).on('resize', function () {
        if ($(window).width() < 1100) {
            $('.slider').slick('slickSetOption', 'slidesToShow', 1, true);
        } else if ($(window).width() < 1400) {
            $('.slider').slick('slickSetOption', 'slidesToShow', 2, true);
        } else {
            $('.slider').slick('slickSetOption', 'slidesToShow', 3, true);
        }
    });
});


// tabcontent in product page
function openInfo(evt, infoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("product__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("product__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoName).style.display = "block";
    evt.currentTarget.className += " active";
}


// tabcontent in products page
function openCollection(evt, clothesName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("products__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("products__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(clothesName).style.display = "grid";//read about this
    evt.currentTarget.className += " active";
}


// slider for article in article page
console.log("H");
$(document).ready(function () {
    $('.article').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});


// slider for contents in content page
console.log("H");
$(document).ready(function () {
    $('.contents').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();