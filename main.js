const typed = new Typed('.typed', {
	strings: [
		'<i class="pieza">Tu guía transformador de procesos.</i>',
		'<i class="pieza">Tu mentor en la evolución de tus flujos de trabajo.</i>',
		'<i class="pieza">Tu socio en la revolución de tu gestión.</i>',
		'<i class="pieza">El catalizador de la mejora organizativa.</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});











document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura los datos del formulario
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="Message"]').value;

    // Crea un mensaje para WhatsApp con los datos del formulario
    const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. Mi asunto es: ${message}`;

    // Actualiza el campo oculto con el mensaje de WhatsApp
    document.querySelector('#whatsapp-message').value = encodeURIComponent(whatsappMessage);

    // Genera el enlace de WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=+5218135656874&text=${encodeURIComponent(whatsappMessage)}`;

    // Redirige al usuario a WhatsApp
    window.location.href = whatsappLink;
});
