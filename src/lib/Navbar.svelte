<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav>
    <div class="container nav-container">
        <a href="/" class="logo">
            <img src="/without_bg_logo.png" alt="GADD9 Logo">
        </a>

        <button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle Navigation">
            <span class="bar" class:open={isMenuOpen}></span>
            <span class="bar" class:open={isMenuOpen}></span>
            <span class="bar" class:open={isMenuOpen}></span>
        </button>

        <ul class:open={isMenuOpen}>
            <li><a href="/" onclick={() => isMenuOpen = false}>Home</a></li>
            <li><a href="/about" onclick={() => isMenuOpen = false}>About</a></li>
            <li><a href="/classes" onclick={() => isMenuOpen = false}>Our Courses</a></li>
            <li><a href="/services" onclick={() => isMenuOpen = false}>Services</a></li>
            <li><a href="/contact" onclick={() => isMenuOpen = false}>Contact</a></li>
        </ul>
    </div>
</nav>

<style>
    nav {
        background: rgba(10, 10, 10, 0.85); /* Dark semi-transparent */
        backdrop-filter: blur(12px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        padding: 0.8rem 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 1000;
        border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        height: 50px; /* Adjust based on navbar size preference */
        width: auto;
    }

    ul {
        display: flex;
        gap: 3rem;
        align-items: center;
    }

    li a {
        font-weight: 500;
        font-size: 1rem;
        color: var(--color-text-main);
        position: relative;
    }

    li a:hover {
        color: var(--color-primary);
    }

    li a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background: var(--color-primary);
        transition: width 0.3s ease;
    }

    li a:hover::after {
        width: 100%;
    }

    .mobile-toggle {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 25px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 101;
    }

    .bar {
        width: 100%;
        height: 3px;
        background: var(--color-text-main);
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }

    /* Hamburger Animation */
    .bar.open:nth-child(1) { transform: rotate(45deg); }
    .bar.open:nth-child(2) { opacity: 0; transform:translateX(20px); }
    .bar.open:nth-child(3) { transform: rotate(-45deg); }

    @media (max-width: 768px) {
        .mobile-toggle { display: flex; }

        ul {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 70%;
            background: var(--color-secondary); /* Dark background */
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: -5px 0 15px rgba(0,0,0,0.5);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            padding-top: 60px;
        }

        ul.open {
            transform: translateX(0);
        }
    }
</style>