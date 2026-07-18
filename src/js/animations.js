import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Hero section animations
  gsap.fromTo('.gsap-hero-text > *', 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
  );

  gsap.fromTo('.gsap-hero-image', 
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
  );

  // Scroll reveals
  const revealElements = document.querySelectorAll('.gsap-reveal');
  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Project cards stagger reveal
  const projects = document.querySelectorAll('.project-card-container');
  projects.forEach((proj) => {
    gsap.fromTo(proj,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: proj,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
};
