if (location.protocol !== 'https:') {
    document.getElementById('alerta-seguridad').style.display = 'block';
    document.getElementById('titleId').style.marginTop = '70px';
}
const now = Date.now();
let marcasDeTiempo = JSON.parse(localStorage.getItem('bloqueoDeVisitas') || '[]');
marcasDeTiempo = marcasDeTiempo.filter(marca => now - marca < 1000);
marcasDeTiempo.push(now);
localStorage.setItem('bloqueoDeVisitas', JSON.stringify(marcasDeTiempo));
if (marcasDeTiempo.length > 1) {
    window.location.href = "error.html";
}
document.querySelector('.formulario').addEventListener('submit', function(e) {
    const email = this.email.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const asunto = this.asunto.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const mensaje = this.mensaje.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    this.email.value = email;
    this.asunto.value = asunto;
    this.mensaje.value = mensaje;
});

const btn = document.getElementById('darkModeId');
let dark = false;

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    dark = !dark;
    btn.textContent = dark ? '☀️ Modo claro' : '🌙 Modo oscuro';
});