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