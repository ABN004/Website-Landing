<footer>
    <div class="container">
        <div class="footer-content">
            <div class="brand">
                <div class="brand-logo">
                    <img src="/without_bg_logo.png" alt="GADD9 Logo" class="footer-logo-img" />
<!--                    <h3>GADD9<span class="dot">.</span></h3>-->
                </div>
                <p>Nurturing talent in art and music since 2020. Join us on a journey of creativity and self-expression.</p>
            </div>
            <div class="links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/classes">Our Courses</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div class="contact">
                <h4>Contact Us</h4>
                <p>GADD9 Creative Academy</p>
                <p>+91 9746338724, +91 8891052525</p>
                <p>info.gadd9@gmail.com</p>
                <a href="https://maps.app.goo.gl/awBafWSNofmhzS2e8?g_st=ac" target="_blank" class="address-link">
                    <p>Alapat Cross Road Kochi, 682016</p>
                    <p>Ravipuram, near Panampilly Railway cross</p>
                </a>
            </div>
        </div>
        <div class="bottom-bar">
            <p>&copy; {new Date().getFullYear()} KAMO N ADS Creative Academy. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
    footer {
        background: var(--color-tertiary);
        color: var(--color-text-main);
        padding-top: 4rem;
        margin-top: auto;
    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .brand-logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .footer-logo-img {
        height: 50px;
        width: auto;
        object-fit: contain;
    }

    .brand h3 {
        font-size: 2rem;
        color: white;
        margin: 0;
    }

    .brand .dot {
        color: var(--color-primary);
    }

    .links ul li {
        margin-bottom: 0.8rem;
    }

    .links a:hover {
        color: var(--color-primary);
        padding-left: 5px;
    }

    h4 {
        color: white;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

    .bottom-bar {
        text-align: center;
        font-size: 0.9rem;
        color: var(--color-text-light);
    }
    
    .brand p {
        font-size: 0.95rem;
        line-height: 1.6;
        color: #ccc;
    }
    
    .links a, .contact p {
        font-size: 0.95rem;
        color: var(--color-text-light);
        font-family: var(--font-main);
    }
    
    @media (max-width: 768px) {
        footer {
            padding-top: 3rem;
        }
        
        .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding-bottom: 2rem;
        }
        
        .brand-logo {
            justify-content: center;
        }
        
        .footer-logo-img {
            height: 40px;
        }
        
        .brand p {
            text-align: center;
            font-size: 0.9rem;
        }
        
        .links, .contact {
            text-align: center;
        }
        
        h4 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }
        
        .links ul {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .links a, .contact p {
            font-size: 0.9rem;
        }
        
        .bottom-bar {
            padding: 1.5rem 0;
            font-size: 0.85rem;
        }
    }
    
    @media (max-width: 480px) {
        footer {
            padding-top: 2.5rem;
        }
        
        .footer-logo-img {
            height: 35px;
        }
        
        h4 {
            font-size: 1rem;
        }
        
        .brand p, .links a, .contact p {
            font-size: 0.85rem;
        }
    }
</style>
