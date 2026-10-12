// =====================================================================
// config.js - AQUÍ SE CAMBIAN LOS DATOS DEL NEGOCIO (versión Barbería)
// Reglas: textos entre comillas "así"; cada línea termina en coma ,
// No borres llaves { } ni corchetes [ ] ni dos puntos :
// Los datos de abajo son de DEMOSTRACIÓN (ficticios), salvo el formulario.
// =====================================================================

const CONFIG = {

  // true = muestra una etiqueta "demostración". false = la quita (sin comillas).
  modoDemo: true,

  // Nombre del negocio. Ejemplo: "Barbería El Corte"
  nombreNegocio: "SOBERANO Barber Studio",

  // Tipo de negocio, aparece sobre el titular. "" para ocultar.
  giro: "Barbería",

  // Titular grande de la portada. La última palabra sale en dorado cursiva.
  // Si lo dejas "", se usa el nombre del negocio.
  titularHero: "Estilo clásico, acabado impecable",

  // Descripción breve, 1 o 2 frases en una línea. "" para ocultar.
  presentacion: "Estamos ubicados en Leon Gto📍💇‍♂️",

  // WhatsApp: solo números, sin espacios ni +. Con código de país ("524771234567")
  // o solo 10 dígitos ("4771234567"). Este número es FALSO.
  telefonoWhatsApp: "524776029217",

  // Mensaje preescrito. {negocio} se reemplaza por el nombre. "" = mensaje por defecto.
  mensajeWhatsApp: "Hola, me gustaría solicitar una cita en SOBERANO Barber Studio. ¿Qué horarios tienen disponibles?",

  // Colores: "#" + 6 caracteres.
  // colorPrincipal = fondo de la página. DEBE SER OSCURO (negro o casi negro).
  // colorAcento    = dorado de botones, líneas y detalles.
  colorPrincipal: "#0c0c0c",
  colorAcento: "#c9a24b",

  // Logo: ruta del archivo tal como está en GitHub. "" = sin logo.
  logo: "assets/logo.png",

  // Esquinas redondeadas del logo: true o false (sin comillas)
  logoRedondeado: true,

  // Foto de la portada (horizontal, 1920x1080, JPG, menos de 400 KB).
  // Si el archivo no existe, la portada usa un fondo oscuro con detalles dorados.
  imagenHero: "assets/hero.jpg",

  // Servicios. precio: solo número (150 o 149.5), o null para no mostrarlo.
  // descripcion: texto o "". destacado: true muestra la etiqueta "Favorito".
  // Para añadir, copia una línea completa. Para quitar, bórrala.
  servicios: [
    { nombre: "Corte de Cabello", precio: 180, descripcion: "Corte de Pelo.", destacado: true },
    { nombre: "Delineado de Barba", precio: 180, descripcion: "Diseño de barba, vapor de ozono, ritual de toallas para afeitado" },
    { nombre: "Corte y Barba", precio: 300, descripcion: "Corte de cabello Diseño de barba Vapor de ozono Ritual de toallas para afeitar" },
    { nombre: "Paquete Max", precio: null, descripcion: "•Corte de cabello •Bebida •Limpieza de oídos & nariz con cera •Delineado de cejas •Exfoliación facial •Mascarilla facial •Masaje relajante •Aromaterapia •Lavado de cabello" }
  ],

  // Cifras animadas (CIFRAS FICTICIAS: cámbialas por datos reales o deja la lista vacía: cifras: [],)
  // valor: solo número. sufijo: "+", "%", "" ... etiqueta: texto corto.
  cifras: [
    { valor: 1, sufijo: "clic", etiqueta: "Reservaciones Sencillas" },
    { valor: "24/7", sufijo: "", etiqueta: "Disponible todo el día" },
    { valor: 100, sufijo: "%", etiqueta: "Presencia profesional" }
  ],

  // Razones para elegir el negocio (TEXTOS DE EJEMPLO: reemplázalos por datos reales).
  // Para ocultar la sección: beneficios: [],
  beneficios: [
    { titulo: "Una imagen que destaca", texto: "Transmite profesionalismo desde la primera visita y hace que tu barbería destaque frente a otras opciones." },
    { titulo: "Tus mejores cortes, en un solo lugar", texto: "Muestra tu trabajo con una galería visual que ayude a los clientes a conocer tu estilo." },
    { titulo: "Servicios y precios claros", texto: "Permite consultar cortes, arreglos de barba y tarifas sin tener que preguntar por cada servicio." },
    { titulo: "Citas por WhatsApp", texto: "Facilita que los clientes contacten directamente contigo para consultar disponibilidad y agendar." }
  ],

  // Galería: fotos cuadradas o verticales, JPG, menos de 250 KB cada una.
  // Las fotos que no existan se omiten solas (sin imágenes rotas).
  // Si ninguna existe, la sección Galería no se muestra.
  galeria: [
    { src: "assets/galeria-1.jpg", alt: "Trabajo del negocio 1" },
    { src: "assets/galeria-2.jpg", alt: "Trabajo del negocio 2" },
    { src: "assets/galeria-3.jpg", alt: "Trabajo del negocio 3" },
    { src: "assets/galeria-4.jpg", alt: "Trabajo del negocio 4" },
    { src: "assets/galeria-5.jpg", alt: "Trabajo del negocio 5" },
    { src: "assets/galeria-6.jpg", alt: "Trabajo del negocio 6" }
  ],

  // Formulario de Google Forms.
  // formularioUrlIncrustar: el src="..." del código de inserción (termina en ?embedded=true).
  //   Si se llena, el formulario se muestra dentro de la página.
  // formularioUrlPublica: el enlace de compartir. Si solo llenas esta, sale un botón
  //   que abre el formulario en otra pestaña.
  // Si dejas las dos vacías, la página dice que el formulario aún no está configurado.
  // NO pongas aquí el enlace de la hoja de respuestas.
  formularioUrlPublica: "https://docs.google.com/forms/d/e/1FAIpQLSfDXps4rm2HBE6cMAMt-v2ZKn6IDxthkk2sK9IkFZv4KITTfg/viewform",
  formularioUrlIncrustar: "https://docs.google.com/forms/d/e/1FAIpQLSfDXps4rm2HBE6cMAMt-v2ZKn6IDxthkk2sK9IkFZv4KITTfg/viewform?embedded=true",

  // Horario. En "horas": "10:00 - 19:00" o "Cerrado". Para ocultarlo: horario: [],
  horario: [
    { dia: "Lunes a Viernes", horas: "7:40AM - 10:00PM" },
    { dia: "Jueves", horas: "9:00AM - 9:00PM" },
    { dia: "Sábado", horas: "6:00AM - 9:00AM" }
  ],

  // Dirección en una línea ("" para ocultar)
  direccion: "C. Molino De Silao 522A, Paseos del Molino, 37295 León de los Aldama, Gto.",

  // Google Maps: enlace completo que empiece con https:// ("" para ocultar)
  enlaceMaps: "https://maps.app.goo.gl/bvAp3SdpFEMNt4ef7",

  // Instagram: enlace completo que empiece con https:// ("" para ocultar)
  enlaceInstagram: "https://www.instagram.com/soberano.style/?hl=de"

};
// FIN config.js
