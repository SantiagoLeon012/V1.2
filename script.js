// Espera que cargue la página
document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector("form");
    const password = document.querySelector("input[type='password']");
    
    // Crear mensaje de seguridad
    const mensaje = document.createElement("p");
    password.parentNode.appendChild(mensaje);

    // Evaluar contraseña en tiempo real
    password.addEventListener("input", function(){
        let valor = password.value;

        if(valor.length < 8){
            mensaje.textContent = "❌ Muy corta";
            mensaje.style.color = "red";
        } else if(!/[A-Z]/.test(valor) || !/[0-9]/.test(valor)){
            mensaje.textContent = "⚠️ Falta mayúscula o número";
            mensaje.style.color = "orange";
        } else {
            mensaje.textContent = "✅ Contraseña segura";
            mensaje.style.color = "green";
        }
    });

    // Validación al enviar
    form.addEventListener("submit", function(e){
        const telefono = document.querySelector("input[type='tel']").value;

        if(telefono.length !== 10){
            alert("El teléfono debe tener 10 dígitos");
            e.preventDefault();
        } else {
            alert("🎉 Registro exitoso");
        }
    });

});
const toggle = document.getElementById("togglePass");

toggle.addEventListener("click", function(){
    if(password.type === "password"){
        password.type = "text";
        toggle.textContent = "Ocultar contraseña";
    } else {
        password.type = "password";
        toggle.textContent = "Mostrar contraseña";
    }
});