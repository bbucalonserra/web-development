// THE SCRIPT WILL RUN WHEN THE BROWSER FINDS THE SCRIPT TAG IN THE HTML. 
// HOWEVER WE ADDED A DEFER, THEREFORE IT WILL RUN AFTER THE HTML IS ALREADY LOADED (AFTER HANDLEBARS). 

// ------------------------------- Change slider color --------------------------------
function main_anchors() {
    // Selects all slider dots inside <main>
    document.querySelectorAll("main .slider-dot").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            // Prevents vertical scroll (it was scrolling vertically due to the href.)
            event.preventDefault();

            // Removes "active" from all dots
            document.querySelectorAll("main .slider-dot").forEach(a => a.classList.remove("active"));

            // Adds "active" to the clicked dot
            this.classList.add("active");

            // Scrolls horizontally to the corresponding slide
            const target = document.getElementById(this.getAttribute("href").slice(1));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }
        });
    });
}
// ------------------------------------------------------------------------------------


// ------------------------- Changing colors using hover in circles -------------------
function hoverCards() {
    // Create a variable to store all the ids from circles. Return a HTML collection length 4.
    let hover_total = document.getElementsByClassName("circle");

    // Loop for all the items inside variable circles, avoiding create a single code structure for each circle.
    for (let i = 0; i < hover_total.length; i++) {

        // First, we store the element_id in the variable circle (example: circle_1, circle_2, etc.)
        let circle = document.getElementById("circle_" + (i + 1));

        // Now, we add an event listener for mouseover
        circle.addEventListener("mouseover", function() {
            circle.style.backgroundColor = "#3c9242";
            circle.style.color = "white";
        });

        // Event listener for mouseout
        circle.addEventListener("mouseout", function() {
            circle.removeAttribute("style");
        });
    }
}
// ------------------------------------------------------------------------------------


// ----------------------------- Back to the top button -------------------------------
function backToTheTop () {
    let top = document.getElementById("button-back-to-the-top");

    // Window considers the full screen.
    top.addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: "smooth" });
    })
};
// ------------------------------------------------------------------------------------


// -------------------------- Tracking events using JavaScript ------------------------
 
// ------------------------------- Homepage: slider clicks ----------------------------
function eventSliderBannerClicked () {
    let dot_total = document.getElementsByClassName("slider-dot");

    for (let i = 0; i < dot_total.length; i++) {
        let hover = document.getElementById("dot-" + i);
        hover.addEventListener("click", function () {
            console.log("Event Slider Banner Clicked: slider number " + i);
        })  
    }
}
// ------------------------------------------------------------------------------------


// ----------------------- Homepage: interactions with circles ------------------------
function eventHoverInOut () {
    let hover_total = document.getElementsByClassName("circle")

    for (let i = 0; i < hover_total.length; i++) {
        let hover = document.getElementById("circle_" + (i + 1));
        hover.addEventListener("mouseover", function () {
            console.log("Event Hover in Card: card number " + i);
        })  
    }
}
// ------------------------------------------------------------------------------------


// --------------------- Homepage: back to the top button click -----------------------
function EventBackToTheTop () {
    let top = document.getElementById("button-back-to-the-top");

    top.addEventListener("click", function() {
        console.log("Event Back to the Top Button Clicked")
    })
};
// ------------------------------------------------------------------------------------


// ------------------------------- Homepage: track scroll -----------------------------
function EventScroll () {
    window.addEventListener("scroll", function() {
        // window.innerHeight = visible screen of the browser.
        // window.scrollY = how much the user scrolled down.
        // Hence, window.innerHeight + window.scrollY = how much users saw the page.
        // document.documentElement.scrollHeight = total page content
    
        let page_size = document.documentElement.scrollHeight;

        if (window.innerHeight + window.scrollY >= page_size) {
            console.log("Event Scroll Until End of Page (page size = " + page_size + "px)");
        }
    })
}
// ------------------------------------------------------------------------------------
