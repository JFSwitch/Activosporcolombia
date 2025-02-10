document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    contactInfo.innerHTML = `
        <img src="https://github.com/JFSwitch/Activosporcolombia/blob/main/Logo_Horizontal%20(contorno%20blanco).png?raw=true" alt="Logo de Activos por Colombia" width="250" loading="lazy">
        <p>Dirección: CRA 53 64-98 LOCAL 1 Barranquilla</p>
        <p>Email: <a href="mailto:comercial@activosporcolombia.com">comercial@activosporcolombia.com</a></p>
        <p>Teléfono: <a href="#">60(5) 3468973</a></p>
        <p>Celular: <a href="tel:+573142882219">+57 (314)2882219</a></p>
        <div class="social-icons">
            <a style=" color:#FFF" href="https://www.facebook.com/activosporcolombia" target="_blank"><img src="https://img.icons8.com/?size=100&id=87311&format=png&color=FFFFFF" alt="Facebook"></a>
            <a href="https://www.instagram.com/activosporcolombia" target="_blank"><img src="https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF" alt="Instagram"></a>
            <a href="https://x.com/activosporCOL" target="_blank"><img src="https://img.icons8.com/?size=100&id=de4vjQ6J061l&format=png&color=FFFFFF" alt="X"></a>
            <a href="https://www.youtube.com/@activosporcolombia" target="_blank"><img src="https://img.icons8.com/?size=100&id=85162&format=png&color=FFFFFF" alt="YouTube"></a>
        </div>
    `;

    function createFooterSection(title, links) {
        const section = document.createElement("div");
        section.classList.add("footer-section");

        const sectionTitle = document.createElement("h4");
        sectionTitle.textContent = title;

        const list = document.createElement("ul");
        links.forEach(link => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${link.url}" target="_blank">${link.text}</a>`;
            list.appendChild(listItem);
        });

        section.appendChild(sectionTitle);
        section.appendChild(list);
        return section;
    }

    const empresaSection = createFooterSection("Nuestra Empresa", [
        { text: "Activos por Colombia", url: "https://activosporcolombia.com/main-contenido-cat-2.htm" },
        { text: "Nuestros Servicios", url: "https://activosporcolombia.com/main-servicios.htm" },
        { text: "Nuestro Equipo", url: "https://activosporcolombia.com/main-contenido-id-559961-t-nuestro_equipo.htm" },
        { text: "Trabaja con Nosotros", url: "#"}
    ]);

    const inmobiliariaSection = createFooterSection("Inmobiliaria", [
        { text: "Ventas", url: "https://activosporcolombia.com/s/ventas" },
        { text: "Arrendamientos", url: "https://activosporcolombia.com/s/ventas" },
        { text: "Inversiones", url: "#" },
        { text: "Consigna tu propiedad", url: "#" }
    ]);

    const portalesSection = createFooterSection("Portales", [
        { text: "SAE", url: "https://www.saesas.gov.co/" },
        { text: "Propietarios", url: "#" },
        { text: "Arrendamientos", url: "#" }
    ]);

    const recursosSection = createFooterSection("Recursos", [
        { text: "Blog", url: "https://activosporcolombia.com/blog" },
        { text: "Portafolio de Servicios", url: "https://activosporcolombia.com/main-servicios.htm" },
        { text: "Contrato de Corretaje", url: "#" },
        { text: "Manuales y Procedimientos", url: "#" },
        { text: "Formato de Arrendamiento", url: "#" }
    ]);

    const footerBottom = document.createElement("div");
    footerBottom.classList.add("footer-bottom");
    footerBottom.innerHTML = `
        <p>©2025 activosporcolombia.com, todos los derechos reservados.</p>
        <p>Powered by: <a href="https://wasi.co" target="_blank">wasi.co</a></p>
    `;

    footer.appendChild(contactInfo);
    footer.appendChild(empresaSection);
    footer.appendChild(inmobiliariaSection);
    footer.appendChild(portalesSection);
    footer.appendChild(recursosSection);
    footer.appendChild(footerBottom);

    document.body.appendChild(footer);
});