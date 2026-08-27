/* ===========================
   NAVBAR
=========================== */

function renderNavbar() {

    const header = document.querySelector(".header");

    header.innerHTML = `

        <nav class="navbar container">

            <a href="#home" class="logo">
                Arthur<span>.</span>dev
            </a>


            <ul class="nav-menu">

                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#sobre">Sobre</a>
                </li>

                <li>
                    <a href="#tecnologias">Skills</a>
                </li>

                <li>
                    <a href="#projetos">Projetos</a>
                </li>

                <li>
                    <a href="#experiencia">Experiência</a>
                </li>

                <li>
                    <a href="#certificados">Certificados</a>
                </li>

                <li>
                    <a href="#contato">Contato</a>
                </li>

            </ul>


            <div class="nav-icons">

                <button
                    class="theme-btn"
                    type="button"
                    aria-label="Alterar tema">

                    <i class="fa-solid fa-moon"></i>

                </button>


                <button
                    class="hamburger"
                    type="button"
                    aria-expanded="false"
                    aria-label="Abrir menu">

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>

        </nav>

    `;

    setupNavbar();
   
}


function setupNavbar(){

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if(!hamburger || !navMenu){
        return;
    }

    hamburger.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        hamburger.classList.toggle("active", isOpen);

        hamburger.setAttribute(
            "aria-expanded",
            isOpen
        );

        hamburger.setAttribute(
            "aria-label",
            isOpen
                ? "Fechar menu"
                : "Abrir menu"
        );

    });

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            hamburger.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburger.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });

}

document.addEventListener("DOMContentLoaded", renderNavbar);
    