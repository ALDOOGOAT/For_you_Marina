// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', () => {

    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const song = document.getElementById('song');
    const fallingItemsContainer = document.querySelector('.falling-items');

    // Función para abrir la carta
    function openLetter() {
        // Oculta el sobre con una pequeña animación (si se desea)
        envelope.style.transition = 'opacity 0.5s';
        envelope.style.opacity = '0';
        setTimeout(() => {
            envelope.classList.add('hidden'); // Oculta completamente
        }, 500);

        // Muestra la carta
        letter.style.display = 'block';

        // Inicia la música
        // Los navegadores modernos bloquean el autoplay,
        // pero al iniciarlo con una acción del usuario (clic), sí funciona.
        song.play().catch(error => {
            console.warn("La reproducción automática fue bloqueada por el navegador.", error);
            // Podrías mostrar un botón de "Play" si falla
        });

        // Inicia la animación de corazones y flores
        startFallingItems();
    }

    // Agrega el "escuchador" de eventos al sobre
    envelope.addEventListener('click', openLetter);

    // --- Animación de corazones y flores ---

    const items = ['❤️', '🌸', '💖', '🌹', '✨'];

    function createFallingItem() {
        const item = document.createElement('div');
        item.classList.add('item');
        
        // Elige un ítem al azar
        item.innerText = items[Math.floor(Math.random() * items.length)];
        
        // Posición horizontal al azar
        item.style.left = `${Math.random() * 100}vw`;
        
        // Duración de animación al azar para que no caigan todos igual
        item.style.animationDuration = `${Math.random() * 5 + 8}s`; // Entre 8 y 13 seg
        
        // Tamaño al azar
        item.style.fontSize = `${Math.random() * 1 + 1}rem`; // Entre 1 y 2rem

        fallingItemsContainer.appendChild(item);

        // Remueve el ítem después de que termine la animación
        setTimeout(() => {
            item.remove();
        }, 13000); // Un poco más que la duración máxima de la animación
    }

    // Función para iniciar la caída de ítems
    function startFallingItems() {
        // Crea un nuevo ítem cada 800ms (0.8 segundos)
        setInterval(createFallingItem, 800);
    }
});
