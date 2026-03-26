<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let isVisible = $state(true);
    let logoVisible = $state(false);

    onMount(() => {
        setTimeout(() => {
            logoVisible = true;
        }, 100);

        setTimeout(() => {
            isVisible = false;
        }, 3000); // Slightly longer for the music animation to be appreciated
    });

    const notes = ['♪', '♫', '♬', '♩', '🎶'];
</script>

{#if isVisible}
    <div class="loader-container" out:fade={{ duration: 800 }}>
        <div class="music-background">
            {#each Array(15) as _, i}
                <span class="note" style="left: {Math.random() * 100}%; animation-delay: {Math.random() * 5}s; font-size: {10 + Math.random() * 30}px;">
                    {notes[i % notes.length]}
                </span>
            {/each}
        </div>

        <div class="content" class:visible={logoVisible}>
            <div class="instrument-animation">
                <!-- SVG Icon for Guitar/Music -->
                <svg class="main-instrument" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                </svg>
                <div class="strings">
                    <div class="string s1"></div>
                    <div class="string s2"></div>
                    <div class="string s3"></div>
                </div>
            </div>

            <div class="brand-text">
                <h2 class="text-gradient-gold">GADD9</h2>
                <span class="subtext">Creative Academy</span>
            </div>

            <div class="loading-status">
                <p class="status-text">Tuning Creativity...</p>
                <div class="audio-waves">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div>
        </div>
        
        <div class="vignette"></div>
    </div>
{/if}

<style>
    .loader-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        height: 100dvh; /* Dynamic viewport height for mobile */
        z-index: 100000;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .vignette {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
        pointer-events: none;
    }

    .music-background {
        position: absolute;
        inset: 0;
        opacity: 0.15;
        pointer-events: none;
    }

    .note {
        position: absolute;
        bottom: -50px;
        color: var(--color-primary);
        animation: float-up 6s linear infinite;
        font-family: serif;
    }

    @keyframes float-up {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        z-index: 10;
        opacity: 0;
        transform: scale(0.9);
        transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .content.visible {
        opacity: 1;
        transform: scale(1);
    }

    .instrument-animation {
        position: relative;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main-instrument {
        width: 100px;
        height: 100px;
        color: var(--color-gold);
        filter: drop-shadow(0 0 20px rgba(191, 149, 63, 0.5));
        animation: instrument-sway 3s ease-in-out infinite;
    }

    .strings {
        position: absolute;
        width: 60px;
        height: 80px;
        display: flex;
        justify-content: space-between;
    }

    .string {
        width: 1px;
        height: 100%;
        background: linear-gradient(to bottom, transparent, var(--color-primary), transparent);
        animation: string-vibrate 0.2s linear infinite;
    }

    .s1 { animation-delay: 0.1s; }
    .s2 { animation-delay: 0.2s; }
    .s3 { animation-delay: 0.3s; }

    @keyframes instrument-sway {
        0%, 100% { transform: rotate(-5deg) scale(1); }
        50% { transform: rotate(5deg) scale(1.05); }
    }

    @keyframes string-vibrate {
        0%, 100% { transform: translateX(0); opacity: 0.5; }
        50% { transform: translateX(2px); opacity: 1; }
    }

    .brand-text {
        text-align: center;
    }

    .brand-text h2 {
        font-size: 3rem;
        margin: 0;
        letter-spacing: 8px;
        font-weight: 800;
        text-transform: uppercase;
    }

    .subtext {
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 0.8rem;
        display: block;
        margin-top: 8px;
    }

    .loading-status {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .status-text {
        color: var(--color-primary);
        font-size: 0.9rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 600;
        margin: 0;
        animation: pulse-text 2s ease-in-out infinite;
    }

    .audio-waves {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 30px;
    }

    .bar {
        width: 3px;
        height: 100%;
        background: var(--color-primary);
        border-radius: 10px;
        animation: wave-rise 1s ease-in-out infinite;
    }

    .bar:nth-child(1) { animation-delay: 0.0s; height: 40%; }
    .bar:nth-child(2) { animation-delay: 0.2s; height: 100%; }
    .bar:nth-child(3) { animation-delay: 0.4s; height: 60%; }
    .bar:nth-child(4) { animation-delay: 0.6s; height: 80%; }
    .bar:nth-child(5) { animation-delay: 0.8s; height: 50%; }

    @keyframes wave-rise {
        0%, 100% { transform: scaleY(0.5); }
        50% { transform: scaleY(1.5); }
    }

    @keyframes pulse-text {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
    }

    @media (max-width: 768px) {
        .content {
            gap: 1.5rem;
            width: 100%;
            padding: 0 20px;
            justify-content: center;
        }
        .brand-text h2 { font-size: 2rem; letter-spacing: 4px; }
        .main-instrument { width: 80px; height: 80px; }
        .instrument-animation { width: 120px; height: 120px; }
        .status-text { font-size: 0.8rem; }
    }
</style>
