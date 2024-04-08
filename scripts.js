$(document).ready(function() {
    // Verifica el estado de la sesión al cargar la página y ajusta la UI de acuerdo a este
    checkLoginStatus();

    // Manejo del clic en el enlace de inicio de sesión/cierre de sesión
    $('#loginNavItem a').on('click', function(e) {
        e.preventDefault();
        if (localStorage.getItem('isLoggedIn') === 'true') {
            logout();
        } else {
            login();
        }
    });

    function checkLoginStatus() {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            $('#loginNavItem a').text('Cerrar sesión');
            $('#registerNavItem').hide();
            $('#mantenimientosCount').removeClass('d-none');

            // Verifica si el usuario es administrador
            if (localStorage.getItem('isAdmin') === 'true') {
                $('#adminIndicator').text('Admin').show();
            } else {
                $('#adminIndicator').hide();
            }
        } else {
            $('#loginNavItem a').text('Iniciar sesión');
            $('#registerNavItem').show();
            $('#mantenimientosCount').addClass('d-none');
            $('#adminIndicator').hide();
        }
    }

    function login() {
        const email = prompt('Ingrese su correo electrónico:');
        const password = prompt('Ingrese su contraseña:');
        if (email === "admin" && password === "123") {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('isAdmin', 'true');
            checkLoginStatus();
            alert('Inicio de sesión exitoso como administrador.');
        } else {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.removeItem('isAdmin');
            checkLoginStatus();
            alert('Inicio de sesión exitoso.');
        }
    }

    function logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isAdmin');
        checkLoginStatus();
        alert('Cierre de sesión exitoso.');
    }
});
