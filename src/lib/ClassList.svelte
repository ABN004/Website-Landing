<script>
    import { fade } from 'svelte/transition';
    import '../lib/styles.css';
    import { animateOnScroll } from './actions.js';

    const classes = [
        "Guitar", "Violin", "Violin Western", "Drums", "Tabla", "Chenda", 
        "Keys", "Western Vocal", "Veena", "Flute", "Carnatic Music",
        "Mridangam", "Bharathanatyam", "Mohiniyattam", "Western Dance (All Styles)", 
        "Western Dance for Kids", "Cinematic Dance", "Semiclassical Dance", 
        "Fusion Kathak", "Choreography Classes", "Zumba"
    ];
    
    // Get appropriate icon for each class
    function getClassIcon(className) {
        const iconMap = {
            "Guitar": "/assets/1.jpeg",
            "Violin": "/assets/2.jpeg",
            "Violin Western": "/assets/3.jpeg",
            "Drums": "/assets/4.jpeg",
            "Tabla": "/assets/5.jpeg",
            "Chenda": "/assets/6.jpeg",
            "Keys": "/assets/7.jpeg",
            "Western Vocal": "/assets/8.jpeg",
            "Veena": "/assets/9.jpeg",
            "Flute": "/assets/11.jpeg",
            "Carnatic Music": "/assets/12.jpeg",
            "Mridangam": "/assets/13.jpeg",
            "Bharathanatyam": "/assets/14.jpeg",
            "Mohiniyattam": "/assets/15.jpeg",
            "Western Dance (All Styles)": "/assets/16.jpeg",
            "Western Dance for Kids": "/assets/17.jpeg",
            "Cinematic Dance": "/assets/18.jpeg",
            "Semiclassical Dance": "/assets/19.jpeg",
            "Fusion Kathak": "/assets/20.jpeg",
            "Choreography Classes": "/assets/21.jpeg",
            "Zumba": "/assets/22.jpeg",
        };
        return iconMap[className] || "🎵";
    }
</script>

<div class="classes-page">
    <header class="page-header">
        <div class="overlay"></div>
        <div class="container relative z-10">
            <h1 class="text-gradient-gold">Our Courses</h1>
            <p>Discover your passion with our expert-led courses</p>
        </div>
    </header>

    <section class="class-grid-section">
        <div class="container">
                <div class="grid">
                    {#each classes as item, i}
                        <div class="card class-card scroll-reveal hover-3d" style="transition-delay: {i * 50}ms;" use:animateOnScroll>
                            <div class="card-icon glass-panel">
                                <img src={getClassIcon(item)} alt="{item} Icon" class="class-icon-img" />
                            </div>
                            <div class="card-content">
                                <h3 class="premium-header">{item}</h3>
                                <p class="premium-text">Professional training for all levels</p>
                                <a href="/contact" class="btn-enroll premium-text">Enroll Now</a>
                            </div>
                        </div>
                    {/each}
                </div>
        </div>
    </section>
</div>

<style>
    .page-header {
        position: relative;
        background-image: url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1920&auto=format&fit=crop');
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
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        font-family: var(--font-main);
        font-weight: 700;
    }
    
    .highlight-text {
        color: var(--color-primary);
    }

    .page-header p {
        font-size: 1.1rem;
        opacity: 0.9;
        font-family: var(--font-main);
    }

    .class-grid-section {
        /* background: transparent; */
        padding: 5rem 0;
    }
    
    .sub_head {
        color: white;
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
    }

    .class-card {
        background: var(--color-tertiary); /* Dark card background */
        border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.05);
        transition: all 0.3s ease;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    
    .class-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        border-color: var(--color-primary);
    }
    
    .card-icon {
        width: 100%;
        height: 220px; 
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        /* Glass effect handled by .glass-panel class */
        border-bottom: 1px solid rgba(255,255,255,0.05);
        padding: 1rem;
        overflow: hidden;
    }
    
    .class-icon-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.4s ease;
        border: none;
        box-shadow: none;
        filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
    }
    
    .class-card:hover .class-icon-img {
        transform: scale(1.1);
        filter: drop-shadow(0 8px 25px rgba(191, 29, 45, 0.4));
    }

    .card-content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;
    }
    
    .card-content h3 {
        color: var(--color-text-main);
        font-size: 1.3rem;
        margin: 0;
        font-family: var(--font-main);
        font-weight: 600;
        line-height: 1.3;
    }

    .card-content p {
        color: var(--color-text-light);
        font-size: 0.95rem;
        margin: 0;
        font-family: var(--font-main);
        line-height: 1.6;
        flex: 1;
    }
    
    .btn-enroll {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: var(--color-primary);
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9rem;
        text-decoration: none;
        transition: all 0.3s ease;
        font-family: var(--font-main);
        border: 2px solid var(--color-primary);
        margin-top: 0.5rem;
        width: fit-content;
    }
    
    .btn-enroll:hover {
        background: var(--color-primary);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(191, 29, 45, 0.25);
    }
    
    @media (max-width: 768px) {
        .page-header {
            padding: 3rem 0;
        }
        
        .page-header h1 {
            font-size: 1.75rem;
            font-family: var(--font-main);
        }
        
        .page-header p {
            font-size: 0.95rem;
        }
        
        .class-grid-section {
            padding: 3rem 0;
        }
        
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
        }
        
        .card-icon {
            height: 160px;
        }

        .class-icon-img {
            height: 100%;
        }
        

        
        .card-content {
            padding: 1.5rem;
        }
        
        .card-content h3 {
            font-size: 1.15rem;
        }
        
        .card-content p {
            font-size: 0.9rem;
        }
        
        .btn-enroll {
            padding: 10px 20px;
            font-size: 0.85rem;
        }
    }
    
    @media (max-width: 480px) {
        .page-header h1 {
            font-size: 1.5rem;
        }
        
        .page-header p {
            font-size: 0.85rem;
        }
        
        .grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
        }
        
        .card-icon {
            height: 140px;
        }

        .class-icon-img {
            height: 100%;
        }
        

        
        .card-content {
            padding: 1.25rem;
        }
        
        .card-content h3 {
            font-size: 1.1rem;
        }
        
        .card-content p {
            font-size: 0.85rem;
        }
        
        .btn-enroll {
            font-size: 0.8rem;
            padding: 10px 18px;
            width: 100%;
        }
    }
</style>
