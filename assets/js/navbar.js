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
                    <a href="#tecnologias">Tecnologias</a>
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


                <div
                    class="hamburger"
                    aria-label="Abrir menu">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        </nav>

    `;

}

document.addEventListener("DOMContentLoaded", renderNavbar);