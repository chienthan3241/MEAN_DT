'use strict';
var pgBar = $("#pgBar"),
    sliderWindow = $(".slider-window")
    ;
//Slider1 Objects
var sl1_bl1 = $("#slider1-bl1"),
    sl1_bl2 = $("#slider1-bl2"),
    sl1_bl3 = $("#slider1-bl3"),
    sl1_bl4 = $("#slider1-bl4"),
    sl1_sd1 = $("#slider1-sd1"),
    sl1_sd2 = $("#slider1-sd2"),
    sl1_sd3 = $("#slider1-sd3"),
    sl1_sd4 = $("#slider1-sd4");
//Slider2 Objects
var sl2_bl1 = $("#slider2-bl1"),
    sl2_obj1 = $("#slider2-obj1"),
    sl2_sd1 = $("#slider2-sd1"),
    sl2_text1 =  $("#slider2-text1"),
    sl2_sd2 = $("#slider2-sd2");
//Slider3 Objects
var sl3_ring = $("#slider3-ring"),
    sl3_bq1 = $("#slider3-bq1"),
    sl3_sd1 = $("#slider3-sd1"),
    sl3_sd12 = $("#slider3-sd12"),
    sl3_sd13 = $("#slider3-sd13"),
    sl3_bq2 = $("#slider3-bq2"),
    sl3_sd2 = $("#slider3-sd2"),
    sl3_sd22 = $("#slider3-sd22"),
    sl3_sd23 = $("#slider3-sd23");
//Slider4 Objects
var sl4_object1 = $("#slider4-object1"),
    sl4_object2 = $("#slider4-object2"),
    sl4_object3 = $("#slider4-object3"),
    sl4_object4 = $("#slider4-object4"),
    sl4_sd1 = $("#slider4-sd1"),
    sl4_sd2 = $("#slider4-sd2"),
    sl4_sd3 = $("#slider4-sd3"),
    sl4_sd4 = $("#slider4-sd4"),
    sl4_sd5 = $("#slider4-sd5"),
    sl4_sd6 = $("#slider4-sd6");



var tl = new TimelineMax();
tl.addLabel("1")//begin slider1 at 0 sec.
    .call(setBulletGoto)
    .from(sl1_bl1, 4, {yPercent: -20, autoAlpha:0, ease: Power2.easeOut})
    .from(sl1_sd1, 3, { ease: Power2.easeOut, autoAlpha: 0 }, 0)
    .from(sl1_bl2, 4, {yPercent: -20, autoAlpha:0, ease: Power2.easeOut}, 3)
    .from(sl1_sd2, 3, { ease: Power2.easeOut, autoAlpha: 0 }, 3)
    .from(sl1_bl3, 4, {yPercent: -20, autoAlpha:0, ease: Power2.easeOut}, 6)
    .from(sl1_sd3, 3, { ease: Power2.easeOut, autoAlpha: 0 }, 6)
    .from(sl1_bl4, 4, {yPercent: -20, autoAlpha:0, ease: Power2.easeOut}, 9)
    .from(sl1_sd4, 3, { ease: Power2.easeOut, autoAlpha: 0 }, 9)
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone, delay: 3}, 8)
    .set(pgBar, {width:"0", delay: 0.1})
    .call(sliderForward, null, null, 16)//sliderWindow one step to right
    .addLabel("2")//begin slider2 at 16 sec.
    .call(setBulletGoto)
    .set(sl2_bl1, {autoAlpha: 1})
    .from(sl2_bl1, 5, {xPercent: -200, ease: Power2.easeOut}, 18)
    .from(sl2_obj1, 4, {yPercent: -100, autoAlpha: 0}, 23)
    .from(sl2_sd1, 4, {autoAlpha: 0}, 23)
    .from([sl2_text1, sl2_sd2], 4, {autoAlpha: 0}, 26)
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone, delay: 1}, 26)
    .set(pgBar, {width:"0", delay: 0.1})
    .call(sliderForward, null, null, 32)//sliderWindow one step to right
    .addLabel("3")//begin slider2 at 32 sec.
    .call(setBulletGoto)
    .from(sl3_ring, 3, {autoAlpha:0, ease: Power2.easeOut}, 34)
    .from([sl3_bq1, sl3_sd1, sl3_sd12, sl3_sd13], 3, {autoAlpha:0, ease: Power2.easeOut}, 37)
    .from([sl3_bq2, sl3_sd2, sl3_sd22, sl3_sd23], 3, {autoAlpha:0, ease: Power2.easeOut}, 40)
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone}, 43)
    .set(pgBar, {width:"0", delay: 0.1})
    .call(sliderForward, null, null, 48)//sliderWindow one step to right
    .addLabel("4")//begin slider2 at 32 sec.
    .call(setBulletGoto)
    .from([sl4_object1, sl4_sd1, sl4_sd4, sl4_sd5, sl4_sd6], 8, {autoAlpha:0, ease: Power2.easeOut}, 50)
    .from(sl4_object2, 8, {autoAlpha:0, ease: Power2.easeOut}, 51)
    .from([sl4_object3, sl4_sd3], 8, {autoAlpha:0, ease: Power2.easeOut}, 52)
    .from([sl4_object4, sl4_sd2], 8, {autoAlpha:0, ease: Power2.easeOut}, 53)
    .to(pgBar, 5, {width:"100%", ease: Power0.easeNone}, 60)
    .call(goTo, [1])
;

//tl.seek(48);

//hover on slider
$(".header-box-container").mouseover(function() {
    $('.bullet-container').fadeTo("fast", 1);
    $('.next-button').fadeTo("fast", 1);
    $('.previous-button').fadeTo("fast", 1);
});
//mouseout of slider
$(".header-box-container").mouseleave(function() {
    $(".bullet-container").fadeOut("slow");
    $(".next-button").fadeOut("slow");
    $(".previous-button").fadeOut("slow");
});
//slider window swipe to right
function sliderForward(){
    TweenMax.to(sliderWindow, 2, {xPercent: (tl.currentLabel())*(-100), ease: Power2.easeOut});
}
//set style for bullets
function setBulletGoto(){
    $('[id^="bullet"]').removeClass('ms-bullet-selected');
    $('#bullet' + tl.currentLabel()).addClass('ms-bullet-selected');
}
//go to one slider
function goTo(sliderNr){
    TweenMax.to(sliderWindow, 2, {xPercent: (sliderNr-1)*(-100), ease: Power2.easeOut});
    tl.resume(sliderNr.toString());
}
//side button click
function next(direction){
    if((tl.currentLabel() == '4' && direction == 1) || (tl.currentLabel() == '1' && direction == -1)) {
        return;
    } else {
        goTo(Number(tl.currentLabel()) + direction);
    }
}

/*=======swipe events=======*/
var hammer = new Hammer.Manager(sliderWindow[0]);
var swipe     = new Hammer.Swipe();
hammer.add(swipe);
hammer.on('swipeleft', function (ev) {
    ev.preventDefault();
    next(1);
});
hammer.on('swiperight', function (ev) {
    ev.preventDefault();
    next(-1);
});
/*=======END swipe events=======*/