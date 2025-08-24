// THIS SCRIPT WILL RUNS WHEN THE BROWSER FINDS THE SCRIPT TAG IN THE HTML.


// --------------------------- Handle bars ---------------------------  
/*
In the browser, there're always two global objects: window (the tab) and document (DOM document object model, thus the "tree" with all HTML elements). Firstly, we select the DOCUMENT, then the add event listener waits until the HTML is saved  in the RAM memory, then waits some event (could be user event such as a click, tpye, scroll;  or browser event such as load, error, content loaded.) to happen.
*/
//Structure: element.AddeventListener(eventType, CallbackFunction, options)
// Event type could be: "click", "mouseover", "keydown", etc.
document.addEventListener("DOMContentLoaded", function() {

    // The get element by id searches in the HTML where the id "template" is. IT'S THE RAW OF WHAT IS WRITTEN IN THE HTML(example: <section)... classs.. <div>...)
    const source = document.getElementById("section-template").innerHTML;
    
    // Variable that becomes a function to render the data (non-js native)
    const template = Handlebars.compile(source);

    // "Cleans" the elements inside the script (in thi case, section-template). It cleans everything, therefore nothing is returned.
    // This is done because there's no reason to leave it stored in DOM. It avoids polution in the brownser (when inspected).
    document.getElementById("section-template").innerHTML = "";
    
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
            data = {
                loaded: true,
                sections: jsondata.sections
            };
            render();
        });
    render();
})
// --------------------------- Handle bars ---------------------------  



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
// --------------------------- Colorblind --------------------------- 
