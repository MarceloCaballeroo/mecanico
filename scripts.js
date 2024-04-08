$(document).ready(function() {
    // Inicialmente verifica el estado de sesión
    checkLoginStatus();

    // Manejador de eventos para "Iniciar sesión" o "Cerrar sesión"
    $(document).on('click', '#actionLogin', function(e) {
        e.preventDefault();
        if (localStorage.getItem('isLoggedIn') === 'true') {
            logout();
        } else {
            login();
        }
    });

    // Opcionalmente, maneja el registro aquí si es necesario
    $(document).on('click', '#actionRegister', function(e) {
        e.preventDefault();
        register();
    });

    function checkLoginStatus() {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            $('#actionLogin').text('Cerrar sesión'); // Cambia el texto para reflejar el estado de "Cerrar sesión"
            $('#actionRegister').hide(); // Oculta la opción de registro
            // Aquí, agregar lógica adicional si el usuario es un administrador
        } else {
            $('#actionLogin').text('Iniciar sesión'); // Asegura que el texto sea "Iniciar sesión"
            $('#actionRegister').show(); // Muestra la opción de registro
        }
    }

    function login() {
        // Aquí iría tu lógica de autenticación. Por ahora, solo simularemos el inicio de sesión.
        const email = prompt("Ingrese su correo electrónico:");
        const password = prompt("Ingrese su contraseña:");
        // Simula una comprobación de credenciales
        if (email && password) { // Simula una validación exitosa
            localStorage.setItem('isLoggedIn', 'true');
            alert("Inicio de sesión exitoso.");
        } else {
            alert("Inicio de sesión fallido.");
        }
        checkLoginStatus();
    }

    function logout() {
        localStorage.removeItem('isLoggedIn');
        alert("Cierre de sesión exitoso.");
        checkLoginStatus();
    }

    function register() {
        // Aquí iría tu lógica de registro.
        alert("Registro (simulado para este ejemplo).");
    }
});
