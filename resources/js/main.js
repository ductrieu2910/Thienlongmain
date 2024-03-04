function openside() {
    const sideBarWidth = document.getElementById("mySidenav").style.transform;
    
    if (sideBarWidth == "translateX(120px)") {
        document.getElementById("mySidenav").style.transform = "translateX(0)";
        document.getElementById("close-open").style.transform = "rotate(0deg)";
    } else {
        document.getElementById("mySidenav").style.transform = "translateX(120px)";
        document.getElementById("close-open").style.transform = "rotate(180deg)";
    }
}

function hamburgerBtn() {
    const menuWidth = document.getElementById("hamburger").style.display;

    if (menuWidth == "block") {
        document.getElementById("hamburger").style.display = "none";
        document.getElementById("hamburger").style.transform = "translateX(100%)";
    } else {
        document.getElementById("hamburger").style.display = "block";
        document.getElementById("hamburger").style.transform = "translateX(0%)";   
    }
}
$(document).ready(function(){
    $('#btn-1 h6').hover(function(){
        $('#btn-img-1').css('visibility', 'visible');
    })
    $('#btn-1').mouseout(function(){
        $("#btn-img-1").css('visibility', 'hidden');
    })

    $('#btn-2 h6').hover(function(){
        $('#btn-img-2').css('visibility', 'visible');
    })
    $('#btn-2').mouseout(function(){
        $("#btn-img-2").css('visibility', 'hidden');
    })

    $('#btn-3 h6').hover(function(){
        $('#btn-img-3').css('visibility', 'visible');
    })
    $('#btn-3').mouseout(function(){
        $("#btn-img-3").css('visibility', 'hidden');
    })

    $('#btn-4 h6').hover(function(){
        $('#btn-img-4').css('visibility', 'visible');
    })
    $('#btn-4').mouseout(function(){
        $("#btn-img-4").css('visibility', 'hidden');
    })
});

$(document).ready(function(){
    $('#news-btn-1 h6').hover(function(){
        $('#news-btn-img-1').css('visibility', 'visible');
    })
    $('#news-btn-1').mouseout(function(){
        $("#news-btn-img-1").css('visibility', 'hidden');
    })

    $('#news-btn-2 h6').hover(function(){
        $('#news-btn-img-2').css('visibility', 'visible');
    })
    $('#news-btn-2').mouseout(function(){
        $("#news-btn-img-2").css('visibility', 'hidden');
    })

    $('#news-btn-3 h6').hover(function(){
        $('#news-btn-img-3').css('visibility', 'visible');
    })
    $('#news-btn-3').mouseout(function(){
        $("#news-btn-img-3").css('visibility', 'hidden');
    })

    $('#news-btn-4 h6').hover(function(){
        $('#news-btn-img-4').css('visibility', 'visible');
    })
    $('#news-btn-4').mouseout(function(){
        $("#news-btn-img-4").css('visibility', 'hidden');
    })
});

