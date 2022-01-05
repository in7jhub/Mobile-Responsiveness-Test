// const flightPath = {
//   curviness: 1.5,
//   autoRotate: true,
//   values: [
//     {x: 0, y: -300},
//     {x: 300, y: 10}, 
//     {x: 500, y: 100}, 
//     {x: 750, y: -100}, 
//     {x: 350, y: -50},
//     {x: 600, y: 100},
//     {x: 800, y: 0},
//     {x: window.innerWidth, y: -250}
//   ]
// }
// hide_verytoplogo_anim = 
//------------첫 로고화면-------------

var controller = new ScrollMagic.Controller();
{
// var tl_1 = new TimelineMax() // 하늘배경
// .add(TweenMax.fromTo('#mainpage_1', 1, 
// { yPercent: 0 }, {  yPercent: -8 }))
// .add(TweenMax.to('#mainpage_1', 1.2,
// {  filter: 'brightness(1)' }))
// .add(TweenMax.to('#mainpage_1', 1,
// {  filter: 'brightness(0.6)'}))
// .add(TweenMax.to('#mainpage_1', 1,
// {  filter: 'brightness(0.61)' }))
// .add(TweenMax.to('#mainpage_1', 3,
// { visibility: 'hidden' }));

// var scene_m1 = new ScrollMagic.Scene({
//   triggerElement: '#trig_mainpage',
//   duration: '550%',
//   offset: 0,
//   triggerHook: 0
// })
// .setTween(tl_1)
// .addTo(controller);

// var tl_2 = new TimelineMax() // 건물배경
// .add(TweenMax.fromTo('#mainpage_2', 1, 
// { yPercent: 95}, { yPercent: -50 }))
// .add(TweenMax.to('#mainpage_2', 0.6, 
// {  filter: 'brightness(0.6)', ease: Sine.easeIn}))
// .add(TweenMax.to('#mainpage_2', 2, 
// {  filter: 'brightness(0.61)', ease: Sine.easeIn}))
// .add(TweenMax.to('#mainpage_2', 3, 
// { visibility: 'hidden' }));

// var scene_m2 = new ScrollMagic.Scene({
//   triggerElement: '#trig_mainpage',
//   duration: '550%',
//   offset: 0,
//   triggerHook: 0
// })
// .setTween(tl_2)
// .addTo(controller);

// var tl_3 = new TimelineMax() // 사장과 우체통과 소망나무
// .add(TweenMax.fromTo('#mainpage_3', 1.3, 
// { yPercent: 75 }, { yPercent: -30 }))
// .add(TweenMax.to('#mainpage_3', 1.3, 
// {  filter: 'brightness(0.6)', ease: Power2.easeOut }))
// .add(TweenMax.to('#mainpage_3', 2, 
// {  filter: 'brightness(0.61)'  }))
// .add(TweenMax.to('#mainpage_3', 3, 
// { visibility: 'hidden' }));

// var scene_m3 = new ScrollMagic.Scene({
//   triggerElement: '#trig_mainpage',
//   duration: '550%',
//   offset: 0,
//   triggerHook: 0
// })
// .setTween(tl_3)
// .addTo(controller);

// var tl_4 = new TimelineMax() // 전봇대
// .add(TweenMax.fromTo('#mainpage_4', 1, 
// { yPercent: 0}, { yPercent: -50 }))
// .add(TweenMax.to('#mainpage_4', 0.5, 
// {  filter: 'brightness(0.6)', ease: Power1.easeOut  }))
// .add(TweenMax.to('#mainpage_4', 2, 
// {  filter: 'brightness(0.61)'  }))
// .add(TweenMax.to('#mainpage_4', 3,
// { visibility: 'hidden' }));

// var scene_m4 = new ScrollMagic.Scene({
//   triggerElement: '#trig_mainpage',
//   duration: '550%',
//   offset: 0,
//   triggerHook: 0
// })
// .setTween(tl_4)
// .addTo(controller);

// var Wishtreelogo = TweenMax.fromTo(
//   '#Wishtreelogo', 1,
//   {opacity: 1}, 
//   {opacity: 0}
// );
// var logoOpac = new ScrollMagic.Scene({
//   triggerElement: '#trig_Wishtreelogo',
//   triggerHook: 0.3,
//   // offset: 0,
//   duration: '80%'
// })
// .setTween(Wishtreelogo)
// .addTo(controller);

// var upper_cover_move = TweenMax.fromTo(
//   '#p_cover_upper', 2,
//   {xPercent: -20, yPercent: 7}, 
//   {xPercent: -50, yPercent: 7}
// );
// var covermove_1 = new ScrollMagic.Scene({
//   triggerElement: '#trig_covers',
//   triggerHook: 1,
//   // offset: 0,
//   duration: '240%'
// })
// .setTween(upper_cover_move)
// .addTo(controller)
// // .addIndicators({
// //   name: "upper_cover_move"
// // });

// var under_cover_move = TweenMax.fromTo(
//   '#p_cover_under', 2, 
//   {xPercent: -60, yPercent: 0}, 
//   {xPercent: -40, yPercent: 0}
// );
// var covermove_2 = new ScrollMagic.Scene({
//   triggerElement: '#trig_covers',
//   triggerHook: 1,
//   // offset: 0,
//   duration: '250%'
// })
// .setTween(under_cover_move)
// .addTo(controller);


// var first_story = new TimelineMax()
// .add(TweenMax.to('#A1_S', 2 , 
// { opacity: 0 }))
// .add(TweenMax.to('#A1_S', 1, 
// { opacity: 1 }));

// var first_story_reveal = new ScrollMagic.Scene({
//   triggerElement: '#trig_first_story',
//   triggerHook: 1,
//   // offset: 0,
//   duration: '200%'
// })
// .setTween(first_story)
// .addTo(controller);
}

// //-----------배경 빠르게 블랙------------------
var bg_fast_black = TweenMax.to('#white_bg', 0.5, {
  opacity: 0.0
});
var fast1 = new ScrollMagic.Scene({
  triggerElement: '#trigger',
  triggerHook: 100
  // offset: 0,
  // duration: '120%'
})
.setTween(bg_fast_black)
.addTo(controller)
.addIndicators({
  name: "trig_fast_black"
});
// // ------------------------------------

// // ---------- 배경 빠르게 화이트 ------------
// var bg_fast_white = TweenMax.to('#white_bg', 0.3, {
//   opacity: 1.0
// });
// var fast2 = new ScrollMagic.Scene({
//   triggerElement: '#trig_fast_white',
//   triggerHook: 0
  
//   // offset: 0,
//   // duration: '120%'
// })
// .setTween(bg_fast_white)
// .addTo(controller)
// .addIndicators({
//   name: "trig_fast_white"
// });
// //-----------------------------------
