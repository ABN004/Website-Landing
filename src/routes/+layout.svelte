<script>
    import '../lib/styles.css';
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    import FloatingContactButton from '$lib/FloatingContactButton.svelte';
    import LoadingScreen from '$lib/LoadingScreen.svelte';

    let { children } = $props();
</script>

<LoadingScreen />

<div class="app-layout">
    <Navbar />
    <main>
        {@render children()}
    </main>
    <Footer />
</div>
<FloatingContactButton />

<style>
    .app-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    main {
        flex: 1;
    }
    
    @media (max-width: 768px) {
        main {
            padding-top: 70px;
        }
    }
    
    @media (max-width: 480px) {
        main {
            padding-top: 60px;
        }
    }
</style>
