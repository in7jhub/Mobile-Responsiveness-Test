gsap.registerPlugin(ScrollTrigger);

/* 
Setup: wrap your content <div> in another <div> that will serve as the viewport.
Call this function FIRST (before you create your ScrollTriggers); it sets the 
default "scroller" for you (otherwise it'd be the window/body, but it should be 
the content <div>) 
*/
smoothScroll("#content");

// pin each box for 300px when they hit the top
gsap.utils.toArray(".box").forEach(box => {
  ScrollTrigger.create({
    trigger: box,
    pin: true,
    start: "top top",
    end: "+=300"
  });
});


gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
gsap.set('.scrollDist', {width:'100%', height:'200%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)

$('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
$('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
$('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)


// this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text). It also sets the default "scroller" to the content so you don't have to do that on all your ScrollTriggers.
function smoothScroll(content, viewport, smoothness) {
  content = gsap.utils.toArray(content)[0];
  smoothness = smoothness || 1;

  gsap.set(viewport || content.parentNode, {overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0});
  gsap.set(content, {overflow: "visible", width: "100%"});

  let getProp = gsap.getProperty(content),
    setProp = gsap.quickSetter(content, "y", "px"),
    setScroll = ScrollTrigger.getScrollFunc(window),
    removeScroll = () => content.style.overflow = "visible",
    killScrub = trigger => {
      let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
      scrub && scrub.kill();
      trigger.animation.progress(trigger.progress);
    },
    height, isProxyScrolling;

  function refreshHeight() {
    height = content.clientHeight;
    content.style.overflow = "visible"
    document.body.style.height = height + "px";
    return height - document.documentElement.clientHeight;
  }

  ScrollTrigger.addEventListener("refresh", () => {
    removeScroll();
    requestAnimationFrame(removeScroll);
  })
  ScrollTrigger.defaults({scroller: content});
  ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

  ScrollTrigger.scrollerProxy(content, {
    scrollTop(value) {
      if (arguments.length) {
        isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
        setProp(-value);
        setScroll(value);
        return;
      }
      return -getProp("y");
    },
    scrollHeight: () => document.body.scrollHeight,
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
  });

  return ScrollTrigger.create({
    animation: gsap.fromTo(content, {y:0}, {
      y: () => document.documentElement.clientHeight - height,
      ease: "none",
      onUpdate: ScrollTrigger.update
    }),
    scroller: window,
    invalidateOnRefresh: true,
    start: 0,
    end: refreshHeight,
    refreshPriority: -999,
    scrub: smoothness,
    onUpdate: self => {
      if (isProxyScrolling) {
        killScrub(self);
        isProxyScrolling = false;
      }
    },
    onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
  });
}
