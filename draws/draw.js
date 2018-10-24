
"use strict";


function logkey(event) {
    console.log(event);
}

function getCurrentSlideName() {
    return slideshow.getSlides()[slideshow.getCurrentSlideIndex()].properties["name"];
}



function updateAnimationStepLabel(idx) {
    let label = document.getElementById("animationStep");
    label.innerText = "Animation Step: " + idx;
}


var step;
function updateBlock(event) {
    // Disable remark control since we will take care of the keypress event
    // We will give remark back the control in the end of the animation
    slideshow.pause();

    let square = document.getElementById("square");
    square.horizontalShift = square.horizontalShift || 0;

    var nextSlideShortcutCodes = ["Space", "ArrowDown", "ArrowRight", "KeyJ", "PageDown"];
    var previousSlideShortcutCodes = ["ArrowUp", "ArrowLeft", "KeyK", "PageUp"];

    if (nextSlideShortcutCodes.includes(event.code)) {
        if(step === undefined) { step = -1; }
        step += 1;

        if (step > 5) {
            slideshow.resume();
            slideshow.gotoNextSlide();
            step = undefined;
        } else {
            square.horizontalShift = step * 20;
            updateAnimationStepLabel(step);
        }

    } else if (previousSlideShortcutCodes.includes(event.code)) {
        if (step === undefined) { step = 6; }
        step -= 1;

        if (step < 0) {
            slideshow.resume();
            slideshow.gotoPreviousSlide();
            step = undefined;
        } else {
            square.horizontalShift = step * 20;
            updateAnimationStepLabel(step);
        }
    }
    square.style.transform = "translateX(SHIFTXpx)".replace("SHIFTX", square.horizontalShift);
}
