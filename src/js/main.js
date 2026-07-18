import '../css/style.css';
import { createIcons } from 'lucide';
import * as lucideIcons from 'lucide';
import { portfolioData } from './data.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons: lucideIcons });

  injectBio();
  injectSkills();
  injectExperience();
  injectProjects();
  injectEducation();
  injectCertificates();
  
  createIcons({ icons: lucideIcons }); // Re-init for dynamically added icons

  initTheme();
  initMobileMenu();
  initNavbar();
  initInteractions();

  setTimeout(() => {
    initAnimations();
  }, 100);
});

function injectBio() {
  const bioContainer = document.getElementById('about-bio');
  
  bioContainer.innerHTML = `
    <div class="text-[#d4d4d4] space-y-4">
      <div class="flex">
        <span class="text-[#569cd6] mr-2">class</span>
        <span class="text-[#4ec9b0]">BackendEngineer</span><span class="text-[#d4d4d4]">(</span><span class="text-[#4ec9b0]">Developer</span><span class="text-[#d4d4d4]">):</span>
      </div>
      <div class="pl-4 md:pl-8 space-y-2">
        <div class="flex">
          <span class="text-[#569cd6] mr-2">def</span>
          <span class="text-[#dcdcaa]">__init__</span><span class="text-[#d4d4d4]">(self):</span>
        </div>
        <div class="pl-4 md:pl-8">
          <span class="text-[#9cdcfe]">self</span>.<span class="text-[#9cdcfe]">name</span> <span class="text-[#d4d4d4]">=</span> <span class="text-[#ce9178]">"Suraj Harogoppa"</span><br>
          <span class="text-[#9cdcfe]">self</span>.<span class="text-[#9cdcfe]">role</span> <span class="text-[#d4d4d4]">=</span> <span class="text-[#ce9178]">"Backend Software Engineer"</span><br>
          <span class="text-[#9cdcfe]">self</span>.<span class="text-[#9cdcfe]">experience_years</span> <span class="text-[#d4d4d4]">=</span> <span class="text-[#b5cea8]">2.7</span>
        </div>
        
        <div class="flex mt-6">
          <span class="text-[#569cd6] mr-2">def</span>
          <span class="text-[#dcdcaa]">get_summary</span><span class="text-[#d4d4d4]">(self):</span>
        </div>
        <div class="pl-4 md:pl-8 text-[#6a9955] whitespace-pre-line leading-relaxed">
          ${portfolioData.personal.bio.map(p => `"""\n${p}\n"""`).join('<br><br>')}
        </div>
      </div>
    </div>
  `;
  document.getElementById('hero-resume-btn').href = portfolioData.personal.resumeUrl;
}

function injectSkills() {
  const container = document.getElementById('skills-grid');
  portfolioData.skills.forEach((skill, index) => {
    // Make the second item (Backend) span 2 columns on medium screens for a bento feel
    const spanClass = index === 1 ? 'md:col-span-2' : 'md:col-span-1';
    
    const div = document.createElement('div');
    div.className = `card p-8 gsap-reveal flex flex-col h-full bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 shadow-sm rounded-3xl hover:border-gray-300 dark:hover:border-white/20 transition-colors ${spanClass}`;
    
    div.innerHTML = `
      <div class="mb-6">
        <i data-lucide="${skill.icon}" class="w-8 h-8 text-accent-primary opacity-80"></i>
      </div>
      <h3 class="text-xl font-display font-medium mb-6 text-gray-900 dark:text-gray-100">${skill.category}</h3>
      <div class="flex flex-wrap gap-2 mt-auto">
        ${skill.items.map(item => `
          <span class="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">
            ${item}
          </span>
        `).join('')}
      </div>
    `;
    container.appendChild(div);
  });
}

function injectExperience() {
  const container = document.getElementById('experience-list');
  portfolioData.experience.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'md:grid md:grid-cols-12 gap-8 md:gap-12 items-start gsap-reveal group relative';
    
    div.innerHTML = `
      <div class="md:col-span-3 md:sticky md:top-32 mb-4 md:mb-0 pt-1">
        <span class="text-sm font-medium text-gray-400 dark:text-gray-500 block mb-2 uppercase tracking-wider">${exp.period}</span>
        <h4 class="font-medium text-gray-900 dark:text-gray-100">${exp.company}</h4>
      </div>
      <div class="md:col-span-9 card p-8 md:p-10 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-3xl group-hover:border-gray-300 dark:group-hover:border-white/20 transition-colors shadow-sm">
        <h3 class="text-2xl font-display font-semibold mb-6 text-gray-900 dark:text-white">${exp.role}</h3>
        ${exp.achievements ? `
          <ul class="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed list-none">
            ${exp.achievements.map(ach => `
              <li class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-300 dark:before:bg-gray-600 before:rounded-full">
                ${ach}
              </li>
            `).join('')}
          </ul>
        ` : ''}
      </div>
    `;
    container.appendChild(div);
  });
}

function injectProjects() {
  const container = document.getElementById('projects-list');
  portfolioData.projects.forEach((proj, index) => {
    const isEven = index % 2 === 0;
    const div = document.createElement('div');
    div.className = 'group relative md:grid md:grid-cols-12 gap-8 items-center gsap-reveal';
    
    div.innerHTML = `
      <div class="md:col-span-7 relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 aspect-[4/3] ${!isEven ? 'md:order-2' : ''}">
        <div id="slider-${proj.id}" class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar h-full w-full transform group-hover:scale-105 transition-transform duration-700">
          ${proj.images ? proj.images.map(img => `
            <img src="${img}" alt="${proj.title}" class="object-cover w-full h-full shrink-0 snap-center" onerror="this.src='https://placehold.co/800x600/18181b/ffffff?text=Project'">
          `).join('') : `<img src="${proj.image}" alt="${proj.title}" class="object-cover w-full h-full shrink-0 snap-center">`}
        </div>
        ${proj.images && proj.images.length > 1 ? `
        <button onclick="document.getElementById('slider-${proj.id}').scrollBy({left: -document.getElementById('slider-${proj.id}').clientWidth, behavior: 'smooth'})" class="absolute inset-y-0 left-4 flex items-center z-20 cursor-pointer border-none bg-transparent hover:scale-110 transition-transform">
          <div class="bg-black/50 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-sm shadow-xl transition-colors">
            <i data-lucide="chevron-left" class="w-5 h-5"></i>
          </div>
        </button>
        <button onclick="document.getElementById('slider-${proj.id}').scrollBy({left: document.getElementById('slider-${proj.id}').clientWidth, behavior: 'smooth'})" class="absolute inset-y-0 right-4 flex items-center z-20 cursor-pointer border-none bg-transparent hover:scale-110 transition-transform">
          <div class="bg-black/50 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-sm shadow-xl transition-colors">
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </div>
        </button>
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20">
          ${proj.images.map((_, i) => `<div class="w-1.5 h-1.5 rounded-full bg-white/50 border border-black/20"></div>`).join('')}
        </div>
        ` : ''}
        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
      </div>
      
      <div class="md:col-span-5 relative z-20 ${!isEven ? 'md:order-1' : ''} mt-[-4rem] md:mt-0 px-4 md:px-0">
        <div class="bg-white/90 dark:bg-[#121214]/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl ${!isEven ? 'md:-mr-12' : 'md:-ml-12'}">
          <h3 class="text-2xl md:text-3xl font-display font-semibold mb-6 text-gray-900 dark:text-white">${proj.title}</h3>
          
          ${Array.isArray(proj.description) ? `
            <div class="space-y-3 mb-8 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              ${proj.description.map(desc => `<p>${desc}</p>`).join('')}
            </div>
          ` : `
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">${proj.description}</p>
          `}
          
          <div class="flex flex-wrap gap-2 mb-8">
            ${proj.tags.map(tag => `<span class="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-md">${tag}</span>`).join('')}
          </div>
          
          <div class="flex items-center gap-6">
            ${proj.demoUrl ? `
              <a href="${proj.demoUrl}" target="_blank" class="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-accent-primary transition-colors">
                Live Demo <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
            ` : ''}
            ${proj.githubUrl ? `
              <a href="${proj.githubUrl}" target="_blank" class="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Source
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function injectEducation() {
  const container = document.getElementById('education-list');
  portfolioData.education.forEach(edu => {
    const div = document.createElement('div');
    div.className = 'md:grid md:grid-cols-12 gap-8 md:gap-12 items-start gsap-reveal group relative';
    div.innerHTML = `
      <div class="md:col-span-3 md:sticky md:top-32 mb-4 md:mb-0 pt-1">
        <span class="text-sm font-medium text-gray-400 dark:text-gray-500 block mb-2 uppercase tracking-wider">${edu.period}</span>
      </div>
      <div class="md:col-span-9 card p-8 md:p-10 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-3xl group-hover:border-gray-300 dark:group-hover:border-white/20 transition-colors shadow-sm">
        <h3 class="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">${edu.degree}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">${edu.institution}</p>
        <span class="inline-block text-sm font-medium text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/5 px-4 py-1.5 rounded-full">${edu.score}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

function injectCertificates() {
  const container = document.getElementById('certificates-grid');
  portfolioData.certificates.forEach(cert => {
    const a = document.createElement('a');
    a.href = cert.link;
    a.target = "_blank";
    a.className = 'group flex items-center justify-between py-6 border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors gsap-reveal px-4 -mx-4 rounded-xl';
    a.innerHTML = `
      <div>
        <h4 class="font-medium text-lg text-gray-900 dark:text-white group-hover:text-accent-primary transition-colors">${cert.title}</h4>
        <p class="text-sm text-gray-500 mt-1">${cert.issuer}</p>
      </div>
      <i data-lucide="arrow-up-right" class="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"></i>
    `;
    container.appendChild(a);
  });
}

function initTheme() {
  const html = document.documentElement;
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.classList.add('dark');
    body.classList.add('dark');
  }

  const toggleTheme = () => {
    html.classList.toggle('dark');
    body.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  toggleBtn.addEventListener('click', toggleTheme);
  toggleBtnMobile.addEventListener('click', toggleTheme);
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  };

  menuBtn.addEventListener('click', toggleMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-white/80', 'dark:bg-[#09090b]/80', 'shadow-sm', 'border-b', 'border-gray-200', 'dark:border-white/5');
    } else {
      navbar.classList.remove('bg-white/80', 'dark:bg-[#09090b]/80', 'shadow-sm', 'border-b', 'border-gray-200', 'dark:border-white/5');
    }
  });
}

function initInteractions() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(portfolioData.personal.email).then(() => {
      toast.classList.remove('translate-y-20', 'opacity-0');
      setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 3000);
    });
  });

  const glow = document.getElementById('glow');
  window.addEventListener('mousemove', (e) => {
    // Only update if screen is large enough (desktop)
    if (window.innerWidth > 768) {
      glow.style.setProperty('--mouse-x', `${e.clientX}px`);
      glow.style.setProperty('--mouse-y', `${e.clientY}px`);
    }
  });
}
