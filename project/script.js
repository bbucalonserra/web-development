// THIS SCRIPT WILL RUNS WHEN THE BROWSER FINDS THE SCRIPT TAG IN THE HTML.

// --------------------------- Change slider color --------------------------- 
const main_anchors = function () {
    // Creating links variable(for each acnhor inside main)
    let links = document.querySelectorAll("main a");

    // The forEach function (native js) expects a callback function. forEach(function(item, index, array)). Link here inside the function is a single anchor.
    // Runs the quantity of anchors we have in main a.
    links.forEach(function(anchor) {

        // addEventListener = element.addEventListener(type, listener, options). type = click, mouseover; listener = anonynmous function; options = boolean.
        // For each anchor insde the links (main a), it receives a listener for clicks.
        // The annonymous function must have what is the event.
        anchor.addEventListener("click", function() {
            // For each of the anchors, we'll remove the class active.
            links.forEach(function(eachAnchor) {

                // The classList could be: remove, add, hidden. Manipulates the class of DOM. Here we'll remove the active.
                eachAnchor.classList.remove("active");
            });

            // We'll add the active. By using this, we'll set as active when clicked.
            this.classList.add("active")
        });
    });



    console.log(links);
}
// ------------------------------------------------------ 

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
    let data = { loaded: true };

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
    fetch("data/" + window.location.pathname.split("/")[2].split(".")[0] + ".json")
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
            const currentFile = "data/" + window.location.pathname.split("/")[2].split(".")[0] + ".json";

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
// ------------------------------------------------------  


// --------------------------- Colorblind --------------------------- 
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("colorblind-toggle");

    if (localStorage.getItem("colorblind") === "on") {
        document.body.classList.add("colorblind-mode");
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("colorblind-mode");

        if (document.body.classList.contains("colorblind-mode")) {
            localStorage.setItem("colorblind", "on");
        } else {
            localStorage.setItem("colorblind", "off");
        }
    });
});
// ------------------------------------------------------ 

