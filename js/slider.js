document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.projects-slider');
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Initialize slider
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-advance every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Initialize first slide
    showSlide(currentSlide);
});

// Enhanced Slider JavaScript (js/slider.js)
document.addEventListener('DOMContentLoaded', function() {
    // Main project slider
    const projectSlider = document.querySelector('.projects-slider');
    const projectSlides = document.querySelectorAll('.project-slide');
    const projectIndicators = document.querySelectorAll('.slider-indicators .indicator');
    let currentProject = 0;
    let autoSlideInterval;
    const slideDuration = 3000; // 3 seconds per project

    // Screenshot sliders for each project
    const initScreenshotSliders = () => {
        document.querySelectorAll('.screenshot-slider').forEach(slider => {
            const screenshots = slider.querySelectorAll('.screenshots img');
            const indicatorsContainer = slider.querySelector('.screenshot-indicators');
            let currentScreenshot = 0;
            
            // Create indicators
            screenshots.forEach((_, index) => {
                const indicator = document.createElement('span');
                indicator.classList.toggle('active', index === 0);
                indicator.addEventListener('click', () => {
                    showScreenshot(slider, index);
                });
                indicatorsContainer.appendChild(indicator);
            });
            
            // Navigation buttons
            const prevBtn = slider.querySelector('.screenshot-prev');
            const nextBtn = slider.querySelector('.screenshot-next');
            
            prevBtn.addEventListener('click', () => {
                currentScreenshot = (currentScreenshot - 1 + screenshots.length) % screenshots.length;
                showScreenshot(slider, currentScreenshot);
            });
            
            nextBtn.addEventListener('click', () => {
                currentScreenshot = (currentScreenshot + 1) % screenshots.length;
                showScreenshot(slider, currentScreenshot);
            });
            
            // Auto-advance screenshots every 2 seconds
            setInterval(() => {
                if (projectSlides[currentProject].contains(slider)) {
                    currentScreenshot = (currentScreenshot + 1) % screenshots.length;
                    showScreenshot(slider, currentScreenshot);
                }
            }, 2000);
        });
    };
    
    const showScreenshot = (slider, index) => {
        const screenshots = slider.querySelectorAll('.screenshots img');
        const indicators = slider.querySelectorAll('.screenshot-indicators span');
        
        screenshots.forEach(img => img.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        screenshots[index].classList.add('active');
        indicators[index].classList.add('active');
    };
    
    const showProject = (index) => {
        projectSlides.forEach(slide => slide.classList.remove('active'));
        projectIndicators.forEach(ind => ind.classList.remove('active'));
        
        projectSlides[index].classList.add('active');
        projectIndicators[index].classList.add('active');
        currentProject = index;
    };
    
    const nextProject = () => {
        const nextIndex = (currentProject + 1) % projectSlides.length;
        showProject(nextIndex);
    };
    
    // Navigation controls
    document.querySelector('.slider-prev').addEventListener('click', () => {
        const prevIndex = (currentProject - 1 + projectSlides.length) % projectSlides.length;
        showProject(prevIndex);
        resetAutoSlide();
    });
    
    document.querySelector('.slider-next').addEventListener('click', () => {
        nextProject();
        resetAutoSlide();
    });
    
    // Indicator clicks
    projectIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showProject(index);
            resetAutoSlide();
        });
    });
    
    // Auto-advance projects
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextProject, slideDuration);
    };
    
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };
    
    // Pause on hover
    projectSlider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    projectSlider.addEventListener('mouseleave', startAutoSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextProject();
        if (e.key === 'ArrowLeft') {
            const prevIndex = (currentProject - 1 + projectSlides.length) % projectSlides.length;
            showProject(prevIndex);
        }
    });
    
    // Initialize
    initScreenshotSliders();
    showProject(0);
    startAutoSlide();
});