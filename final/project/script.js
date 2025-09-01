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


// --------------------------- Handle bars Validation--------------------------- 
function validateJson(json, isIndex) {
    var errors = [];

    if (!json || typeof json !== "object") {
        errors.push("Root must be an object.");
        return { ok: false, errors: errors };
    }

    if (isIndex) {
        if (!Array.isArray(json.phrases) || json.phrases.length === 0) {
            errors.push("'phrases' must be a non-empty array of strings.");
        }
    } else {
        if (!Array.isArray(json.sections) || json.sections.length === 0) {
            errors.push("'sections' must be a non-empty array.");
        }
    }

    return { ok: errors.length === 0, errors: errors };
}



// --------------------------- Handle bars ---------------------------  
/*
In the browser, there're always two global objects: window (the tab) and document (DOM document object model, thus the "tree" with all HTML elements). Firstly, we select the DOCUMENT, then the add event listener waits until the HTML is saved  in the RAM memory, then waits some event (could be user event such as a click, tpye, scroll;  or browser event such as load, error, content loaded.) to happen.
*/
//Structure: element.AddeventListener(eventType, CallbackFunction, options)
// Event type could be: "click", "mouseover", "keydown", etc.
// The DOMContentLoaded runs only when the initial HTML is already built in a tree.
document.addEventListener("DOMContentLoaded", function() {

    // The get element by id searches in the HTML where the id "template" is. IT'S THE RAW OF WHAT IS WRITTEN IN THE HTML(example: <section)... classs.. <div>...)
    const source = document.getElementById("handle-template").innerHTML;
    
    // Variable that becomes a function to render the data (non-js native)
    const template = Handlebars.compile(source);

    // "Cleans" the elements inside the script (in thi case, handle-template). It cleans everything, therefore nothing is returned.
    // This is done because there's no reason to leave it stored in DOM. It avoids polution in the brownser (when inspected).
    document.getElementById("handle-template").innerHTML = "";
    
    // Configuring the variable data to start with false.
    let data = { loaded: false }; //mudei

    // Creates an arrow function
    const render = () => {

        // Uses the variable html to store the data created from the template function in data.
        const html = template(data);

        // We'll put the data inside the content id, which is the id from MAIN (in HTML)
        document.getElementById("content").innerHTML = html;
    }

    // Perform HTTP calls. Is returns a PROMISE (object that will happen).
    // We could get that from a website for example.
    // USED STRING MANIPULATION TO SELECT THE PROPER JSON IN DATA!
    // fetch is assyncronous
    
    // --- Robust path → JSON filename (no fragile splits) ---
    const path = window.location.pathname;
    const last = path.substring(path.lastIndexOf("/") + 1);
    const filename = last ? (last.indexOf(".") > -1 ? last.split(".")[0] : last) : "index";
    const currentFile = "data/" + filename + ".json";


    fetch(currentFile)

        // Response is the object that came from the server. It transforms it into a json. It's a must because it will receive a pure string (even if it's alrady a json).
        // "=>" is an arrow function. "Get the value the arrives in response and return response.json"
        /*
        Same as :
            .then(function(response) {
            return response.json();
            })
        */
        .then(response => response.json())

        // Creates a function to put loaded as true, and then to get the sections.
        .then(jsondata => {
            
            // Values from fetch
            const isIndex = currentFile === "data/index.json";

            // ----------------- ADDED VALIDATION -----------------
            const v = validateJson(jsondata, isIndex);
            if (!v.ok) {
                document.getElementById("content").innerHTML = "<pre>" + v.errors.join("\n") + "</pre>";
                return; // stop if invalid
            }
            // ----------------------------------------------------

            data = {
                loaded: true,
                [currentFile == "data/index.json" ? "phrases" : "sections"]: currentFile === "data/index.json" ? jsondata.phrases : jsondata.sections
            };

            // Renders the json
            render();

            // Calling anchors.
            main_anchors();
        });
})
// -----------------------------------------------------------------------

