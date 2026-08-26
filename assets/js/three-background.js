/* ===========================
   THREE.JS
   FUNDO INTERATIVO
=========================== */

const canvas = document.getElementById("three-background");

if (canvas && typeof THREE !== "undefined") {

    /* ===========================
       CONFIGURAÇÕES
    =========================== */

    const isMobile = window.innerWidth <= 768;

    const PARTICLE_COUNT = isMobile ? 350 : 750;

    const CONNECTION_DISTANCE = isMobile ? 1.4 : 1.7;


    /* ===========================
       CENA
    =========================== */

    const scene = new THREE.Scene();


    /* ===========================
       CÂMERA
    =========================== */

    const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );

    camera.position.z = 6;


    /* ===========================
       RENDERIZADOR
    =========================== */

    const renderer = new THREE.WebGLRenderer({

        canvas: canvas,

        alpha: true,

        antialias: true

    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );


    /* ===========================
       PARTÍCULAS
    =========================== */

    const particleGeometry =
        new THREE.BufferGeometry();

    const positions =
        new Float32Array(
            PARTICLE_COUNT * 3
        );


    for (
        let i = 0;
        i < PARTICLE_COUNT;
        i++
    ) {

        const i3 = i * 3;

        positions[i3] =
            (Math.random() - 0.5) * 16;

        positions[i3 + 1] =
            (Math.random() - 0.5) * 10;

        positions[i3 + 2] =
            (Math.random() - 0.5) * 8;

    }


    particleGeometry.setAttribute(

        "position",

        new THREE.BufferAttribute(
            positions,
            3
        )

    );


    /* ===========================
       MATERIAL DAS PARTÍCULAS
    =========================== */

    const particleMaterial =
        new THREE.PointsMaterial({

            color: 0x3b82f6,

            size: isMobile
                ? 0.025
                : 0.035,

            transparent: true,

            opacity: 0.75,

            depthWrite: false

        });


    /* ===========================
       SISTEMA DE PARTÍCULAS
    =========================== */

    const particles =
        new THREE.Points(
            particleGeometry,
            particleMaterial
        );

    scene.add(particles);


    /* ===========================
       LINHAS
    =========================== */

    const linePositions = [];


    function createConnections() {

        linePositions.length = 0;

        const positions =
            particleGeometry.attributes.position.array;


        for (
            let i = 0;
            i < PARTICLE_COUNT;
            i++
        ) {

            const i3 = i * 3;

            const x1 = positions[i3];
            const y1 = positions[i3 + 1];
            const z1 = positions[i3 + 2];


            for (
                let j = i + 1;
                j < PARTICLE_COUNT;
                j++
            ) {

                const j3 = j * 3;

                const x2 = positions[j3];
                const y2 = positions[j3 + 1];
                const z2 = positions[j3 + 2];


                const dx = x1 - x2;
                const dy = y1 - y2;
                const dz = z1 - z2;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy +
                        dz * dz
                    );


                if (
                    distance <
                    CONNECTION_DISTANCE
                ) {

                    linePositions.push(

                        x1,
                        y1,
                        z1,

                        x2,
                        y2,
                        z2

                    );

                }

            }

        }

    }


    createConnections();


    /* ===========================
       GEOMETRIA DAS LINHAS
    =========================== */

    const lineGeometry =
        new THREE.BufferGeometry();

    lineGeometry.setAttribute(

        "position",

        new THREE.Float32BufferAttribute(
            linePositions,
            3
        )

    );


    /* ===========================
       MATERIAL DAS LINHAS
    =========================== */

    const lineMaterial =
        new THREE.LineBasicMaterial({

            color: 0x3b82f6,

            transparent: true,

            opacity: 0.12,

            depthWrite: false

        });


    const lines =
        new THREE.LineSegments(
            lineGeometry,
            lineMaterial
        );

    scene.add(lines);


    /* ===========================
       MOUSE
    =========================== */

    let mouseX = 0;
    let mouseY = 0;

    let targetMouseX = 0;
    let targetMouseY = 0;


    document.addEventListener(
        "mousemove",
        (event) => {

            targetMouseX =
                (event.clientX /
                    window.innerWidth) - 0.5;

            targetMouseY =
                (event.clientY /
                    window.innerHeight) - 0.5;

        }
    );


    /* ===========================
       ANIMAÇÃO
    =========================== */

    function animate() {

        requestAnimationFrame(
            animate
        );


        /* Movimento suave do mouse */

        mouseX +=
            (targetMouseX - mouseX)
            * 0.03;

        mouseY +=
            (targetMouseY - mouseY)
            * 0.03;


        /* Rotação */

        particles.rotation.y +=
            0.0004;

        particles.rotation.x +=
            0.0001;


        lines.rotation.y =
            particles.rotation.y;

        lines.rotation.x =
            particles.rotation.x;


        /* Interação com mouse */

        particles.rotation.y +=
            mouseX * 0.0004;

        particles.rotation.x +=
            mouseY * 0.0002;


        lines.rotation.y =
            particles.rotation.y;

        lines.rotation.x =
            particles.rotation.x;


        /* Renderização */

        renderer.render(
            scene,
            camera
        );

    }


    animate();


    /* ===========================
       RESPONSIVIDADE
    =========================== */

    window.addEventListener(
        "resize",
        () => {

            camera.aspect =
                window.innerWidth /
                window.innerHeight;

            camera.updateProjectionMatrix();


            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );

        }
    );

}