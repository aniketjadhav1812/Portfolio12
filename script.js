function start()
{$(document).ready(function() {
    $(".scramble").scramble(3000,20,"alphabet",true);
  });
  const text = new SplitType("#name");

  var typed = new Typed('#typing', {
    strings: ['CODER.', 'DEVELOPER.','STUDENT.'],
    typeSpeed: 50,
    loop:true
  });
  
  var tl = gsap.timeline();
  tl.to(".Loading",{
    opacity: 0,
    delay: 2.5,
  })
  .to(".loader",{
    y:"-100%",
    duration: .8,
    ease: "Expo.easeInOut"
  })
  .to("#text",{
    opacity: 1,
  })
  .from("#right",{
    opacity:0,
    x: 200,
    ease:Expo.easeInOut,
    delay:"-0.5"
  })
  .from("#name1 .char",{
    opacity:0,
    y: "-50%",
    rotate: 15,
    stagger:0.1,
    ease: "back.out(1.7)"
  },"up-down")
  .from("#surname .char",{
    opacity:0,
    y: "50%",
    rotate: "-15",
    stagger:0.1,
    ease: "back.out(1.7)"
  },"up-down")

  
  .from("#left",{
    opacity:0,
    x: "-100",
    ease:Expo.easeInOut,
    delay: "-0.8"
  })
  .from("#btn",{
    opacity:0,
    width:0,
    height:70,
    delay:"-1",
    duration:1.2
  })
}
  let explore = document.querySelector("#btn");
  explore.addEventListener("click",function () {
    gsap.to("#page",{
      scale:5,
    stagger:0.5,
    duration:1,
    ease:"Expo.easeOut"
  },"same")
  
});

function locate() {
  window,location.href = "./AJ-Blog/index.html";
}


