function flipCard(button) {
    const card = button.closest('.card');
    card.classList.toggle('flipped');
}

function showSession(sessionNumber) {
    const sessions = document.querySelectorAll('.session');
    sessions.forEach(session => session.style.display = 'none');
    
    const activeSession = document.getElementById(`session-${sessionNumber}`);
    activeSession.style.display = 'flex';
}

// - - - - - - - - - - - - - - - - - - - - - -  IMAGENES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Función para expandir la imagen en el centro del body y delante de todo
function expandImage(imageElement) {
    // Crea un clon de la imagen para moverla al final del body
    const clonedImage = imageElement.cloneNode(true);
    clonedImage.classList.add('expanded'); // Agrega la clase para estilos de expansión
    clonedImage.style.zIndex = '9999'; // Asegura que esté al frente de todo
    clonedImage.style.position = 'fixed'; // Para que se ubique respecto a la ventana
    clonedImage.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    // Calcula el centro de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imageWidth = imageElement.offsetWidth;
    const imageHeight = imageElement.offsetHeight;

    const centerX = (windowWidth - imageWidth) / 2;
    const centerY = (windowHeight - imageHeight) / 2;

    clonedImage.style.left = `${centerX}px`;
    clonedImage.style.top = `${centerY}px`;
    clonedImage.style.width = `${imageWidth}px`; // Mantiene el tamaño inicial
    clonedImage.style.height = `${imageHeight}px`;

    // Agrega el clon al final del body
    document.body.appendChild(clonedImage);

    // Expande la imagen después de un frame para que la transición ocurra
    setTimeout(() => {
        clonedImage.style.transform = 'scale(3.5)'; // Ajusta la escala según tu preferencia
    }, 0);

    // Manejo del clic para colapsar la imagen
    clonedImage.addEventListener('click', function () {
        collapseImage(clonedImage, imageElement);
    });
}

// Función para regresar la imagen a su tamaño original
function collapseImage(clonedImage, originalImage) {
    // Restaura la escala antes de eliminar
    clonedImage.style.transform = 'scale(1)';
    clonedImage.style.opacity = '0'; // Desvanece la imagen

    // Espera a que termine la transición antes de eliminarla
    clonedImage.addEventListener('transitionend', () => {
        clonedImage.remove();
    });
}

// Escucha el clic sobre las imágenes para expandirlas
document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', function (e) {
        // Si no hay imágenes ya expandidas, expandir la actual
        if (!document.querySelector('.image.expanded')) {
            expandImage(image);
        }
        e.stopPropagation(); // Evita que el evento propague
    });
});

// Escucha clics en cualquier parte del documento para colapsar las imágenes
document.addEventListener('click', function (e) {
    const expandedImage = document.querySelector('.image.expanded');
    if (expandedImage && !e.target.classList.contains('image')) {
        collapseImage(expandedImage);
    }
});


// - - - - - - - - - - - - - - - - - - - - - -  TEXTO - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Función para expandir el texto en el centro de la pantalla
function expandText(textElement) {
    // Crea un clon del texto
    const clonedText = textElement.cloneNode(true);
    clonedText.classList.add('expanded'); // Agrega la clase para el estilo de expansión
    clonedText.style.zIndex = '9999'; // Se asegura que esté al frente de todo
    clonedText.style.position = 'fixed'; // Para que se ubique respecto a la ventana
    clonedText.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    // Calcula el centro de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const textWidth = textElement.offsetWidth;
    const textHeight = textElement.offsetHeight;

    // Calcula las posiciones para centrar el texto en la ventana
    const centerX = (windowWidth - textWidth) / 2;
    const centerY = (windowHeight - textHeight) / 2;

    // Posiciona el texto centrado
    clonedText.style.left = `${centerX}px`;
    clonedText.style.top = `${centerY}px`;
    clonedText.style.width = `${textWidth}px`; // Mantiene el tamaño original del texto
    clonedText.style.height = `${textHeight}px`; // Mantiene el tamaño original del texto

    // Agrega el clon al final del body
    document.body.appendChild(clonedText);

    // Expande el texto después de un frame para que la transición ocurra
    setTimeout(() => {
        clonedText.style.transform = 'scale(2.7)'; // Ajusta la escala según tu preferencia
    }, 0);

    // Manejo del clic para colapsar el texto
    clonedText.addEventListener('click', function () {
        collapseText(clonedText, textElement);
    });
}

// Función para regresar el texto a su tamaño original
function collapseText(clonedText, originalText) {
    // Restaura la escala antes de eliminar
    clonedText.style.transform = 'scale(1)';
    clonedText.style.opacity = '0'; // Desvanece el texto

    // Espera a que termine la transición antes de eliminarlo
    clonedText.addEventListener('transitionend', () => {
        clonedText.remove();
    });
}

// Escucha el clic sobre el texto para expandirlo
document.querySelectorAll('.text').forEach(text => {
    text.addEventListener('click', function (e) {
        // Si no hay textos ya expandidos, expande el actual
        if (!document.querySelector('.text.expanded')) {
            expandText(text);
        }
        e.stopPropagation(); // Evita que el evento se propague
    });
});

// Escucha clics en cualquier parte del documento para colapsar el texto
document.addEventListener('click', function (e) {
    const expandedText = document.querySelector('.text.expanded');
    if (expandedText && !e.target.classList.contains('text')) {
        collapseText(expandedText);
    }
});
