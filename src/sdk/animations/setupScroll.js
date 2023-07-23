import { onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother.min.js';


export default function setupScroll() {
  let smoother;
  onMounted(() => {
    nextTick(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      if (ScrollTrigger.isTouch !== 1) {
        smoother = ScrollSmoother.create({
          wrapper: '.wrapper',
          content: '.content',
          smooth: 1.2,
          effects: true,
        });
      }
    });
  });
  
  return smoother;
}
