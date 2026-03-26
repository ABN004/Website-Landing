<script>
    import '../lib/styles.css';
    import { animateOnScroll } from './actions.js';
    const founders = [
        { name: "Midhil C.P.", role: "Founder", image: "https://placehold.co/300x300/bf1d2d/ffffff?text=Midhil" },
        { name: "Sucheendranath", role: "Co-Founder", image: "https://placehold.co/300x300/333333/ffffff?text=Sucheendra" },
        { name: "Sona Surendran", role: "Co-Founder", image: "https://placehold.co/300x300/555555/ffffff?text=Sona" }
    ];
</script>

<div class="about-page">
    <header class="page-header">
        <div class="overlay"></div>
        <div class="container relative z-10">
            <h1 class="text-gradient-gold">About <span class="highlight-text">GADD9</span></h1>
            <p class="subtitle">A creative community where rhythm, art, and purpose come together.</p>
        </div>
    </header>

    <section class="about-content">
        <div class="container">
            <div class="grid-layout">
                <main class="main-text">
                    <h2 class="section-title text-left text-gradient-gold premium-header">Our Genesis</h2>
                    <p class="intro-p scroll-reveal premium-text" use:animateOnScroll>
                        GADD9 is a creative academy dedicated to nurturing talent in art and music, while promoting emotional balance, confidence, and personal growth. 
                        Established in 2020, GADD9 was founded with the vision of creating a space where creativity becomes a powerful tool for self-expression and well-being.
                    </p>
                    <p class="scroll-reveal delay-100 premium-text" use:animateOnScroll>
                        Founded by Midhil C.P., GADD9 is built on the belief that art and music are not just skills, but essential life practices that help individuals manage stress, discover their inner potential, and lead a more balanced life.
                        The academy is co-founded by Sucheendranath and Sona Surendran, whose shared passion and expertise strengthen GADD9's holistic approach to learning.
                    </p>
                    <p class="scroll-reveal delay-200 premium-text" use:animateOnScroll>
                        At GADD9, we welcome learners of all ages and backgrounds—from beginners to aspiring professionals. Our training methods are flexible, personalized, and designed to adapt to each student's goals and lifestyle. 
                        Beyond technical training, we focus on building discipline, creativity, and mental wellness.
                        Today, GADD9 stands as a growing creative community where rhythm, art, and purpose come together to inspire transformation.
                    </p>
                    
                    <div class="highlight-box scroll-reveal delay-300" use:animateOnScroll>
                        <h3 class="premium-header">Highlights of our classes</h3>
                        <p class="premium-text" style="margin-bottom: 1rem;">
                            At GADD9, every class is thoughtfully designed to suit individual needs and learning styles. Our programs are tailor-made and flexible, allowing students to progress at their own pace.
                        </p>
                        <ul style="list-style: none; padding: 0; margin-bottom: 1rem;">
                            <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: var(--color-primary);">✦</span> Experienced and passionate mentors in art and music</li>
                            <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: var(--color-primary);">✦</span> Personalized attention with flexible learning schedules</li>
                            <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: var(--color-primary);">✦</span> A stress-free, positive, and motivating learning environment</li>
                            <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: var(--color-primary);">✦</span> Focus on mental well-being along with skill development</li>
                            <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: var(--color-primary);">✦</span> Suitable for all age groups and skill levels</li>
                            <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: var(--color-primary);">✦</span> A strong community that supports growth, confidence, and self-expression</li>
                        </ul>
                        <p class="premium-text">
                            We believe that art and music are powerful tools for balance, healing, and personal growth, and our training reflects that belief.
                        </p>
                    </div>
                </main>

                <aside class="sidebar">
                     <!-- Founders List -->
                     <div class="founders-column scroll-reveal delay-200" use:animateOnScroll>
                        <div class="founders-list glass-panel hover-3d">
                            <h3>Our Leadership</h3>
                            {#each founders as founder}
                                <div class="founder-item">
                                    <span class="name">{founder.name}</span>
                                    <span class="role">{founder.role}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <section class="schemes-section">
        <div class="container">
            <h2 class="section-title center premium-title text-gradient-gold">RHYTHMIC AURA</h2>
            <div class="schemes-grid">
                <!-- Scheme 1 -->
                <div class="scheme-card scroll-reveal delay-100 hover-3d" use:animateOnScroll>
                    <div class="card-inner">
                        <span class="scheme-number">01</span>
                        <h3>RESONANT FUTURES</h3>
                        <p>Designed to help students manage academic stress, discover their creative strengths, and stay focused. This program encourages positive habits, emotional balance, and talent identification through art and music.</p>
                    </div>
                </div>
                
                <!-- Scheme 2 -->
                <div class="scheme-card scroll-reveal delay-200 hover-3d" use:animateOnScroll>
                    <div class="card-inner">
                        <span class="scheme-number">02</span>
                        <h3>MAESTRO MENTORS</h3>
                        <p>For those who wish to pursue music or art as a career or serious passion. This package offers structured training, advanced guidance, and performance-oriented learning.</p>
                    </div>
                </div>

                <!-- Scheme 3 -->
                <div class="scheme-card scroll-reveal delay-300 hover-3d" use:animateOnScroll>
                    <div class="card-inner">
                        <span class="scheme-number">03</span>
                        <h3>ACOUSTIC RETREAT</h3>
                        <p>Created for working professionals, this flexible program fits into busy schedules. It helps reduce work pressure, refresh the mind, and maintain a healthy balance between personal and professional life.</p>
                    </div>
                </div>
                
                <!-- Scheme 4 -->
                <div class="scheme-card scroll-reveal delay-400 hover-3d" use:animateOnScroll>
                    <div class="card-inner">
                        <span class="scheme-number">04</span>
                        <h3>GOLDEN TUNES</h3>
                        <p>A joyful and relaxing program for senior citizens and retired individuals. It promotes happiness, mental engagement, and creative enjoyment during leisure time.</p>
                    </div>
                </div>
                
                <!-- Scheme 5 -->
                <div class="scheme-card scroll-reveal delay-500 hover-3d" use:animateOnScroll>
                    <div class="card-inner">
                        <span class="scheme-number">05</span>
                        <h3>GADD9 LIVE</h3>
                        <p>A dynamic platform where creativity comes alive through band performances, live events, stage shows, and collaborations—offering real-world exposure and artistic expression.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .page-header {
        position: relative;
        background-image: url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1920&auto=format&fit=crop');
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

    .subtitle {
        font-size: 1.2rem;
        opacity: 0.9;
        max-width: 600px;
        margin: 0 auto;
        color: white;
    }

    .about-content {
        padding: 5rem 0;
        /* background: transparent; - Let body gradient show */
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 4rem;
    }

    .intro-p {
        font-size: 1.2rem;
        line-height: 1.8;
        color: var(--color-text-main); /* Explicitly light text */
        margin-bottom: 2rem;
    }

    .text-left { text-align: left; }
    .center { text-align: center; }

    p {
        margin-bottom: 1.5rem;
        color: var(--color-text-light); /* Light grey for body text */
    }

    .highlight-box {
        background: rgba(255, 255, 255, 0.05); /* Darker transparent background */
        border-left: 5px solid var(--color-primary);
        padding: 2rem;
        margin: 3rem 0;
        border-radius: 0 10px 10px 0;
        border: 1px solid rgba(255,255,255,0.05);
    }

    .highlight-box h3 {
        color: var(--color-gold); /* Gold for emphasis */
        margin-bottom: 1rem;
        font-size: 1.4rem;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .stat-card {
        background: var(--color-primary);
        color: white;
        padding: 2rem;
        text-align: center;
        border-radius: var(--radius-md);
        box-shadow: 0 10px 20px rgba(191, 29, 45, 0.2);
    }

    .big-num {
        display: block;
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1;
    }

    .founders-list {
        background: transparent; /* Handled by glass-panel */
        padding: 2rem;
        border-radius: var(--radius-md);
        /* Border handled by glass-panel */
    }

    .founders-list h3 {
        margin-bottom: 1.5rem;
        font-size: 1.3rem;
        border-bottom: 2px solid rgba(255,255,255,0.1);
        padding-bottom: 0.5rem;
        color: var(--color-primary); /* Pop color */
    }

    .founder-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    
    .founder-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

    .founder-item .name {
        font-weight: 600;
        color: var(--color-text-main);
    }

    .founder-item .role {
        color: var(--color-primary);
        font-size: 0.9rem;
    }

    /* Premium Schemes Section */
    .schemes-section {
        background: linear-gradient(135deg, #111 0%, #222 100%);
        padding: 6rem 0;
        color: white;
        position: relative;
        overflow: hidden;
    }

    /* Subtle background accent */
    .schemes-section::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: radial-gradient(circle at top right, rgba(191, 29, 45, 0.1), transparent 40%);
        pointer-events: none;
    }

    .premium-title {
        color: var(--color-gold);
        font-family: 'Playfair Display', serif; /* Assuming global font or fallback */
        letter-spacing: 2px;
        margin-bottom: 4rem;
        position: relative;
        display: inline-block;
        padding-bottom: 1rem;
    }

    .premium-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: var(--color-primary);
    }

    .schemes-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        perspective: 1000px;
    }
    
    .scheme-card {
        flex: 1 1 300px;
        max-width: 400px;
    }

    .scheme-card {
        background: var(--color-tertiary);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: var(--glass-border);
        border-top: var(--glass-highlight);
        padding: 3rem 2rem;
        border-radius: var(--radius-md);
        position: relative;
        transition: all 0.4s ease;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .scheme-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.06);
        border-color: var(--color-gold);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    .scheme-number {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-primary);
        border: 1px solid var(--color-primary);
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
        margin-bottom: 20px;
    }

    .scheme-card:hover .scheme-number {
        background: var(--color-primary);
        margin-bottom: 20px;
        color: white;
    }

    .scheme-content h3 {
        font-size: 1.4rem;
        color: #ddd;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 0;
        transition: color 0.3s;
    }

    .scheme-card:hover .scheme-content h3 {
        color: white;
        text-shadow: 0 0 10px rgba(255,255,255,0.3);
    }

    /* Decorative corner accent */
    .scheme-card::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 40px 40px 0;
        border-color: transparent var(--color-gold) transparent transparent;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .scheme-card:hover::after {
        opacity: 1;
    }

    @media (max-width: 768px) {
        .page-header {
            padding: 3rem 0;
        }
        
        .page-header h1 { 
            font-size: 2rem; 
            font-family: var(--font-main);
        }
        
        .subtitle {
            font-size: 1rem;
            padding: 0 1rem;
        }
        
        .about-content {
            padding: 3rem 0;
        }
        
        .grid-layout { 
            grid-template-columns: 1fr; 
            gap: 2.5rem;
        }
        
        .intro-p {
            font-size: 1.05rem;
        }
        
        p {
            font-size: 0.95rem;
        }
        
        .highlight-box {
            padding: 1.5rem;
            margin: 2rem 0;
        }
        
        .highlight-box h3 {
            font-size: 1.2rem;
        }
        
        .section-title {
            font-size: 1.75rem;
        }
        
        .schemes-section {
            padding: 4rem 0;
        }
        
        .schemes-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .scheme-card {
            padding: 2rem;
        }
        
        .stat-card {
            padding: 1.5rem;
        }
        
        .big-num {
            font-size: 2.5rem;
        }
        
        .founders-list {
            padding: 1.5rem;
        }
        
        .founders-list h3 {
            font-size: 1.15rem;
        }
    }
    
    @media (max-width: 480px) {
        .page-header h1 {
            font-size: 1.75rem;
        }
        
        .subtitle {
            font-size: 0.9rem;
        }
        
        .section-title {
            font-size: 1.5rem;
        }
    }
</style>
