function loadAndRender() {
  var fileName = window.location.pathname.split("/").pop();
  var pageKey = fileName.replace(".html", "");

  fetch("data.json")
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.json();
    })
    .then(function (data) {
      var pageData = data.pages.find(p => p.page === pageKey);

      if (!pageData) {
        document.querySelector("main").innerHTML = "<p>Page not found.</p>";
        return;
      }

      var source = document.getElementById("section-template").innerHTML;
      var template = Handlebars.compile(source);

      var html = template(pageData);

      document.querySelector("main").innerHTML = html;
    })
    .catch(function (err) {
      console.error(err);
      document.querySelector("main").innerHTML = "<p>Failed to load content.</p>";
    });
}

document.addEventListener("DOMContentLoaded", loadAndRender);
