document.addEventListener("DOMContentLoaded", function() {
    let data = { loaded: false };
    let template = "";
        
    const render = () => {
        if (template != "" ){// only if we have a template
            const html = ejs.render(template, data);
            document.getElementById('content').innerHTML = html;
        }
    };

    // get the template 
    fetch("./template.ejs")
    .then(response => response.text())
    .then(html_text => {
        template = html_text;
        console.log("Got template " + template)
    })


    fetch("http://localhost:3000/api/books")
        .then(response => response.json())
        .then(jsonData => {
            data = {
                title: "Book List",
                loaded: true,
                books: jsonData
            };
            // console.log("Calling render")
            render();
        });

    render();
});