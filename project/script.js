document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("colorblind-toggle");

    // quando carregar a página, verifica se está ligado
    if (localStorage.getItem("colorblind") === "on") {
        document.body.classList.add("colorblind-mode");
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("colorblind-mode");

        // salva o estado no localStorage
        if (document.body.classList.contains("colorblind-mode")) {
            localStorage.setItem("colorblind", "on");
        } else {
            localStorage.setItem("colorblind", "off");
        }
    });
});

