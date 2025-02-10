document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    footer.style.background = "#04172B";
    footer.style.color = "#FFFFFF";
    footer.style.padding = "20px";
    footer.style.display = "flex";
    footer.style.justifyContent = "space-between";
    footer.style.alignItems = "flex-start";
    footer.style.flexWrap = "wrap";
    
    // Logo e información de contacto
    const contactDiv = document.createElement("div");
    contactDiv.innerHTML = `
        <img src="logo.png" alt="Logo" style="width: 150px; margin-bottom: 10px;">
        <p>Dirección: Calle 123, Ciudad</p>
        <p>Email: contacto@activosporcolombia.com</p>
        <p>Tel: +57 123 456 7890</p>
        <p>Cel: +57 987 654 3210</p>
        <div style="margin-top: 10px; display: flex; gap: 10px;">
            <a href="#" style="color: #FFFFFF;"><img src="facebook-icon.png" alt="Facebook" width="24"></a>
            <a href="#" style="color: #FFFFFF;"><img src="instagram-icon.png" alt="Instagram" width="24"></a>
            <a href="#" style="color: #FFFFFF;"><img src="x-icon.png" alt="Twitter/X" width="24"></a>
            <a href="#" style="color: #FFFFFF;"><img src="youtube-icon.png" alt="YouTube" width="24"></a>
        </div>
    `;
    
    // Secciones del pie de página
    const sections = {
        "Nuestra Empresa": ["Activos por Colombia", "Nuestros Servicios", "Nuestro Equipo", "Trabaja con Nosotros"],
        "Inmobiliaria": ["Ventas", "Arrendamientos", "Inversiones", "Consigna tu propiedad"],
        "Portales": ["SAE", "Propietarios", "Arrendamientos"],
        "Recursos": ["Blog", "Portafolio de Servicios", "Contrato de Corretaje", "Manuales y Procedimientos", "Formato de Arrendamiento"]
    };
    
    const linksDiv = document.createElement("div");
    linksDiv.style.display = "flex";
    linksDiv.style.gap = "40px";
    
    for (let section in sections) {
        const sectionDiv = document.createElement("div");
        sectionDiv.innerHTML = `<h4 style='margin-bottom: 10px;'>${section}</h4>`;
        const ul = document.createElement("ul");
        ul.style.listStyle = "none";
        ul.style.padding = "0";
        
        sections[section].forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="#" style='color: #FFFFFF; text-decoration: none;'>${item}</a>`;
            ul.appendChild(li);
        });
        
        sectionDiv.appendChild(ul);
        linksDiv.appendChild(sectionDiv);
    }
    
    footer.appendChild(contactDiv);
    footer.appendChild(linksDiv);
    document.body.appendChild(footer);
});
