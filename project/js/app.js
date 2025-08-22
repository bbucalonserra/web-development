function loadAndRender() {
  fetch("data.json")
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.json();
    })
    .then(function (data) {
      // Compile Handlebars template
      var source = document.getElementById("section-template").innerHTML;
      var template = Handlebars.compile(source); // Handlebars vem do handlebars.js

      // Como o JSON tem "pages", pegamos a primeira página
      var html = template(data.pages[0]);

      // Inserir dentro de <main>
      document.querySelector("main").innerHTML = html;
    })
    .catch(function (err) {
      console.error(err);
      document.querySelector("main").innerHTML = "<p>Failed to load content.</p>";
    });
}

document.addEventListener("DOMContentLoaded", loadAndRender);