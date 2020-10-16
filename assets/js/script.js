function displayMajorProjects() {
    var majorProjectsDiv = document.getElementById("major-projects");
    majorProjectsDiv.style.height = "96px";
    $('#major-projects').children('a').each(function () {
        $(this).css('height', '32px');
        $(this).css('visibility', 'visible');
        $(this).css('font-size', '16px');
    });

}

function hideMajorProjects() {
    var majorProjectsDiv = document.getElementById("major-projects");
    majorProjectsDiv.style.height = "0px";

    $('#major-projects').children('a').each(function () {
        $(this).css('height', '0px');
        $(this).css('visibility', 'hidden');
        $(this).css('font-size', '0px');
    });
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.height = "50px";
        document.getElementById("navbar").style.backgroundColor = "#636175";
        document.getElementById("dropdown-menu").style.backgroundColor = "#636175";
        document.getElementById("navbar-ul").style.backgroundColor = "#636175";
    } else {
        document.getElementById("navbar").style.height = "100px";
        document.getElementById("navbar").style.backgroundColor = "#7F879B";
        document.getElementById("dropdown-menu").style.backgroundColor = "#7F879B";
        document.getElementById("navbar-ul").style.backgroundColor = "#7F879B";
    }
}

function displayMainDropDown() {
    $('#dropdown-menu').css('height', 'auto');
    $('#dropdown-menu').css('visibility', 'visible');
    $('#dropdown-menu').css('max-height', '210px');
    $('#dropdown-menu').children('a').each(function () {
        $(this).css('height', '32px');
        $(this).css('visibility', 'visible');
        $(this).css('font-size', '16px');
    });
}

function hideMainDropDown() {
    $('#dropdown-menu').css('max-height', '0px');
    $('#dropdown-menu').css('height', '96px');
    $('#dropdown-menu').children('a').each(function () {
        $(this).css('height', '0px');
        $(this).css('visibility', 'hidden');
        $(this).css('font-size', '0px');
    }); 
    document.getElementById("dropdown-menu").addEventListener("transitionend", () => {
        if($('#dropdown-menu').css('max-height') == '0px') {
            $('#dropdown-menu').css('visibility', 'hidden');
            $('#dropdown-menu').css('height', 'auto');
        }
    });
}


