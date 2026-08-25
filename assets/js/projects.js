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

        image: "assets/img/projects/charles/tela-incial-charles.png",

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

        github: "https://github.com/ajudantedemagico/charlespizzascongeladas",

        demo: "https://arthuranjo.github.io/CharlesPizzaria-Demo/",

        gallery: [

            {
                type:"image",
                src:"assets/img/projects/charles/tela-incial-charles.png"
            },

            {
                type:"image",
                src:"assets/img/projects/charles/login-charles.png"
            },

            {
                type: "video",
                src: "assets/video/charles-home.mp4",
            },

            {
                type:"video",
                src:"assets/video/charles-carrinho.mp4"
            },

            {
                type:"video",
                src:"assets/video/charles-pedido.mp4"
            },

            {
                type:"video",
                src:"assets/video/charles-cadastro.mp4"
            },

            {
                type:"video",
                src:"assets/video/charles-admin.mp4"
            },
        ],
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

        image: "assets/img/projects/pilates/tela-login.png",

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

        github: "https://github.com/Arthuranjo/Pilates",

        demo: "#",

        gallery: [
            {
                type:"image",
                src:"assets/img/projects/pilates/tela-login.png"
            },
            
            {
                type:"image",
                src:"assets/img/projects/pilates/tela-aluno.png"
            },
  
            {
                type:"image",
                src:"assets/img/projects/pilates/tela-professor.png"
            },

            {
                type:"image",
                src:"assets/img/projects/pilates/tela-admin.png"
            },

            {
                type:"image",
                src:"assets/img/projects/pilates/cadastro-aluno.png"
            },

            {
                type:"image",
                src:"assets/img/projects/pilates/recuperar-senha.png"
            }, 
        ],
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

        image: "assets/img/projects/controle-gastos/tela-principal.jpeg",

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

        gallery: [
            {
                type:"image",
                src:"assets/img/projects/controle-gastos/tela-principal.jpeg"
            },

            {
                type:"image",
                src:"assets/img/projects/controle-gastos/cadastrar-gasto.jpeg"
            },

            {
                type:"image",
                src:"assets/img/projects/controle-gastos/gasto-criado.jpeg"
            },

            {
                type:"image",
                src:"assets/img/projects/controle-gastos/filtrar-gasto.jpeg"
            },

            {
                type:"image",
                src:"assets/img/projects/controle-gastos/excluir-gasto.jpeg"
            },
         
        ],

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

        demo: "https://arthuranjo.github.io/sistema--monitoramento/",

        gallery: [

            {
                type:"image",
                src:"assets/img/projects/iot/temperaturas-controladas.png"
            },

            {
                type:"image",
                src:"assets/img/projects/iot/temperatura-descontrolada.png"
            },

            {
                type:"image",
                src:"assets/img/projects/iot/apos-controlar-temp.png"
            },

            {
                type:"image",
                src:"assets/img/projects/iot/vibracao-descontrolada.png"
            },

            {
                type:"image",
                src:"assets/img/projects/iot/circuito-esp32.png"
            },

        ],

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

                    <div class="carousel">
                        <div class="carousel-background"></div>

                        <div class="carousel-media"></div>

                        <button
                            class="carousel-button carousel-prev"
                            type="button"
                            aria-label="Imagem anterior">

                            <i class="fa-solid fa-chevron-left"></i>

                        </button>

                        <button
                            class="carousel-button carousel-next"
                            type="button"
                            aria-label="Próxima imagem">

                            <i class="fa-solid fa-chevron-right"></i>

                        </button>

                        <div class="carousel-indicators"></div>

                    </div>

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



    /* ===========================
   Carrossel dos Projetos
=========================== */

document.querySelectorAll(".project-card").forEach((card, index) => {

    const project = projects[index];


    /* ===========================
       Normalizar gallery antiga
    =========================== */

    const media = project.gallery?.length
        ? project.gallery.map(item => {

            if (typeof item === "string") {

                return {
                    type: "image",
                    src: item
                };

            }

            return item;

        })
        : [
            {
                type: "image",
                src: project.image
            }
        ];


    const mediaContainer =
        card.querySelector(".carousel-media");

    const background =
        card.querySelector(".carousel-background");

    const previousButton =
        card.querySelector(".carousel-prev");

    const nextButton =
        card.querySelector(".carousel-next");

    const indicators =
        card.querySelector(".carousel-indicators");

    const carousel =
        card.querySelector(".carousel");


    let currentIndex = 0;

    let autoplay = null;


    /* ===========================
       Atualizar fundo
    =========================== */

    function updateBackground() {

        const currentMedia =
            media[currentIndex];


        if (currentMedia.type === "image") {

            background.style.setProperty(
                "--carousel-image",
                `url("${currentMedia.src}")`
            );

            background.style.display = "block";

        } else {

            background.style.removeProperty(
                "--carousel-image"
            );

            background.style.display = "none";

        }

    }


    /* ===========================
       Renderizar mídia
    =========================== */

    function renderMedia() {

        const currentMedia =
            media[currentIndex];


        /* Pausar vídeo anterior */

        const previousVideo =
            mediaContainer.querySelector("video");

        if (previousVideo) {

            previousVideo.pause();

        }


        mediaContainer.innerHTML = "";


        if (currentMedia.type === "video") {

            const video =
                document.createElement("video");

            video.classList.add("carousel-video");

            video.src =
                currentMedia.src;

            video.controls = true;

            video.preload = "metadata";

            video.playsInline = true;

            mediaContainer.appendChild(video);


            /*
            Pausar autoplay enquanto
            o vídeo estiver sendo exibido
            */

            stopAutoplay();


            /*
            Quando o vídeo terminar,
            ir para próxima mídia
            */

            video.addEventListener("ended", () => {

                nextMedia();

                startAutoplay();

            });

        } else {

            const image =
                document.createElement("img");

            image.classList.add(
                "carousel-image"
            );

            image.src =
                currentMedia.src;

            image.alt =
                project.title;

            image.loading = "lazy";


            image.addEventListener(
                "click",
                () => {

                    openModal();

                }
            );


            mediaContainer.appendChild(
                image
            );

        }


        updateBackground();

        updateIndicators();

    }


    /* ===========================
       Atualizar indicadores
    =========================== */

    function updateIndicators() {

        const allIndicators =
            indicators.querySelectorAll(
                ".carousel-indicator"
            );

        allIndicators.forEach(
            (indicator, indicatorIndex) => {

                indicator.classList.toggle(
                    "active",
                    indicatorIndex === currentIndex
                );

            }
        );

    }


    /* ===========================
       Próxima mídia
    =========================== */

    function nextMedia() {

        currentIndex++;

        if (currentIndex >= media.length) {

            currentIndex = 0;

        }

        renderMedia();

    }


    /* ===========================
       Mídia anterior
    =========================== */

    function previousMedia() {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex =
                media.length - 1;

        }

        renderMedia();

    }


    /* ===========================
       Autoplay
    =========================== */

    function startAutoplay() {

        stopAutoplay();


        /*
        Não iniciar autoplay
        enquanto estiver em vídeo
        */

        if (
            media[currentIndex].type ===
            "video"
        ) {

            return;

        }


        autoplay = setInterval(() => {

            /*
            Se a próxima mídia
            for vídeo, ela será exibida
            e o autoplay será parado
            */

            nextMedia();

            if (
                media[currentIndex].type ===
                "video"
            ) {

                stopAutoplay();

            }

        }, 5000);

    }


    function stopAutoplay() {

        if (autoplay) {

            clearInterval(autoplay);

            autoplay = null;

        }

    }


    /* ===========================
       Apenas uma mídia
    =========================== */

    if (media.length <= 1) {

        previousButton.style.display =
            "none";

        nextButton.style.display =
            "none";

        indicators.style.display =
            "none";

    } else {

        /* Criar indicadores */

        media.forEach(
            (_, mediaIndex) => {

                const indicator =
                    document.createElement(
                        "span"
                    );

                indicator.classList.add(
                    "carousel-indicator"
                );


                if (mediaIndex === 0) {

                    indicator.classList.add(
                        "active"
                    );

                }


                indicator.addEventListener(
                    "click",
                    () => {

                        currentIndex =
                            mediaIndex;

                        renderMedia();

                        startAutoplay();

                    }
                );


                indicators.appendChild(
                    indicator
                );

            }
        );


        /* Botão próximo */

        nextButton.addEventListener(
            "click",
            () => {

                nextMedia();

                startAutoplay();

            }
        );


        /* Botão anterior */

        previousButton.addEventListener(
            "click",
            () => {

                previousMedia();

                startAutoplay();

            }
        );

    }


    /* ===========================
       Pausar no hover
    =========================== */

    carousel.addEventListener(
        "mouseenter",
        stopAutoplay
    );


    carousel.addEventListener(
        "mouseleave",
        () => {

            if (
                media[currentIndex].type ===
                "image"
            ) {

                startAutoplay();

            }

        }
    );


    /* ===========================
       Iniciar
    =========================== */

    renderMedia();

    startAutoplay();

});



   /* ===========================
    MODAL DAS IMAGENS
    =========================== */

    const imageModal =
        document.querySelector(".image-modal");

    const modalImage =
        document.querySelector(".image-modal-img");

    const modalVideo =
        document.querySelector(".image-modal-video");

    const modalClose =
        document.querySelector(".image-modal-close");

    const modalPrevious =
        document.querySelector(".image-modal-prev");

    const modalNext =
        document.querySelector(".image-modal-next");

    const modalIndicators =
        document.querySelector(".image-modal-indicators");


    let modalImages = [];
    let modalCurrentIndex = 0;


    /* ===========================
    ATUALIZAR IMAGEM DO MODAL
    =========================== */

    function updateModalImage() {

        const media =
            modalImages[modalCurrentIndex];


        /*
        Esconder os dois inicialmente
        */

        modalImage.style.display = "none";

        modalVideo.style.display = "none";


        /*
        Parar vídeo anterior
        */

        modalVideo.pause();

        modalVideo.removeAttribute("src");



        /* ===========================
        IMAGEM
        =========================== */

        if (media.type === "image") {

            modalImage.src = media.src;

            modalImage.alt = "Imagem do projeto";

            modalImage.style.display = "block";

        }


        /* ===========================
        VÍDEO
        =========================== */

        else if (media.type === "video") {

            modalVideo.src = media.src;

            modalVideo.style.display = "block";

            modalVideo.load();

        }


        /*
        Atualizar indicadores
        */

        const indicators =
            modalIndicators.querySelectorAll(
                ".image-modal-indicator"
            );


        indicators.forEach(
            (indicator, index) => {

                indicator.classList.toggle(
                    "active",
                    index === modalCurrentIndex
                );

            }
        );

    }
    
    /* ===========================
    ABRIR MODAL
    =========================== */

    document.querySelectorAll(".project-card").forEach(

        (card, projectIndex) => {

            const project =
                projects[projectIndex];


            const media =
                project.gallery?.length
                    ? project.gallery
                    : [
                        {
                            type: "image",
                            src: project.image
                        }
                    ];


            const carouselMedia =
                card.querySelector(".carousel-media");


            if (!carouselMedia) {

                return;

            }


            carouselMedia.addEventListener("click", () => {

                /*
                Guardar todas as mídias
                */

                modalImages = media;


                /*
                Descobrir a mídia atual
                */

                const currentSrc =
                    carouselMedia.getAttribute("src");


                modalCurrentIndex =
                    modalImages.findIndex(
                        item => item.src === currentSrc
                    );


                /*
                Caso não encontre
                */

                if (modalCurrentIndex === -1) {

                    modalCurrentIndex = 0;

                }


                /*
                Limpar indicadores
                */

                modalIndicators.innerHTML = "";


                /*
                Criar indicadores
                */

                modalImages.forEach(
                    (_, index) => {

                        const indicator =
                            document.createElement("span");


                        indicator.classList.add(
                            "image-modal-indicator"
                        );


                        if (
                            index === modalCurrentIndex
                        ) {

                            indicator.classList.add(
                                "active"
                            );

                        }


                        indicator.addEventListener(
                            "click",
                            () => {

                                modalCurrentIndex = index;

                                updateModalImage();

                            }
                        );


                        modalIndicators.appendChild(
                            indicator
                        );

                    }
                );


                /*
                Mostrar mídia atual
                */

                updateModalImage();


                /*
                Abrir modal
                */

                imageModal.classList.add(
                    "active"
                );

            });

        }

    );
    /* ===========================
    PRÓXIMA IMAGEM
    =========================== */

    modalNext.addEventListener("click", () => {

        modalCurrentIndex++;


        if (
            modalCurrentIndex >= modalImages.length
        ) {

            modalCurrentIndex = 0;

        }


        updateModalImage();

    });


    /* ===========================
    IMAGEM ANTERIOR
    =========================== */

    modalPrevious.addEventListener("click", () => {

        modalCurrentIndex--;


        if (modalCurrentIndex < 0) {

            modalCurrentIndex =
                modalImages.length - 1;

        }


        updateModalImage();

    });


    /* ===========================
    FECHAR
    =========================== */

    modalClose.addEventListener("click", () => {

        imageModal.classList.remove("active");

    });


    /* ===========================
    FECHAR CLICANDO FORA
    =========================== */

    imageModal.addEventListener("click", (event) => {

        if (event.target === imageModal) {

            imageModal.classList.remove("active");

        }

    });


    /* ===========================
    FECHAR COM ESC
    =========================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            imageModal.classList.remove("active");

        }

    });

}


document.addEventListener("DOMContentLoaded", renderProjects);