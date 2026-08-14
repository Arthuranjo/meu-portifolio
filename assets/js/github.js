const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const button =
            contactForm.querySelector(".contact-submit");

        const originalContent = button.innerHTML;

        button.disabled = true;

        button.innerHTML = `
            <span>Enviando...</span>
            <i class="fa-solid fa-spinner fa-spin"></i>
        `;

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",

                    body: formData,

                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                contactForm.reset();

                button.innerHTML = `
                    <span>Mensagem enviada!</span>
                    <i class="fa-solid fa-check"></i>
                `;

                setTimeout(() => {

                    button.innerHTML = originalContent;

                    button.disabled = false;

                }, 3000);

            } else {

                throw new Error(
                    "Não foi possível enviar a mensagem."
                );

            }

        } catch (error) {

            console.error(error);

            button.innerHTML = `
                <span>Erro ao enviar</span>
                <i class="fa-solid fa-xmark"></i>
            `;

            setTimeout(() => {

                button.innerHTML = originalContent;

                button.disabled = false;

            }, 3000);

        }

    });

}