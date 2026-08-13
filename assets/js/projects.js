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
    },

    {
        id: 3,

        title: "Controle de Gastos",

        category: "Mobile",

        status: "Concluído",

        featured: true,

        year: "2026",

        duration: "Em desenvolvimento",

        team: "Projeto Pessoal",

        role: "Mobile Developer",

        image: "assets/img/projects/cosmica.png",

        description:
            "Aplicativo mobile desenvolvido para gerenciamento de gastos pessoais, permitindo cadastrar, visualizar e excluir despesas, selecionar categorias e datas, além de acompanhar automaticamente o total de gastos.",

        technologies: [
            "React Native",
            "Expo",
            "JavaScript",
            "SQLite",
            "AsyncStorage",
            "React Native Calendars"
        ],

        features: [
            "Cadastro de Gastos",
            "Seleção de Categorias",
            "Calendário para Datas",
            "Listagem de Despesas",
            "Exclusão de Gastos",
            "Totalizador Automático"
        ],

        metrics: {
            modules: 3,
            technologies: 6,
            users: [
                "Usuário"
            ]
        },

        github: "https://github.com/Arthuranjo/sistema_controle_de_gastos",

        demo: "#",

        gallery: []

    },

    {
        id: 4,

        title: "Sistema Inteligente de Monitoramento de Máquinas",

        category: "IoT",

        status: "Concluído",

        featured: true,

        year: "2025",

        duration: "Projeto Acadêmico",

        team: "Projeto Acadêmico",

        role: "IoT Developer",

        image: "assets/img/projects/cosmica.png",

        description:
            "Sistema inteligente de monitoramento industrial desenvolvido com ESP32 para acompanhar temperatura e vibração de máquinas em tempo real. O projeto utiliza sensores, display OLED, alertas sonoros e comunicação MQTT integrada ao EMQX Cloud.",

        technologies: [
            "C++",
            "ESP32",
            "MPU6050",
            "OLED SSD1306",
            "MQTT",
            "EMQX Cloud",
            "PlatformIO",
            "Wokwi"
        ],

        features: [
            "Monitoramento de Temperatura",
            "Monitoramento de Vibração",
            "Alertas Sonoros",
            "Display OLED",
            "Comunicação MQTT",
            "Integração com EMQX Cloud",
            "Simulação no Wokwi"
        ],

        metrics: {
            modules: 3,
            technologies: 8,
            users: [
                "Operador"
            ]
        },

        github: "https://github.com/Arthuranjo/sistema--monitoramento",

        demo: "#",

        gallery: []

    },


];

/* ===========================
   Renderização dos Projetos
=========================== */

function renderProjects() {

    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    projects.forEach((project) => {

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

        <article class="project-card">

            <!-- =========================
                 IMAGEM
            ========================== -->

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


            <!-- =========================
                 INFORMAÇÕES
            ========================== -->

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


                <!-- DESCRIÇÃO VISÍVEL -->

                <p class="project-description">
                    ${project.description}
                </p>


                <!-- TECNOLOGIAS VISÍVEIS -->

                <div class="project-technologies">

                    ${technologies}

                </div>


                <!-- =========================
                     CONTEÚDO EXTRA
                ========================== -->

                <div class="project-extra">


                    <!-- FUNCIONALIDADES -->

                    <div class="project-section">

                        <h4>
                            Funcionalidades
                        </h4>

                        <div class="project-features">

                            ${features}

                        </div>

                    </div>


                    <!-- MÉTRICAS -->

                    <div class="project-section">

                        <h4>
                            Informações do projeto
                        </h4>

                        <div class="project-metrics">

                            <div class="metric">

                                <i class="fa-regular fa-calendar"></i>

                                <span>${project.year}</span>

                            </div>


                            <div class="metric">

                                <i class="fa-solid fa-clock"></i>

                                <span>${project.duration}</span>

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

                                <span>
                                    ${project.metrics.modules} módulos
                                </span>

                            </div>


                            <div class="metric">

                                <i class="fa-solid fa-code"></i>

                                <span>
                                    ${project.metrics.technologies} tecnologias
                                </span>

                            </div>


                            <div class="metric">

                                <i class="fa-solid fa-user-group"></i>

                                <span>${users}</span>

                            </div>

                        </div>

                    </div>


                    <!-- BOTÕES -->

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


                <!-- =========================
                     BOTÃO VER MAIS
                ========================== -->

                <button
                    class="project-toggle"
                    type="button">

                    <span>Ver mais</span>

                    <i class="fa-solid fa-chevron-down"></i>

                </button>

            </div>

        </article>

        `;

    });


    /* ===========================
       Botão Ver Mais / Ver Menos
    =========================== */

    document.querySelectorAll(".project-toggle").forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".project-card");

            const isExpanded = card.classList.toggle("expanded");

            const text = button.querySelector("span");

            if (isExpanded) {

                text.textContent = "Ver menos";

            } else {

                text.textContent = "Ver mais";

            }

        });

    });

}

document.addEventListener("DOMContentLoaded", renderProjects);