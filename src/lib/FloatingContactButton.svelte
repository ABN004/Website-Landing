<script>
    let isOpen = $state(false);
    let name = $state('');
    let email = $state('');
    let phone = $state('');
    let selectedPackage = $state('');
    
    const packages = [
        'Guitar',
        'Violin',
        'Violin Western',
        'Drums',
        'Tabla',
        'Chenda',
        'Keys',
        'Western Vocal',
        'Veena',
        'Thavil',
        'Flute',
        'Carnatic Music',
        'Mridangam',
        'Bharathanatyam',
        'Mohiniyattam',
        'Western Dance (All Styles)',
        'Western Dance for Kids',
        'Cinematic Dance',
        'Semiclassical Dance',
        'Fusion Kathak',
        'Choreography Classes',
        'Zumba'
    ];
    
    function toggleForm() {
        isOpen = !isOpen;
    }
    
    function closeForm() {
        isOpen = false;
    }
    // Pause background scrolling when modal is open (works on mobile too)
    let scrollPosition = 0;

    $effect(() => {
        if (isOpen) {
            // Save current scroll position
            scrollPosition = window.scrollY || window.pageYOffset;
            // Prevent scrolling on mobile and desktop
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
            // Prevent touch scrolling on mobile
            document.body.style.touchAction = 'none';
        } else {
            // Restore scrolling
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.touchAction = '';
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
        }
    });
    
    function handleSubmit(e) {
        e.preventDefault();
        
        // Format message for WhatsApp
        const message = `*New Inquiry from GADD9 Website*\n\n` +
            `*Name:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*Phone:* ${phone}\n` +
            `*Package Selected:* ${selectedPackage || 'Not selected'}\n\n` +
            `Thank you for your interest in GADD9!`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // WhatsApp number
        // Format: country code + number without + or spaces
        const whatsappNumber = '919746338724'; // +91 9746338724
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        name = '';
        email = '';
        phone = '';
        selectedPackage = '';
        
        // Close form
        closeForm();
    }
</script>

<!-- Floating Button Wrapper -->
<div class="floating-btn-wrapper">
    <button class="floating-btn" onclick={toggleForm} aria-label="Contact Us">
        <div class="btn-content">
            <div class="logo-container">
                <img src="/without_bg_logo.png" alt="GADD9 Logo" class="btn-logo" />
            </div>
            <span class="btn-label">Chat</span>
        </div>
        <div class="pulse-ring"></div>
        <div class="pulse-ring-delay"></div>
    </button>
</div>

<!-- Modal Overlay -->
{#if isOpen}
    <div class="modal-overlay" onclick={closeForm}></div>
{/if}

<!-- Form Modal -->
<div class="modal" class:open={isOpen}>
    <div class="modal-content">
        <div class="modal-header">
            <h2>Get In Touch</h2>
            <button class="close-btn" onclick={closeForm} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        
        <form onsubmit={handleSubmit} class="contact-form-modal">
            <div class="form-group">
                <label for="name">Name *</label>
                <input 
                    type="text" 
                    id="name" 
                    bind:value={name}
                    placeholder="Your Name" 
                    required
                />
            </div>
            
            <div class="form-group">
                <label for="email">Email ID *</label>
                <input 
                    type="email" 
                    id="email" 
                    bind:value={email}
                    placeholder="your.email@example.com" 
                    required
                />
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input 
                    type="tel" 
                    id="phone" 
                    bind:value={phone}
                    placeholder="+91 XXXXXXXXXX"
                    required
                />
            </div>
            
            <div class="form-group">
                <label for="package">Select Package *</label>
                <select 
                    id="package" 
                    bind:value={selectedPackage}
                    required
                >
                    <option value="">Choose a package...</option>
                    {#each packages as pkg}
                        <option value={pkg}>{pkg}</option>
                    {/each}
                </select>
            </div>
            
            <button type="submit" class="submit-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px; margin-right: 8px;">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Send via WhatsApp
            </button>
        </form>
    </div>
</div>

<style>
    .floating-btn-wrapper {
        position: fixed;
        bottom: 30px; 
        right: 30px; /* Default desktop position on right */
        left: auto;
        z-index: 2147483647; 
        pointer-events: none;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
    }
    
    .floating-btn {
        position: relative;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--color-primary) 0%, #a01825 100%);
        color: white;
        border: 3px solid white;
        cursor: pointer;
        box-shadow: 0 8px 30px rgba(191, 29, 45, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Removed any entrance transition */
        padding: 0;
        pointer-events: all;
        overflow: visible;
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important; /* Ensure it starts in final position */
    }
    
    .floating-btn:hover {
        transform: scale(1.15) rotate(5deg);
        box-shadow: 0 12px 40px rgba(191, 29, 45, 0.5);
        border-color: rgba(255, 255, 255, 0.9);
    }
    
    .floating-btn:active {
        transform: scale(1.05) rotate(0deg);
    }
    
    .logo-container {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
    }
    
    .btn-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: brightness(0) invert(1);
        transition: transform 0.3s ease;
    }

    .btn-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        z-index: 10;
    }

    .btn-label {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        color: white;
        margin-top: -5px;
    }
    
    .floating-btn:hover .btn-logo {
        transform: scale(1.1);
    }
    
    .pulse-ring {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70px;
        height: 70px;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        border: 2px solid var(--color-primary);
        opacity: 0.6;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    .pulse-ring-delay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70px;
        height: 70px;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        border: 2px solid var(--color-primary);
        opacity: 0.4;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s;
    }
    
    @keyframes pulse {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.3;
        }
        100% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0;
        }
    }
    
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        backdrop-filter: blur(4px);
    }
    
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        opacity: 0;
        pointer-events: none;
        z-index: 1001;
        transition: all 0.3s ease;
        width: 90%;
        max-width: 500px;
    }
    
    .modal.open {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        pointer-events: all;
    }
    
    .modal-content {
        background: var(--color-tertiary); /* Dark modal */
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255,255,255,0.05);
        overflow: hidden;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
    }
    
    .modal-header {
        background: linear-gradient(135deg, var(--color-primary) 0%, #a01825 100%);
        color: white;
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        font-family: var(--font-main);
        font-weight: 600;
    }
    
    .close-btn {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        padding: 0;
    }
    
    .close-btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: rotate(90deg);
    }
    
    .close-btn svg {
        width: 20px;
        height: 20px;
    }
    
    .contact-form-modal {
        padding: 2rem;
        overflow-y: auto;
        flex: 1;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: var(--color-text-main);
        font-size: 0.95rem;
        font-family: var(--font-main);
    }
    
    .form-group input,
    .form-group select {
        width: 100%;
        padding: 12px 16px;
        background: #222; /* Dark input background */
        border: 2px solid #333;
        color: white;
        border-radius: 8px;
        font-family: var(--font-main);
        font-size: 1rem;
        transition: all 0.3s ease;
        box-sizing: border-box;
    }
    
    .form-group input:focus,
    .form-group select:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px rgba(191, 29, 45, 0.1);
    }
    
    .form-group select {
        cursor: pointer;
        background: #222;
    }
    
    .submit-btn {
        width: 100%;
        padding: 14px 24px;
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        font-family: var(--font-main);
        margin-top: 0.5rem;
    }
    
    .submit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    }
    
    .submit-btn:active {
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        .floating-btn-wrapper {
            bottom: 80px !important; 
            left: 0 !important; /* Move to left only on mobile */
            right: auto !important;
            padding-left: 10px;
            padding-right: 0;
        }
        
        .floating-btn {
            width: 64px;
            height: 64px;
        }
        
        .logo-container {
            width: 46px;
            height: 46px;
        }
        
        .pulse-ring,
        .pulse-ring-delay {
            width: 64px;
            height: 64px;
        }
        
        .modal {
            max-width: none;
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100vh;
            transform: none !important;
            padding: 10px;
            overflow: hidden;
        }
        
        .modal-header {
            padding: 1.25rem;
        }
        
        .modal-header h2 {
            font-size: 1.3rem;
        }
        
        .contact-form-modal {
            padding: 1.5rem;
        }
        
        .form-group {
            margin-bottom: 1.25rem;
        }
        
        .form-group input,
        .form-group select {
            padding: 10px 14px;
            font-size: 0.95rem;
        }
        
        .submit-btn {
            padding: 12px 20px;
            font-size: 0.95rem;
        }
    }
    
    @media (max-width: 480px) {
        .floating-btn-wrapper {
            bottom: 85px !important; 
            left: 0 !important; /* Move to left only on small phones */
            right: auto !important;
            padding-left: 5px;
            padding-right: 0;
        }
        
        .floating-btn {
            width: 60px;
            height: 60px;
        }
        
        .logo-container {
            width: 42px;
            height: 42px;
        }
        
        .pulse-ring,
        .pulse-ring-delay {
            width: 60px;
            height: 60px;
        }
        
        .modal-header h2 {
            font-size: 1.2rem;
        }
        
        .contact-form-modal {
            padding: 1.25rem;
        }
    }
</style>

