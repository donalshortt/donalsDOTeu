// handles the clock on the intro page

function startTime() {
    let today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}

// makes sure the clock looks pretty

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// handles the date on the intro page

function getDate() {
    let today = new Date();
    const d = String(today.getDate()).padStart(2, '0');
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const y = today.getFullYear();
    document.getElementById('date').innerHTML =
        d + '/' + m + '/' + y;
}

// makes sure i can load multiple events

function AddOnloadEvent(f) {
    if(typeof window.onload != 'function') { window.onload = f; }
    else {
        let cache = window.onload;
        window.onload = function() {
            if(cache) { cache(); }
            f();
        };
    }
}

AddOnloadEvent(startTime);
AddOnloadEvent(getDate);

// handles the projects list fade-in animation in the project window

$(document).ready(function() {
    $("#projectsTitle").animate({
        opacity: 1
    }, {
        duration: 1400,
        queue: false
    });
    $("#proj1").animate({
        opacity: 1
    }, {
        duration: 200,
        queue: false
    });
    $("#proj1").animate({
        "margin-top": "0px"
    }, {
        duration: 200,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
    $("#proj2").animate({
        opacity: 1
    }, {
        duration: 400,
        queue: false
    });
    $("#proj2").animate({
        "margin-top": "0px"
    }, {
        duration: 400,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
    $("#proj3").animate({
        opacity: 1
    }, {
        duration: 600,
        queue: false
    });
    $("#proj3").animate({
        "margin-top": "0px"
    }, {
        duration: 600,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
    $("#proj4").animate({
        opacity: 1
    }, {
        duration: 800,
        queue: false
    });
    $("#proj4").animate({
        "margin-top": "0px"
    }, {
        duration: 800,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
    $("#proj5").animate({
        opacity: 1
    }, {
        duration: 1000,
        queue: false
    });
    $("#proj5").animate({
        "margin-top": "0px"
    }, {
        duration: 1000,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
    $("#proj6").animate({
        opacity: 1
    }, {
        duration: 1200,
        queue: false
    });
    $("#proj6").animate({
        "margin-top": "0px"
    }, {
        duration: 1200,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
    $("#proj7").animate({
        opacity: 1
    }, {
        duration: 1400,
        queue: false
    });
    $("#proj7").animate({
        "margin-top": "0px"
    }, {
        duration: 1400,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
    $("#proj8").animate({
        opacity: 1
    }, {
        duration: 1600,
        queue: false
    });
    $("#proj8").animate({
        "margin-top": "0px"
    }, {
        duration: 1600,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
    $("#proj9").animate({
        opacity: 1
    }, {
        duration: 1800,
        queue: false
    });
    $("#proj9").animate({
        "margin-top": "0px"
    }, {
        duration: 1800,
        specialEasing: {
            "margin-top": "easeOutCirc"
        },
        queue: false
    });
});

// handles the

$('#proj1').on({
    'mouseover': function(){
        $('#projIcon1').attr('src','../images/triangularIcon.svg');
    }
});