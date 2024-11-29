document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|vallegrande\.edu\.pe|hotmail\.com|outlook\.com)$/;

    if (!nameRegex.test(nombre.value.trim())) {
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido',
            text: 'El campo de nombre solo puede contener letras, espacios y caracteres especiales como tildes y ñ.',
        });
        return;
    }

    if (!nameRegex.test(apellido.value.trim())) {
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido',
            text: 'El campo de apellido solo puede contener letras, espacios y caracteres especiales como tildes y ñ.',
        });
        return;
    }

    if (!emailRegex.test(email.value.trim())) {
        Swal.fire({
            icon: 'error',
            title: 'Email no válido',
            text: 'El correo debe ser de los dominios permitidos: @gmail.com, @vallegrande.edu.pe, @hotmail.com o @outlook.com.',
        });
        return;
    }

    if (mensaje.value.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo obligatorio',
            text: 'El campo de mensaje es obligatorio.',
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Formulario enviado',
        text: '¡Tu formulario se ha enviado correctamente!',
    }).then(() => {
        event.target.submit();
    });
});
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|vallegrande\.edu\.pe|hotmail\.com|outlook\.com)$/;

    if (!nameRegex.test(nombre.value.trim())) {
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido',
            text: 'El campo de nombre solo puede contener letras, espacios y caracteres especiales como tildes y ñ.',
        });
        return;
    }

    if (!nameRegex.test(apellido.value.trim())) {
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido',
            text: 'El campo de apellido solo puede contener letras, espacios y caracteres especiales como tildes y ñ.',
        });
        return;
    }

    if (!emailRegex.test(email.value.trim())) {
        Swal.fire({
            icon: 'error',
            title: 'Email no válido',
            text: 'El correo debe ser de los dominios permitidos: @gmail.com, @vallegrande.edu.pe, @hotmail.com o @outlook.com.',
        });
        return;
    }

    if (mensaje.value.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo obligatorio',
            text: 'El campo de mensaje es obligatorio.',
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Formulario enviado',
        text: '¡Tu formulario se ha enviado correctamente!',
    }).then(() => {
        event.target.submit();
    });
});




