<script>
    import '../lib/styles.css';
    import { animateOnScroll } from './actions.js';
</script>

<div class="services-page">
    <header class="page-header">
        <div class="overlay"></div>
        <div class="container relative z-10">
            <h1 class="text-gradient-gold">Our <span class="highlight-text">Services</span></h1>
            <p class="sub_service_head">Beyond classes, we offer comprehensive development programs.</p>
        </div>
    </header>

    <section class="services-content">
        <div class="container">
            <div class="services-grid">
                <!-- Service 1 -->
                <div class="service-item glass-panel hover-3d scroll-reveal delay-100" use:animateOnScroll>
                    <div class="icon">🎓</div>
                    <div class="details">
                        <h3 class="premium-header">Training Programs</h3>
                        <p class="premium-text">Structured syllabus-based training for certification exams and professional career development in music and arts.</p>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="service-item glass-panel hover-3d scroll-reveal delay-200" use:animateOnScroll>
                    <div class="icon">🛠️</div>
                    <div class="details">
                        <h3 class="premium-header">Workshops</h3>
                        <p class="premium-text">Intensive weekend workshops and masterclasses with industry experts to refine skills and learn new techniques.</p>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="service-item glass-panel hover-3d scroll-reveal delay-300" use:animateOnScroll>
                    <div class="icon">🧠</div>
                    <div class="details">
                        <h3 class="premium-header">Creative Therapy</h3>
                        <p class="premium-text">Using art and music as therapeutic tools to promote emotional balance, stress relief, and mental well-being.</p>
                    </div>
                </div>

                <!-- Service 4 -->
                <div class="service-item glass-panel hover-3d scroll-reveal delay-400" use:animateOnScroll>
                    <div class="icon">🌱</div>
                    <div class="details">
                        <h3 class="premium-header">Personal Development</h3>
                        <p class="premium-text">Holistic programs focusing on confidence building, public performance, and unlocking creative potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .page-header {
        position: relative;
        background-image: url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1920&auto=format&fit=crop');
        background-size: cover;
        background-position: center;
        padding: 5rem 0;
        text-align: center;
        color: white;
    }

    .overlay {
        position: absolute;
        inset: 0;
        background: var(--color-overlay);
    }
    
    .relative { position: relative; }
    .z-10 { z-index: 10; }

    .page-header h1 {
        font-size: 3.5rem;
        margin-bottom: 0.5rem;
    }
    
    .highlight-text {
        color: var(--color-primary);
    }
    
    .page-header p {
        font-size: 1.2rem;
        opacity: 0.9;
    }
    
    .sub_service_head{
        color: white;
    }

    .services-content {
        padding: 5rem 0;
        /* background: transparent; */
    }

    .services-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
        perspective: 1000px;
    }

    .service-item {
        flex: 1 1 350px;
        max-width: 500px;
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        padding: 2.5rem;
        /* Background handled by glass-panel */
        border-radius: var(--radius-md);
        /* Shadow/Border handled by hover-3d/glass-panel */
    }

    .icon {
        font-size: 2.5rem;
        background: rgba(191, 29, 45, 0.2);
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: white;
        flex-shrink: 0;
    }

    .details h3 {
        color: var(--color-gold);
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    
    .details p {
        color: var(--color-text-light);
        font-size: 1rem;
        margin: 0;
    }

    @media (max-width: 768px) {
        .page-header {
            padding: 3rem 0;
        }
        
        .page-header h1 {
            font-size: 2rem;
            font-family: var(--font-main);
        }
        
        .page-header p {
            font-size: 1rem;
        }
        
        .services-content {
            padding: 3rem 0;
        }
        
        .service-item { 
            flex-direction: column; 
            align-items: center; 
            text-align: center;
            padding: 2rem;
            gap: 1.5rem;
        }
        
        .icon {
            width: 80px;
            height: 80px;
            font-size: 3rem;
        }
        
        .details h3 {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .page-header h1 {
            font-size: 1.75rem;
        }
        
        .page-header p {
            font-size: 0.9rem;
        }
        
        .details h3 {
            font-size: 1.3rem;
        }
    }
</style>
