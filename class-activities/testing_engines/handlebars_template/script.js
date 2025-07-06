document.addEventListener("DOMContentLoaded", function () {
    // read the template code
    const source = document.getElementById('template').innerHTML;
    // convert it into a template
    const template = Handlebars.compile(source);
    // now remove it from the DOM
    document.getElementById('template').innerHTML = ""
    let data = { loaded: false };

    const render = () => {
        const html = template(data);
        document.getElementById('content').innerHTML = html;
    };

    fetch("http://localhost:3000/api/books")
        .then(response => response.json())
        .then(jsonData => {
            data = {
                title: "Book List",
                loaded: true,
                books: jsonData
            };
            render();
        });

    render();
});