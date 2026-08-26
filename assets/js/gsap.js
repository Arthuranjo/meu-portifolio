/* ===========================
   GSAP - HOME
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    // Verifica se o GSAP foi carregado
    if (typeof gsap === "undefined") {

        console.warn("GSAP não foi carregado.");

        return;

    }


    // Verifica se o ScrollTrigger foi carregado
    if (typeof ScrollTrigger === "undefined") {

        console.warn("ScrollTrigger não foi carregado.");

        return;

    }


    // Ativa o ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);


    /* ===========================
       ELEMENTOS DA HOME
    =========================== */

    const home = document.querySelector("#home");

    const subtitle = document.querySelector(".home-subtitle");

    const title = document.querySelector(".home-text h1");

    const role = document.querySelector(".home-text h2");

    const description = document.querySelector(".home-text p");

    const buttons = document.querySelectorAll(".home-buttons .btn");

    const image = document.querySelector(".home-image");


    // Se a Home não existir, encerra
    if (!home) {

        return;

    }


    /* ===========================
       ESTADO INICIAL
    =========================== */

    gsap.set(
        [
            subtitle,
            title,
            role,
            description,
            buttons,
            image
        ],
        {
            opacity: 0,
            y: 25
        }
    );


    /* ===========================
       ANIMAÇÃO PRINCIPAL
    =========================== */

    const homeAnimation = gsap.timeline({

        paused: true,

        defaults: {
            ease: "power2.out"
        }

    });


    /* Subtítulo */

    homeAnimation.to(
        subtitle,
        {
            opacity: 1,
            y: 0,
            duration: 0.6
        }
    );


    /* Nome */

    homeAnimation.to(
        title,
        {
            opacity: 1,
            y: 0,
            duration: 0.7
        },
        "-=0.35"
    );


    /* Cargo */

    homeAnimation.to(
        role,
        {
            opacity: 1,
            y: 0,
            duration: 0.6
        },
        "-=0.35"
    );


    /* Texto */

    homeAnimation.to(
        description,
        {
            opacity: 1,
            y: 0,
            duration: 0.7
        },
        "-=0.3"
    );


    /* Botões */

    homeAnimation.to(
        buttons,
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1
        },
        "-=0.3"
    );


    /* Imagem */

    homeAnimation.to(
        image,
        {
            opacity: 1,
            y: 0,
            duration: 0.8
        },
        "-=0.6"
    );


    /* ===========================
       SCROLLTRIGGER
    =========================== */

    ScrollTrigger.create({

        trigger: home,

        start: "top 80%",

        once: true,

        onEnter: () => {

            homeAnimation.play();

        }

    });

});