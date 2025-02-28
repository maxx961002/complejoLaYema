    document.addEventListener("DOMContentLoaded", function () {
        const menuBtn = document.getElementById("menu-btn");
        const closeBtn = document.getElementById("close-btn");
        const sidebar = document.getElementById("sidebar");

        if (menuBtn && closeBtn && sidebar) { 
            // Abrir el menú lateral
            menuBtn.addEventListener("click", function (event) {
                event.stopPropagation(); // Evita que el clic cierre el menú al abrirlo
                sidebar.classList.add("show");
            });

            // Cerrar el menú lateral
            closeBtn.addEventListener("click", function (event) {
                event.stopPropagation();
                sidebar.classList.remove("show");
            });

            // Cerrar el menú si se hace clic fuera de él
            document.addEventListener("click", function (event) {
                if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
                    sidebar.classList.remove("show");
                }
            });

            // Evitar que los clics dentro del sidebar lo cierren
            sidebar.addEventListener("click", function (event) {
                event.stopPropagation();
            });
        } else {
            console.error("❌ No se encontraron los elementos del menú.");
        }
    });
