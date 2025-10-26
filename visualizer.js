// Package data
const packages = {
    basic: {
        name: "Basic Package",
        price: "$300",
        description: "Perfect for narrow porches - incredible cornucopia fall display!",
        includes: [
            "4 Large Jack O Lanterns",
            "4 Medium Jack O Lanterns",
            "4 White Ghost Pumpkins",
            "15 Pie Pumpkins (Assortment)",
            "6 Specialty Pumpkins",
            "Optional: Add design service for $75",
            "Optional: Add removal & cleanup for $200"
        ],
        action: "addToCart",
        buttonText: "Add to Cart"
    },
    amazing: {
        name: "Amazing Package",
        price: "$500",
        description: "MORE pumpkins, MORE gourds, and two HAY BALES for a bountiful look!",
        includes: [
            "6 Large Jack O Lanterns",
            "6 Medium Jack O Lanterns",
            "6 White Ghost Pumpkins",
            "25 Pie Pumpkins",
            "8 Specialty Pumpkins",
            "2 Full-Size Hay Bales",
            "Expert design team creates your display",
            "Delivery and install included",
            "Optional: Add removal & cleanup for $200"
        ],
        action: "addToCart",
        buttonText: "Add to Cart"
    },
    wow: {
        name: "WOW!! Package",
        price: "$2,500",
        description: "Over-the-top display from your curb to your door!",
        includes: [
            "2 HUGE Grand Prize Pumpkins (50+ lbs!)",
            "10 Large Jack O Lanterns",
            "8 Medium Jack O Lanterns",
            "8 White Ghost Pumpkins",
            "40 Pie Pumpkins",
            "20 Specialty Pumpkins",
            "4 Full-Size Hay Bales",
            "Expert design team creates show-stopper",
            "FREE delivery & install",
            "WHITE GLOVE SERVICE: Free removal, weekly inspections & replacements!"
        ],
        action: "addToCart",
        buttonText: "Add to Cart"
    },
    custom: {
        name: "Custom Package",
        price: "$2,500+",
        description: "Create your ultimate display with Grand Prize Pumpkins up to 100 lbs!",
        includes: [
            "Huge Grand Prize Pumpkins (up to 100 lbs!)",
            "Custom selection of Large Jack O Lanterns",
            "Custom selection of Medium Jack O Lanterns",
            "White Ghost Pumpkins as desired",
            "Pie Pumpkins - your quantity",
            "Specialty Pumpkins - your selection",
            "Full-Size Hay Bales as needed",
            "Completely customized to your vision",
            "Call us to create your dream display!"
        ],
        action: "scheduleConsultation",
        buttonText: "Schedule Consultation"
    }
};

// Global variables
let uploadedImage = null;
let userEmail = null;

// Drag and drop handlers
const uploadArea = document.getElementById('uploadArea');

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleImageUpload(file);
    } else {
        alert('Please upload an image file');
    }
});

uploadArea.addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

// File select handler
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        handleImageUpload(file);
    }
}

// Handle image upload
function handleImageUpload(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        uploadedImage = e.target.result;
        
        // Show preview
        const previewImage = document.getElementById('previewImage');
        previewImage.src = uploadedImage;
        
        document.getElementById('previewSection').style.display = 'block';
        document.getElementById('emailCapture').style.display = 'block';
        
        // Scroll to email capture
        document.getElementById('emailCapture').scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    
    reader.readAsDataURL(file);
}

// Reset upload
function resetUpload() {
    uploadedImage = null;
    document.getElementById('fileInput').value = '';
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('emailCapture').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
}

// Generate visualizations
async function generateVisualizations() {
    const emailInput = document.getElementById('emailInput');
    userEmail = emailInput.value.trim();
    
    if (!userEmail || !userEmail.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (!uploadedImage) {
        alert('Please upload a photo first');
        return;
    }
    
    // Show loading
    document.getElementById('emailCapture').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'block';
    
    // Simulate AI processing (2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate results
    displayResults();
    
    // Send email (in production, this would call your backend)
    sendResultsEmail();
    
    // Hide loading, show results
    document.getElementById('loadingSpinner').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'block';
    
    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}

// Display results
function displayResults() {
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';
    
    Object.keys(packages).forEach((packageKey, index) => {
        const pkg = packages[packageKey];
        
        // Create result card
        const card = document.createElement('div');
        card.className = 'result-card';
        
        // For demo, we'll use placeholder images
        // In production with real AI, these would be the generated images
        const visualizationImage = generateVisualizationPlaceholder(packageKey);
        
        card.innerHTML = `
            <div style="position: relative;">
                <img src="${visualizationImage}" alt="${pkg.name}" class="result-image" onerror="this.src='https://via.placeholder.com/600x400/FF6B35/FFFFFF?text=${pkg.name.replace(' ', '+')}'">
                <div style="position: absolute; top: 10px; left: 10px; background: rgba(255, 107, 53, 0.95); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 700; font-size: 0.9rem;">
                    ${pkg.name}
                </div>
                <div style="position: absolute; bottom: 10px; right: 10px; background: rgba(0, 0, 0, 0.7); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.85rem;">
                    AI Preview
                </div>
            </div>
            <div class="result-content">
                <h3>${pkg.name}</h3>
                <div class="price-tag">${pkg.price}</div>
                <p style="color: var(--gray); margin-bottom: 1rem;">${pkg.description}</p>
                
                <div class="package-includes">
                    <h4>INCLUDES:</h4>
                    <ul>
                        ${pkg.includes.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                ${pkg.action === 'scheduleConsultation' ? `
                    <div class="custom-package-notice">
                        <strong>📞 Phone Consultation Required</strong>
                        <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem;">Let's discuss your vision and create something amazing together!</p>
                    </div>
                    <div class="phone-input-section" id="phoneSection-${packageKey}">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Phone Number:</label>
                        <input type="tel" id="phone-${packageKey}" placeholder="(555) 555-5555" style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; margin-bottom: 1rem;">
                    </div>
                ` : ''}
                
                <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="handlePackageAction('${packageKey}')">${pkg.buttonText}</button>
            </div>
        `;
        
        resultsGrid.appendChild(card);
    });
}

// Generate placeholder visualization (temporary until real AI integration)
function generateVisualizationPlaceholder(packageKey) {
    // Using the user's uploaded image with an overlay indicator
    // In production, this will be replaced with actual AI-generated images
    
    if (uploadedImage) {
        // Return the user's image for now - we'll add overlay in the display
        return uploadedImage;
    }
    
    // Fallback placeholders using reliable CDN
    const placeholders = {
        basic: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/pumpkins-2802130_960_720.jpg',
        amazing: 'https://cdn.pixabay.com/photo/2016/09/29/13/08/pumpkins-1702881_960_720.jpg',
        wow: 'https://cdn.pixabay.com/photo/2017/10/05/21/08/pumpkin-2822763_960_720.jpg',
        custom: 'https://cdn.pixabay.com/photo/2016/10/31/18/14/halloween-1786329_960_720.jpg'
    };
    
    return placeholders[packageKey];
}

// Handle package action
function handlePackageAction(packageKey) {
    const pkg = packages[packageKey];
    
    if (pkg.action === 'addToCart') {
        addToCart(packageKey);
    } else if (pkg.action === 'scheduleConsultation') {
        scheduleConsultation(packageKey);
    }
}

// Add to cart
function addToCart(packageKey) {
    const pkg = packages[packageKey];
    
    // Store in localStorage (in production, this would integrate with your cart system)
    const cartItem = {
        package: packageKey,
        name: pkg.name,
        price: pkg.price,
        email: userEmail,
        porchImage: uploadedImage,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('porchDecorCart', JSON.stringify(cartItem));
    
    // Show confirmation
    alert(`✓ ${pkg.name} added to cart!\n\nWe'll contact you at ${userEmail} to finalize details and schedule delivery.`);
    
    // In production, redirect to checkout
    console.log('Cart item:', cartItem);
}

// Schedule consultation
function scheduleConsultation(packageKey) {
    const phoneInput = document.getElementById(`phone-${packageKey}`);
    const phoneSection = document.getElementById(`phoneSection-${packageKey}`);
    
    // Show phone input if not already shown
    if (phoneSection.style.display === 'none' || !phoneSection.style.display) {
        phoneSection.style.display = 'block';
        phoneInput.focus();
        return;
    }
    
    const phone = phoneInput.value.trim();
    
    if (!phone) {
        alert('Please enter your phone number so we can schedule your consultation');
        phoneInput.focus();
        return;
    }
    
    // Store consultation request
    const consultationRequest = {
        package: packageKey,
        email: userEmail,
        phone: phone,
        porchImage: uploadedImage,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('porchDecorConsultation', JSON.stringify(consultationRequest));
    
    // In production, this would redirect to your booking calendar
    alert(`✓ Thanks! We'll call you at ${phone} within 24 hours to schedule your consultation.\n\nCheck ${userEmail} for a confirmation email with next steps.`);
    
    console.log('Consultation request:', consultationRequest);
    
    // Simulate redirect to calendar booking
    // window.location.href = 'https://calendly.com/porchdecor/consultation';
}

// Send results email (simulated - in production, this calls your backend)
function sendResultsEmail() {
    const emailData = {
        to: userEmail,
        subject: 'Your Personalized Porch Visualizations from PorchDecor',
        visualizations: Object.keys(packages).map(key => ({
            package: packages[key].name,
            price: packages[key].price,
            image: generateVisualizationPlaceholder(key)
        })),
        originalImage: uploadedImage
    };
    
    // In production, this would POST to your backend API
    console.log('Email would be sent:', emailData);
    
    // Backend would then:
    // 1. Store the images in your CDN/storage
    // 2. Send email via SendGrid/Mailgun/AWS SES
    // 3. Add to retargeting campaign
    // 4. Track in CRM
}

// Console message
console.log('%c🎃 PorchDecor Visualizer Ready!', 'font-size: 20px; font-weight: bold; color: #FF6B35;');
console.log('%cUpload a porch photo to see the magic happen!', 'font-size: 14px; color: #6b7280;');
