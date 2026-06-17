
var loopCount = 0;
function bannerAnimation() {

    loopCount++;
    TweenMax.set([copy1, copy2], { opacity: 0 })
    TweenMax.set(container, { opacity: 1 })
    TweenMax.to(copy1, 0.5, { opacity: 1, ease: Quad.easeIn, delay: 0 })
    TweenMax.to(copy1, 0.5, { opacity: 0, ease: Quad.easeOut, delay: 2.5 })
    TweenMax.to(copy2, 0.5, { opacity: 1, ease: Quad.easeIn, delay: 3 })
    if (loopCount < 2) {
        TweenMax.to(copy2, 0.5, { opacity: 0, ease: Quad.easeOut, delay: 5.5 })
        TweenMax.delayedCall(6, bannerAnimation)
    }

}

function bannerClick() {
    window.open(clickTag, "_blank");
}

function ClickHere() {
    window.open(clickTag1, "_blank");
}



