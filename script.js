function cssTest() {
    const cover = document.getElementById("cover");
    const inner = document.getElementById("inner")
    inner.animate({
        opacity: [0, 1]
        }, {
        direction: 'reverse',
        duration: 800,
    })
    cover.animate({
        opacity: [0, 1]
        }, {
        direction: 'reverse',
        duration: 800,
    }).onfinish = changeTitle;
}

function changeTitle() {

    document.getElementById("body").classList.toggle("neon");
    document.getElementById("body").classList.toggle("colorful");

    if (document.getElementById("body").classList.contains("neon")) {
        document.getElementById("title").innerHTML = "Neon";
    }
    else {
        document.getElementById("title").innerHTML = "Light";
    }
    inner.animate({
        opacity: [0, 1]
        }, 1000);
}

