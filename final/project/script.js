// THE SCRIPT WILL RUNS WHEN THE BROWSER FINDS THE SCRIPT TAG IN THE HTML. HOWEVER WE ADDED A DEFER, THEREFORE IT WILL RUN AFTER THE HTML IS ALREADY LOADED (AFTER HANDDLEBAR). 

// --------------------------- Change slider color --------------------------- 
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
// --------------------------------------------------------------------------

// --------------------------- Changeing colors using hover in circles. ---------------------------  

function hoverCards() {
    // Create a variable to store all the ids from circles. Return a HTML collection length 4. Because the class has 4 anchors (<a>).
    let hover_total = document.getElementsByClassName("circle");

    // Loop for all the items inside variable circles, avoiding create a single code structure for each circle.
    for (let i = 0; i < hover_total.length; i++) {

        // First, we store the element_id in the variable circle (example, loop 1, let circle = circle_1)
        // NOTE: document is the HTM itself.
        let circle = document.getElementById("circle_" + (i + 1));

        // Now, we add an event listner for mouseover, hence when the user mouse over the tag with id = circle_1 (1,2,3,4), change background color and font color. 
        circle.addEventListener("mouseover", function() {
            circle.style.backgroundColor = "#3c9242";
            circle.style.color = "white";
        });

        // Finally,  we add an event listner for mouse out, hence when the user mouse out the tag with id = circle_1 (1,2,3,4), change back again.
        // We'll use remove to remove attribute.
        circle.addEventListener("mouseout", function() {
            circle.removeAttribute("style");
        });
    }
}

// --------------------------- Tracking events using JavaScript ---------------------------
// ----- Track clicks from slider banner 
function eventSliderBannerClicked () {

    let dot_total = document.getElementsByClassName("slider-dot");
    // console.log(dot_total)

    for (let i = 0; i < dot_total.length; i++) {

        let hover = document.getElementById("dot-" + i);
        // console.log(hover)
        hover.addEventListener("click", function () {
            console.log("Event Slider Bannder Clicked: slider number " + i);
        })  
    }
}

// ----- Track interactions with hover from circles
function eventHoverInOut () {

    let hover_total = document.getElementsByClassName("circle")
    console.log(hover_total.length)

    for (let i = 0; i < hover_total.length; i++) {

        let hover = document.getElementById("circle_" + (i + 1));
        // console.log(hover)
        hover.addEventListener("mouseover", function () {
            console.log("Event Hover in Card: card number " + i);
        })  
    }
}
