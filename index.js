window.onload = focusMe

function focusMe () {
    var initScroll = 0;
    var clientWidth = document.body.clientWidth;
    console.log('clientWidth', clientWidth)
    var myWidth = clientWidth < 600 ? clientWidth / 2500 : clientWidth / 900;
    var runner = this.setInterval(function () {
        if(initScroll < 400 * myWidth) {
            console.log('init', initScroll)
            initScroll = initScroll + 15
            window.scrollTo(0, initScroll);
        } else if(initScroll < 600 * myWidth) {
            console.log('init', initScroll)
            initScroll = initScroll + 10
            window.scrollTo(0, initScroll);
        } if(initScroll < 700 * myWidth) {
            console.log('init', initScroll)
            initScroll = initScroll + 5
            window.scrollTo(0, initScroll);
        } else clearInterval(runner);
    }, 20)
};

var lastScroll = 0;

function scrolling () {
    var doc = document.body;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    
    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var diff = lastScroll - top;
    var d1Obj = getMargin(d1, diff)
    var d2Obj = getMargin(d2, diff)
    d1.style.marginTop = d1Obj.plus + "px";
    d2.style.marginTop = d2Obj.minus + "px";
    console.log(parseInt(lastScroll), parseInt(top), parseInt(diff), d1.style.marginTop)
    lastScroll = top
}

function getMargin(elem, diff){
    var old = elem.style.marginTop.replace("px", '');
    var t = +old
    return {
        plus: t + (diff / 2),
        minus: t - (diff / 2)
    };
}