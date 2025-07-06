document.addEventListener("DOMContentLoaded", function () {
    const template = document.getElementById('template').innerHTML;
    document.getElementById('template').innerHTML = "";
    let data = { loaded: false };

    const render = () => {
        const html = Mustache.render(template, data);
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