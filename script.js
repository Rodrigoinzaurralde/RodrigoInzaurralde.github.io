if (location.protocol !== 'https:') {
    alert('Advertencia: Estás navegando en una conexión no segura (HTTP). Para mayor seguridad, usa HTTPS.');
}
document.querySelector('.formulario').addEventListener('submit', function(e) {
    const email = this.email.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const asunto = this.asunto.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const mensaje = this.mensaje.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    this.email.value = email;
    this.asunto.value = asunto;
    this.mensaje.value = mensaje;
});