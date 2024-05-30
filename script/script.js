
var loopCount = 1;
function animation() {

    loopCount++;

    TweenMax.set(["#titleOne"], { y: 0 });
    TweenMax.set(["#titleTwo"], { y: 0 });
    TweenMax.set(["#titleThree"], { y: 0 });

    TweenMax.to(imgOne, 0.5, { width: "100%", ease: Quad.easeOut, delay: 0 });
    TweenMax.to(["#titleOne"], 1, { y: -80, ease: Quad.easeInOut, delay: 0.5 });
    TweenMax.to(["#titleOne"], 1, { y: -200, ease: Quad.easeOut, delay: 3.5 });
    TweenMax.to(imgOne, 1, { width: "0%", ease: Quad.easeInOut, delay: 5 });

    TweenMax.to(imgTwo, 1, { width: "100%", ease: Quad.easeInOut, delay: 4 });
    TweenMax.to(["#titleTwo"], 1, { y: -80, ease: Quad.easeInOut, delay: 4.5 });
    TweenMax.to(["#titleTwo"], 1, { y: -200, ease: Quad.easeOut, delay: 7.5 });
    TweenMax.to(imgTwo, 1, { width: "0%", ease: Quad.easeInOut, delay: 9 });

    TweenMax.to(imgThree, 1, { width: "100%", ease: Quad.easeInOut, delay: 8 });
    TweenMax.to(["#titleThree"], 1, { y: -80, ease: Quad.easeInOut, delay: 8.5 });

    if (loopCount > 0) {

        TweenMax.to([titleThree, imgThree], 0.5, { opacity: 0, ease: Quad.easeOut, delay: 10.5 });
        TweenMax.delayedCall(11, animation)
    }
}
