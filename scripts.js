// JavaScript for Link Click Tracking
document.getElementById("trackLink")?.addEventListener("click", function(e) {
    e.preventDefault();  // Prevents the link from redirecting immediately

    // Simulate tracking link click (this could be sending data to Google Analytics, etc.)
    alert("Link clicked! Tracking this event.");

    // Now actually navigate to the link after tracking
    window.location.href = this.href;
});

// Simulate GA4 Purchase Tracking
document.getElementById("purchase-btn")?.addEventListener("click", function() {
    // Simulate GA4 event for purchase tracking (this would normally be done via GA4's gtag.js API)
    alert("Simulating a purchase event! GA4 purchase tracking fired.");
});

// User Scoped Custom Dimensions
document.getElementById("set-dimension-btn")?.addEventListener("click", function() {
    const customDimension = document.getElementById("user-dim").value;

    if(customDimension) {
        // Simulate setting a user scoped custom dimension (this would normally be done via GA4 or similar)
        alert(`Custom Dimension Set: ${customDimension}`);

        // Example of sending custom dimension data
        // gtag('set', { 'user_dimension': customDimension });

        document.getElementById("custom-dim-status").textContent = `Custom Dimension: ${customDimension}`;
    } else {
        alert("Please enter a custom dimension.");
    }
});

// JavaScript for handling search input

document.getElementById("search-btn")?.addEventListener("click", function() {
    const query = document.getElementById("search").value;
    
    if(query.trim() === "") {
        alert("Please enter a search term.");
    } else {
        console.log("Search Query:", query);
        alert(`You searched for: ${query}`); // Optional: to alert the user
    }
});

// Alternatively, you can trigger the search on "Enter" key press:
document.getElementById("search")?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const query = document.getElementById("search").value;
        if (query.trim() === "") {
            alert("Please enter a search term.");
        } else {
            console.log("Search Query:", query);
            alert(`You searched for: ${query}`); // Optional: to alert the user
        }
    }
});

