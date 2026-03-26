<script>
    import '../lib/styles.css';
    
    import { animateOnScroll } from './actions.js';

    // Using a clear, high-quality hero image placeholder that fits the music/art theme
    const heroImage = "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1920&auto=format&fit=crop";
    const journeyImage = "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop";
</script>

<div class="landing-page">
    <section class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('{heroImage}');">
        <div class="container hero-content">
            <h1 class="animate-up text-gradient-gold premium-header">Ignite Your <span class="highlight">Creativity</span></h1>
            <p class="animate-up delay-1 premium-text">Nurturing talent in art and music while promoting emotional balance, confidence, and personal growth since 2020.</p>
            <div class="cta-group animate-up delay-2">
                <a href="/classes" class="btn btn-primary hover-3d">Explore Courses</a>
                <a href="/contact" class="btn btn-outline hover-3d">Join Us</a>
            </div>
            
            <div class="stats-bar animate-up delay-3">
                <div class="stat">
                    <span class="number premium-header">2020</span>
                    <span class="label">Established</span>
                </div>
                <div class="stat">
                    <span class="number premium-header">20+</span>
                    <span class="label">Programs</span>
                </div>
                <div class="stat">
                    <span class="number premium-header">100%</span>
                    <span class="label">Passion</span>
                </div>
            </div>
        </div>
    </section>

    <section class="intro">
        <div class="container">
            <div class="content-wrapper">
                <div class="text-block">
                    <h2 class="section-title scroll-reveal premium-header" use:animateOnScroll>Our Journey</h2>
                    <p class="lead scroll-reveal delay-100 premium-text" style="font-size: 1.3rem;" use:animateOnScroll>
                        When we embarked on this journey at the beginning of 2020, the path was far from easy. 
                        What we possessed were boundless dreams and a small group of individuals who stood by us like family. 
                        Guided by the belief that collective effort would ultimately lead to success, we continued to move forward.
                    </p>
                    <p class="scroll-reveal delay-200 premium-text" use:animateOnScroll>
                        Through both minor and major setbacks, we remained united—supporting one another, persevering, and refusing to give up. 
                        With every step taken toward the vision we held in the distance, new challenges emerged. 
                        Yet our dream consistently stood stronger than our fears.
                    </p>
                    <blockquote class="quote scroll-reveal delay-400" use:animateOnScroll>
                        "We have come a long way, and there is still a long journey ahead. For that journey, we warmly invite you to walk alongside us."
                    </blockquote>
                    <a href="/about" class="read-more scroll-reveal delay-500" use:animateOnScroll>Read our full story &rarr;</a>
                </div>
                <div class="image-block">
                     <div class="image-frame scroll-reveal delay-200" use:animateOnScroll>
                        <img src={journeyImage} alt="Our Planning Journey">
                        <div class="experience-badge">
                            <span class="years premium-header">5+</span>
                            <span class="text">Years of Excellence</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </section>

    <section class="vision-cta">
        <div class="container">
            <h2 class="premium-header scroll-reveal" use:animateOnScroll>Start Your Creative Journey Today</h2>
            <p class="premium-text scroll-reveal delay-100" use:animateOnScroll>From classical instruments to cinematic dance, find your rhythm with GADD9.</p>
            <a href="/contact" class="btn btn-white scroll-reveal delay-200" use:animateOnScroll>Get in Touch</a>
        </div>
    </section>
</div>

<style>
    .hero {
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        min-height: 90vh;
        display: flex;
        align-items: center;
        color: white;
        text-align: center;
        position: relative;
    }
    
    /* Standard Dark Overlay for Hero */
    .hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--color-overlay);
        z-index: 0;
    }

    .hero-content {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
        z-index: 1;
    }

    .hero h1 {
        font-size: 4.5rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.1;
        letter-spacing: -2px;
        font-family: var(--font-main);
        /* Gradient handled by utility now, specific override if needed */
    }

    .highlight {
        color: white; /* User requested white */
        -webkit-text-fill-color: white; /* Override parent gradient text transparency */
        position: relative;
        display: inline-block;
    }
    
    .highlight::after {
        content: '';
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        height: 15px;
        background: rgba(191, 29, 45, 0.3);
        z-index: -1;
        transform: skewX(-15deg);
    }

    .hero p {
        font-size: 1.3rem;
        color: rgba(255,255,255,0.9);
        margin-bottom: 2.5rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
        font-family: var(--font-main);
    }

    .cta-group {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        margin-bottom: 4rem;
    }

    .btn {
        padding: 16px 40px;
        border-radius: 50px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        text-decoration: none;
    }

    .btn-primary {
        background: var(--color-primary);
        color: white;
        border: 2px solid var(--color-primary);
        box-shadow: 0 10px 20px rgba(191, 29, 45, 0.3);
    }

    .btn-primary:hover {
        background: #a01825;
        border-color: #a01825;
        transform: translateY(-3px);
    }

    .btn-outline {
        background: transparent;
        color: white;
        border: 2px solid rgba(255,255,255,0.4);
        backdrop-filter: blur(5px);
    }
    
    .btn-outline:hover {
        background: white;
        color: var(--color-primary);
        border-color: white;
        transform: translateY(-3px);
    }

    /* Stats Bar */
    .stats-bar {
        display: flex;
        justify-content: center;
        gap: 4rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.2);
    }

    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .stat .number {
        font-size: 2.5rem;
        font-weight: 700;
        color: white;
        line-height: 1;
        margin-bottom: 0.5rem;
    }

    .stat .label {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: rgba(255,255,255,0.7);
    }

    /* Intro Section */
    .intro {
        padding: 8rem 0;
        /* background: transparent; */
        overflow: hidden;
    }

    .content-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: center;
    }

    .text-block .section-title {
        font-size: 3rem;
        color: var(--color-text-main);
        margin-bottom: 1.5rem;
        text-align: left;
        position: relative;
    }
    
    .text-block .section-title::after {
        content: '';
        display: block;
        width: 80px;
        height: 4px;
        background: var(--color-primary);
        margin-top: 15px;
    }

    .text-block .lead {
        font-size: 1.25rem;
        color: var(--color-primary);
        font-weight: 500;
        margin-bottom: 2rem;
        line-height: 1.5;
    }
    
    .text-block p {
        color: var(--color-text-light);
        margin-bottom: 1.5rem;
        font-size: 1.05rem;
    }

    .quote {
        margin: 2rem 0;
        padding: 1.5rem 2rem;
        border-left: 4px solid var(--color-primary);
        background: var(--color-tertiary);
        font-style: italic;
        color: var(--color-text-main);
        font-size: 1.1rem;
        border-radius: 0 10px 10px 0;
    }

    .read-more {
        color: var(--color-primary);
        font-weight: 700;
        margin-top: 1rem;
        display: inline-block;
        font-size: 1.1rem;
        border-bottom: 2px solid transparent;
    }
    
    .read-more:hover {
        border-bottom-color: var(--color-primary);
    }

    /* Image Block with Frame */
    .image-block {
        position: relative;
    }

    .image-frame {
        position: relative;
        z-index: 1;
        /* Glass effect added to frame container implicitly or via utility if applied */
    }
    
    .image-frame::before {
        content: '';
        position: absolute;
        top: -15px;
        right: -15px;
        width: 100%;
        height: 100%;
        border: 1px solid var(--color-gold); /* Gold border */
        z-index: -1;
        border-radius: var(--radius-md);
        opacity: 0.6;
    }

    .image-frame img {
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        width: 100%;
        height: auto;
    }

    .experience-badge {
        position: absolute;
        bottom: -30px;
        left: -30px;
        background: linear-gradient(135deg, var(--color-primary) 0%, #000 100%); /* Depth gradient */
        color: white;
        padding: 2rem;
        border-radius: 50%;
        width: 140px;
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-shadow: var(--shadow-lg);
        border: 4px solid var(--color-tertiary); /* Dark border to merge */
    }

    .experience-badge .years {
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 1;
    }

    .experience-badge .text {
        font-size: 0.8rem;
        line-height: 1.2;
        margin-top: 0.2rem;
        opacity: 0.9;
    }

    /* Vision CTA */
    .vision-cta {
        background: linear-gradient(135deg, var(--color-primary) 0%, #a01825 100%);
        color: white;
        text-align: center;
        padding: 8rem 0;
        position: relative;
        overflow: hidden;
    }
    
    .vision-cta::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==');
        opacity: 0.3;
    }

    .vision-cta h2 {
        color: white;
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    .vision-cta p {
        color: rgba(255,255,255,0.9);
        font-size: 1.4rem;
        max-width: 700px;
        margin: 0 auto 3rem;
    }

    .btn-white {
        background: white;
        color: var(--color-primary);
        padding: 18px 45px;
        font-size: 1.1rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }

    .btn-white:hover {
        background: #f4f4f4;
        transform: translateY(-3px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    }
    
    /* Animations */
    .animate-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    .delay-1 { animation-delay: 0.2s; }
    .delay-2 { animation-delay: 0.4s; }
    .delay-3 { animation-delay: 0.6s; }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .hero {
            min-height: 70vh;
            background-attachment: scroll;
            padding: 2rem 0;
        }
        
        .hero-content {
            padding: 1.5rem 1rem;
            width: 100%;
        }
        
        .hero h1 { 
            font-size: 2rem; 
            margin-bottom: 1rem;
            letter-spacing: -0.5px;
            line-height: 1.2;
            padding: 0 0.5rem;
        }
        
        .hero p { 
            font-size: 0.95rem; 
            margin-bottom: 2rem;
            padding: 0 0.5rem;
            line-height: 1.5;
        }
        
        .highlight::after {
            height: 12px;
            bottom: 8px;
        }
        
        .cta-group {
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2.5rem;
            align-items: center;
            width: 100%;
        }
        
        .btn {
            padding: 14px 28px;
            font-size: 0.85rem;
            width: 100%;
            max-width: 280px;
            text-align: center;
        }
        
        .stats-bar { 
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem; 
            padding-top: 1.5rem;
            justify-content: center;
        }
        
        .stat {
            flex: 0 0 auto;
            min-width: 80px;
        }
        
        .stat .number { 
            font-size: 1.8rem; 
        }
        
        .stat .label {
            font-size: 0.75rem;
            text-align: center;
        }
        
        .intro {
            padding: 3rem 0;
        }
        
        .content-wrapper { 
            grid-template-columns: 1fr; 
            gap: 2rem; 
        }
        
        .image-block { 
            order: -1; 
            margin-bottom: 2rem; 
            margin-top: 0;
            padding: 0 1rem;
        }
        
        .image-frame::before {
            top: -10px;
            right: -10px;
        }
        
        .text-block {
            padding: 0 1rem;
        }
        
        .text-block .section-title {
            font-size: 1.75rem;
            text-align: center;
            left: 0;
            transform: none;
            margin-bottom: 1.5rem;
        }
        
        .text-block .section-title::after {
            margin: 10px auto 0;
        }
        
        .text-block .lead {
            font-size: 1.05rem;
            text-align: center;
            margin-bottom: 1.5rem;
        }
        
        .text-block p {
            font-size: 0.95rem;
            text-align: left;
            line-height: 1.6;
            margin-bottom: 1.25rem;
        }
        
        .quote {
            font-size: 0.95rem;
            padding: 1.2rem 1.5rem;
            margin: 1.5rem 0;
            text-align: left;
        }
        
        .read-more {
            text-align: center;
            display: block;
            margin-top: 1.5rem;
            font-size: 1rem;
        }
        
        .experience-badge { 
            width: 80px; 
            height: 80px; 
            bottom: -10px; 
            left: 10px; 
            padding: 0.8rem; 
        }
        
        .experience-badge .years { 
            font-size: 1.4rem; 
        }
        
        .experience-badge .text {
            font-size: 0.65rem;
        }
        
        .vision-cta {
            padding: 3rem 1rem;
        }
        
        .vision-cta h2 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
            line-height: 1.3;
            padding: 0 0.5rem;
        }
        
        .vision-cta p {
            font-size: 1rem;
            margin-bottom: 2rem;
            padding: 0 0.5rem;
            line-height: 1.5;
        }
        
        .btn-white {
            padding: 14px 32px;
            font-size: 0.95rem;
            width: auto;
            max-width: 280px;
        }
    }
    
    @media (max-width: 480px) {
        .hero {
            min-height: 60vh;
            padding: 1.5rem 0;
        }
        
        .hero-content {
            padding: 1rem 0.75rem;
        }
        
        .hero h1 {
            font-size: 1.6rem;
            margin-bottom: 0.75rem;
            padding: 0;
        }
        
        .hero p {
            font-size: 0.85rem;
            margin-bottom: 1.5rem;
            padding: 0;
        }
        
        .highlight::after {
            height: 10px;
            bottom: 6px;
        }
        
        .btn {
            padding: 12px 24px;
            font-size: 0.8rem;
            max-width: 100%;
        }
        
        .stats-bar {
            gap: 1rem;
            padding-top: 1.25rem;
        }
        
        .stat .number {
            font-size: 1.5rem;
        }
        
        .stat .label {
            font-size: 0.7rem;
        }
        
        .intro {
            padding: 2.5rem 0;
        }
        
        .content-wrapper {
            gap: 1.5rem;
        }
        
        .image-block {
            padding: 0 0.5rem;
            margin-bottom: 1.5rem;
        }
        
        .text-block {
            padding: 0 0.75rem;
        }
        
        .text-block .section-title {
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
        }
        
        .text-block .lead {
            font-size: 1rem;
            margin-bottom: 1.25rem;
        }
        
        .text-block p {
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        .quote {
            font-size: 0.9rem;
            padding: 1rem 1.25rem;
            margin: 1.25rem 0;
        }
        
        .read-more {
            font-size: 0.95rem;
            margin-top: 1.25rem;
        }
        
        .experience-badge {
            width: 70px;
            height: 70px;
            bottom: -8px;
            left: 8px;
            padding: 0.6rem;
        }
        
        .experience-badge .years {
            font-size: 1.2rem;
        }
        
        .experience-badge .text {
            font-size: 0.6rem;
        }
        
        .vision-cta {
            padding: 2.5rem 0.75rem;
        }
        
        .vision-cta h2 {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
            padding: 0;
        }
        
        .vision-cta p {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            padding: 0;
        }
        
        .btn-white {
            padding: 12px 28px;
            font-size: 0.9rem;
            max-width: 100%;
        }
    }
</style>
