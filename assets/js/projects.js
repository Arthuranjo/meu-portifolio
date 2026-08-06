const projects = [
    {
        id: 1,

        title: "Charles Pizzaria",

        category: "Full Stack",

        status: "Concluído",

        featured: true,

        year: "2025",

        duration: "3 meses",

        team: "Projeto Acadêmico",

        role: "Full Stack Developer",

        image: "assets/img/projects/cosmica.png",

        description:
            "Sistema completo para gerenciamento de pedidos online, contendo autenticação de usuários, catálogo de pizzas, carrinho de compras, painel administrativo, histórico de pedidos e integração com banco de dados MySQL.",

        technologies: [
            "Python",
            "FastAPI",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Jinja2"
        ],

        features: [
            "Login e Cadastro",
            "Carrinho de Compras",
            "Painel Administrativo",
            "Controle de Pedidos",
            "Histórico de Compras",
            "Autenticação"
        ],

        metrics: {
            modules: 6,
            technologies: 7,
            users: [
                "Administrador",
                "Cliente"
            ]
        },

        github: "https://github.com/Arthuranjo",

        demo: "#",

        gallery: [
            "home.png",
            "login.png",
            "painel.png",
            "pedidos.png"
        ]
    },

    {
        id: 2,

        title: "Sistema de Gestão para Estúdio de Pilates",

        category: "Full Stack",

        status: "Em desenvolvimento",

        featured: true,

        year: "2026",

        duration: "4 meses",

        team: "Equipe de 4 Desenvolvedores",

        role: "Back-end Developer",

        image: "assets/img/projects/cosmica.png",

        description:
            "Sistema web completo desenvolvido para gerenciamento de um estúdio de Pilates com controle de alunos, professores, planos, pagamentos, agendamentos, aulas, autenticação JWT e dashboard administrativo.",

        technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "Alembic",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Jinja2",
            "JWT"
        ],

        features: [
            "Dashboard",
            "Gestão de Alunos",
            "Gestão de Professores",
            "Agendamentos",
            "Controle de Pagamentos",
            "Autenticação JWT"
        ],

        metrics: {
            modules: 8,
            technologies: 10,
            users: [
                "Administrador",
                "Professor",
                "Aluno"
            ]
        },

        github: "https://github.com/Arthuranjo/system_pilates",

        demo: "#",

        gallery: [
            "dashboard.png",
            "alunos.png",
            "agenda.png",
            "pagamentos.png"
        ]
    }
];

/* ===========================
   Renderização dos Projetos
=========================== */

function renderProjects() {

    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    projects.forEach((project, index) => {

        const reverse = index % 2 !== 0 ? "reverse" : "";

        const technologies = project.technologies
            .map(tech => `<span>${tech}</span>`)
            .join("");

        const features = project.features
            .map(feature => `
                <div class="feature">
                    <i class="fa-solid fa-circle-check"></i>
                    <span>${feature}</span>
                </div>
            `)
            .join("");

        const users = project.metrics.users.join(", ");

        container.innerHTML += `

        <article class="project-card ${reverse}">

            <div class="project-image">

                <div class="browser">

                    <div class="browser-header">

                        <span class="red"></span>
                        <span class="yellow"></span>
                        <span class="green"></span>

                    </div>

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >

                </div>

            </div>

            <div class="project-info">

                <div class="project-top">

                    <span class="project-category">
                        ${project.category}
                    </span>

                    <span class="project-status">
                        ${project.status}
                    </span>

                </div>

                <h3>
                    ${project.title}
                </h3>

                <p class="project-description">
                    ${project.description}
                </p>

                <div class="project-technologies">

                    ${technologies}

                </div>

                <div class="project-features">

                    ${features}

                </div>

                <div class="project-metrics">

                    <div class="metric">

                        <i class="fa-regular fa-calendar"></i>

                        <span>${project.year}</span>

                    </div>

                    <div class="metric">

                        <i class="fa-solid fa-user"></i>

                        <span>${project.role}</span>

                    </div>

                    <div class="metric">

                        <i class="fa-solid fa-users"></i>

                        <span>${project.team}</span>

                    </div>

                    <div class="metric">

                        <i class="fa-solid fa-layer-group"></i>

                        <span>${project.metrics.modules} módulos</span>

                    </div>

                    <div class="metric">

                        <i class="fa-solid fa-code"></i>

                        <span>${project.metrics.technologies} tecnologias</span>

                    </div>

                    <div class="metric">

                        <i class="fa-solid fa-user-group"></i>

                        <span>${users}</span>

                    </div>

                </div>

                <div class="project-buttons">

                    <a
                        href="${project.github}"
                        target="_blank"
                        class="btn">

                        <i class="fa-brands fa-github"></i>

                        GitHub

                    </a>

                    <a
                        href="${project.demo}"
                        target="_blank"
                        class="btn btn-primary">

                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        Demo

                    </a>

                </div>

            </div>

        </article>

        `;

    });

}

document.addEventListener("DOMContentLoaded", renderProjects);