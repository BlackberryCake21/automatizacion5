document.getElementById("pqr-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");
    
    if (!name || !email || !message) {
        status.textContent = "Por favor, complete todos los campos.";
        status.style.color = "red";
        return;
    }
    
    status.textContent = "Formulario enviado correctamente.";
    status.style.color = "green";
    document.getElementById("pqr-form").reset();
});