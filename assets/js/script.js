const certifications = [

    {
        id: 1,

        title: "C Advanced",

        institution: "Cisco Networking Academy",

        category: "Programação",

        icon: "fa-solid fa-code",

        certificateUrl: "https://www.credly.com/badges/4e85b872-49a1-4e20-ae4e-e748efd046f0"
    },

    {
        id: 2,

        title: "C Essentials 2",

        institution: "Cisco Networking Academy",

        category: "Programação",

        icon: "fa-solid fa-code",

        certificateUrl: "https://www.credly.com/badges/18c52b8e-ec56-479c-aeaf-fa28fffa5a0e"
    },

    {
        id: 3,

        title: "C Essentials 1",

        institution: "Cisco Networking Academy",

        category: "Programação",

        icon: "fa-solid fa-code",

        certificateUrl: "https://www.credly.com/badges/4392a5ba-9b80-4cfe-9b19-79e1b7a82f76"
    },

    {
        id: 4,

        title: "Segurança de Endpoint",

        institution: "Cisco Networking Academy",

        category: "Cibersegurança",

        icon: "fa-solid fa-shield-halved",

        certificateUrl: "https://www.credly.com/badges/466cc845-7c6d-4407-b5fa-9f7374ae96b9"
    },

    {
        id: 5,

        title: "Computação em Nuvem AZ-900",

        institution: "Microsoft + Fundação FAT",

        category: "Cloud Computing",

        icon: "fa-solid fa-cloud",

        certificateUrl: "#"
    }

];


function renderCertifications() {

    const container =
        document.getElementById("certifications-container");

    if (!container) return;

    container.innerHTML = "";

    certifications.forEach(certification => {

        container.innerHTML += `

            <article class="certification-card">

                <div class="certification-icon">

                    <i class="${certification.icon}"></i>

                </div>

                <div class="certification-info">

                    <span class="certification-category">

                        ${certification.category}

                    </span>

                    <h3>

                        ${certification.title}

                    </h3>

                    <p>

                        ${certification.institution}

                    </p>

                </div>

                <a
                    href="${certification.certificateUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="certificate-button"
                >

                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                    Ver certificado

                </a>

            </article>

        `;

    });

}


document.addEventListener(
    "DOMContentLoaded",
    renderCertifications
);