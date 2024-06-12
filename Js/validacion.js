function validar() {
    var retorno_username = validar_username();
    var retorno_password = validar_password();
    var retorno_confirm_password = validar_confirm_password();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_url = validar_url();
    var retorno_aficiones = validar_aficiones();

    return retorno_username && retorno_password && retorno_confirm_password &&
           retorno_direccion && retorno_comuna && retorno_telefono &&
           retorno_url && retorno_aficiones;
}

function validar_username() {
    var username = document.getElementById("input-username").value;
    var div_error = document.getElementById("error-username");
    if (username === "") {
        div_error.innerHTML = "El nombre de usuario es obligatorio";
        div_error.className = "text-danger small mt-1";
        return false;
    } else if (!/^[A-Za-z][A-Za-z0-9]{4,9}$/.test(username)) {
        div_error.innerHTML = "El nombre de usuario debe comenzar con una letra, puede tener dígitos al final, sin caracteres especiales, y tener entre 5 y 10 caracteres";
        div_error.className = "text-danger small mt-1";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_password() {
    var password = document.getElementById("input-password").value;
    var username = document.getElementById("input-username").value;
    var div_error = document.getElementById("error-password");
    if (password === "") {
        div_error.innerHTML = "La contraseña es obligatoria";
        div_error.className = "text-danger small mt-1";
        return false;
    } else if (password.length < 3 || password.length > 6) {
        div_error.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        div_error.className = "text-danger small mt-1";
        return false;
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        div_error.innerHTML = "La contraseña debe contener al menos una letra y un dígito";
        div_error.className = "text-danger small mt-1";
        return false;
    } else if (password.includes(username)) {
        div_error.innerHTML = "La contraseña no puede contener el nombre de usuario";
        div_error.className = "text-danger small mt-1";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_confirm_password() {
    var password = document.getElementById("input-password").value;
    var confirm_password = document.getElementById("input-confirm-password").value;
    var div_error = document.getElementById("error-confirm-password");
    if (confirm_password === "") {
        div_error.innerHTML = "Debe confirmar la contraseña";
        div_error.className = "text-danger small mt-1";
        return false;
    } else if (confirm_password !== password) {
        div_error.innerHTML = "Las contraseñas no coinciden";
        div_error.className = "text-danger small mt-1";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var direccion = document.getElementById("input-direccion").value;
    var div_error = document.getElementById("error-direccion");
    if (direccion === "") {
        div_error.innerHTML = "La dirección es obligatoria";
        div_error.className = "text-danger small mt-1";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var comuna = document.getElementById("select-comuna").value;
    var div_error = document.getElementById("error-comuna");
    if (comuna === "default") {
        div_error.innerHTML = "Debe seleccionar una comuna";
        div_error.className = "text-danger small mt-1";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var telefono = document.getElementById("input-telefono").value;
    var div_error = document.getElementById("error-telefono");
    var regexTelefono = /^\+569\d{8}$/;
    if (!regexTelefono.test(telefono)) {
        div_error.innerHTML = "El teléfono debe tener el formato +569XXXXXXXX";
        div_error.className = "text-danger small mt-1";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_url() {
    var url = document.getElementById("input-url").value;
    var div_error = document.getElementById("error-url");
    var regexUrl = /^(http|https):\/\/[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,}(\/.*)?$/;
    if (!regexUrl.test(url)) {
        div_error.innerHTML = "La URL debe tener el formato http://www.example.com";
        div_error.className = "text-danger small mt-1";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function agregarAficion() {
    var aficion = document.getElementById("input-hobby").value;
    var lista = document.getElementById("lista-aficiones");
    var error_div = document.getElementById("error-aficiones");

    if (aficion === "") {
        error_div.innerHTML = "La afición no puede estar vacía";
        error_div.className = "text-danger small mt-1";
    } else {
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = aficion;
        lista.appendChild(li);
        error_div.innerHTML = "";
    }
}

function validar_aficiones() {
    var lista = document.getElementById("lista-aficiones").getElementsByTagName("li");
    var error_div = document.getElementById("error-aficiones");

    if (lista.length < 2) {
        error_div.innerHTML = "Debe agregar al menos dos aficiones";
        error_div.className = "text-danger small mt-1";
        return false;
    } else {
        error_div.innerHTML = "";
        return true;
    }
}