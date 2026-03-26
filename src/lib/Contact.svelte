<script>
    import { animateOnScroll } from './actions.js';
</script>

<div class="contact-page">
    <header class="page-header">
        <div class="overlay"></div>
        <div class="container relative z-10">
            <h1 class="text-gradient-gold">Contact <span class="highlight-text">Us</span></h1>
            <p class="sub_cap">We'd love to hear from you. Get in touch with us today.</p>
        </div>
    </header>

    <section class="contact-section">
        <div class="container">
            <div class="contact-info-grid">
                <a href="https://maps.app.goo.gl/awBafWSNofmhzS2e8?g_st=ac" target="_blank" class="info-card scroll-reveal delay-100 glass-panel hover-3d" use:animateOnScroll>
                    <div class="info-icon">📍</div>
                    <h3>Address</h3>
                    <p>Alapat Cross Road Kochi, 682016.<br>Ravipuram, near Panampilly Railway cross</p>
                </a>
                <a href="tel:+919746338724" class="info-card scroll-reveal delay-200 glass-panel hover-3d" use:animateOnScroll>
                    <div class="info-icon">📞</div>
                    <h3>Phone</h3>
                    <p>+91 9746338724</p>
                    <p>+91 8891052525</p>
                </a>
                <a href="mailto:info.gadd9@gmail.com" class="info-card scroll-reveal delay-300 glass-panel hover-3d" use:animateOnScroll>
                    <div class="info-icon">✉️</div>
                    <h3>Email</h3>
                    <p>info.gadd9@gmail.com</p>
                </a>
            </div>
        </div>
    </section>
</div>

<style>
    .page-header {
        position: relative;
        background-image: url('https://images.unsplash.com/photo-1596524430615-b46476dd9fdb?q=80&w=1920&auto=format&fit=crop');
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
    .sub_cap{
        color: white;
    }
    .page-header p {
        font-size: 1.2rem;
        opacity: 0.9;
    }

    .contact-section {
        padding: 4rem 0;
    }

    .contact-info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .info-card {
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        /* Background/Shadow handled by glass-panel & hover-3d */
    }

    .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    }

    .info-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .info-card h3 {
        color: var(--color-primary);
        font-size: 1.3rem;
        margin-bottom: 1rem;
        font-family: var(--font-main);
        font-weight: 600;
    }

    .info-card p {
        color: var(--color-text-light);
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 0.5rem;
        font-family: var(--font-main);
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
        
        .contact-section {
            padding: 3rem 0;
        }
        
        .contact-section {
            padding: 3rem 0;
        }
        
        .contact-info-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .info-card {
            padding: 1.5rem;
        }
        
        .info-icon {
            font-size: 2.5rem;
        }
        
        .info-card h3 {
            font-size: 1.2rem;
        }
        
        .info-card p {
            font-size: 0.95rem;
        }
    }
    
    @media (max-width: 480px) {
        .page-header h1 {
            font-size: 1.75rem;
        }
        
        .page-header p {
            font-size: 0.9rem;
        }
        
        .info-card {
            padding: 1.25rem;
        }
        
        .info-icon {
            font-size: 2rem;
        }
        
        .info-card h3 {
            font-size: 1.1rem;
        }
        
        .info-card p {
            font-size: 0.9rem;
        }
    }
</style>
