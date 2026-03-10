
  lottie.loadAnimation({
    container: document.getElementById("robot-principal"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "Multimedia/robot.json"  
  });

const datosRamas = {
  InteligenciaArtificial: {
    titulo: "Inteligencia artificial",
    solucion: "Implementar cámaras con modelos de detección para identificar riesgos automáticamente.",
    pros: [
      "Permite detectar riesgos de forma mas rapida y constante ",
      "Menos supervision manual",
      "Ayuda a actuar antes de que un incidente sea aun mayor",
    ],
    contras: [
      "La calidad depende del entrenamiento del modelo",
      "Puede ser afectada por cambios de luz, angulos o movimiento",
      "Requiere validacion continua para mantener una deteccion confiable"
    ]
  },
  Software: {
    titulo: "Desarrollo de Software",
    solucion: "Crear una plataforma web interna.",
    pros: [
      "Centraliza la informacion en un solo sistema y mejora el orden operativo",
      "Seguimiento de incidentes y estados de atencion",
      "Facilidad de acceso a la informacion para distintas areas"
    ],
    contras: [
      "Necesita una estructura bien dise;ada para que el sistema sea util",
      "Requiere actualizaciones constantes y soporte para mantener funcional todo el tiempo",
      "Hay mas vulnerabilidad en la red"
    ]
  },
  Basededato: {
    titulo: "Base de datos",
    solucion: "Diseñar una base de datos estructurada y un módulo analítico.",
    pros: [
      "Permite identificar patrones, tendencias y puntos criticos con mayor claridad",
      "Mejora toma de desiciones con informacion clara y ordenada"
    ],
    contras: [
      "Depende de que los datos esten completos, correctos y bien registrados",
      "Un mal analisis puede llevar a conclusiones poco precisas o decisiones debiles",
      "Tienes el riesgo ya que veras informacion de manera manual "
    ]
  },
  Redes: {
    titulo: "Internet de las cosas",
    solucion: "Implementar sensores, dispositivos conectados y una red estable para transmitir informacion operativa en tiempo real entre camaras, equipos, paneles y servidores.",
    pros: [
      "Hace posible la comunicacion continua entre equipos, dispositivos y sistemas",
      "Mejora la disponibilidad de información en tiempo real dentro de la operacion",
      "Permite integrar varias tecnologias en una misma solución"
    ],
    contras: [
      "Requiere inversion en equipos, conectividad y mantenimiento tecnico",
      "Una falla en la infraestructura puede interrumpir parte o toda la operacion",
      "Necesita medidas de seguridad para proteger la red y la información transmitida"
    ]
  }
};

const botonesRama = document.querySelectorAll(".vista-principal__boton-rama");
const modalRama = document.getElementById("modal-rama");
const cerrarModalRama = document.getElementById("cerrar-modal-rama");

const modalRamaTitulo = document.getElementById("modal-rama-titulo");
const modalRamaSolucion = document.getElementById("modal-rama-solucion");
const modalRamaPros = document.getElementById("modal-rama-pros");
const modalRamaContras = document.getElementById("modal-rama-contras");

botonesRama.forEach((boton) => {
  boton.addEventListener("click", () => {
    const rama = boton.dataset.rama;
    const info = datosRamas[rama];

    if (!info) return;

    modalRamaTitulo.textContent = info.titulo;
    modalRamaSolucion.textContent = info.solucion;

    modalRamaPros.innerHTML = "";
    info.pros.forEach((pro) => {
      const li = document.createElement("li");
      li.textContent = pro;
      modalRamaPros.appendChild(li);
    });

    modalRamaContras.innerHTML = "";
    info.contras.forEach((contra) => {
      const li = document.createElement("li");
      li.textContent = contra;
      modalRamaContras.appendChild(li);
    });

    modalRama.classList.add("modal-rama--activo");
  });
});

cerrarModalRama.addEventListener("click", () => {
  modalRama.classList.remove("modal-rama--activo");
});

modalRama.addEventListener("click", (e) => {
  if (e.target === modalRama) {
    modalRama.classList.remove("modal-rama--activo");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalRama.classList.remove("modal-rama--activo");
  }
});


const datosAptitudes = {
  "deteccion-fallas": {
    titulo: "Detección de fallas y varias opciones de solución",
    descripcion: "Capacidad para identificar problemas, analizar su causa y plantear más de una alternativa de solución según el contexto.",
    aporte: [
      "Permite responder con más criterio ante errores",
      "Ayuda a no depender de una sola salida",
      "Mejora la toma de decisiones técnicas"
    ]
  },
  "pensamiento-logico": {
    titulo: "Pensamiento lógico",
    descripcion: "Capacidad para analizar situaciones con orden, seguir una secuencia y resolver problemas paso a paso.",
    aporte: [
      "Facilita el análisis de procesos y sistemas",
      "Reduce errores por decisiones impulsivas",
      "Ayuda a construir soluciones más claras"
    ]
  },
  "optimizacion": {
    titulo: "Optimización",
    descripcion: "Capacidad para mejorar procesos, reducir tiempos y aprovechar mejor los recursos disponibles.",
    aporte: [
      "Aumenta la eficiencia del trabajo",
      "Ayuda a ahorrar tiempo y esfuerzo",
      "Mejora resultados sin complicar el proceso"
    ]
  },
  "persistente": {
    titulo: "Persistente",
    descripcion: "Capacidad para mantener el esfuerzo y la constancia hasta terminar una tarea o resolver un problema.",
    aporte: [
      "Ayuda a no abandonar ante dificultades",
      "Favorece el cumplimiento de objetivos",
      "Mejora la continuidad del trabajo"
    ]
  },
  "autonomo": {
    titulo: "Autónomo",
    descripcion: "Capacidad para organizarse, avanzar y resolver tareas con poca supervisión.",
    aporte: [
      "Reduce dependencia constante de otros",
      "Mejora la productividad personal",
      "Facilita el avance en tareas individuales"
    ]
  },
  "observacion-mejora": {
    titulo: "Observación y mejora",
    descripcion: "Capacidad para detectar detalles, identificar oportunidades de mejora y proponer ajustes útiles.",
    aporte: [
      "Permite mejorar procesos existentes",
      "Ayuda a prevenir errores repetitivos",
      "Da valor a la revisión continua"
    ]
  },
  "planificacion": {
    titulo: "Planificación",
    descripcion: "Capacidad para organizar actividades, tiempos y prioridades antes de ejecutar una tarea.",
    aporte: [
      "Reduce desorden y retrasos",
      "Mejora el control del trabajo",
      "Ayuda a cumplir objetivos con más claridad"
    ]
  },
  "disciplinado": {
    titulo: "Disciplinado",
    descripcion: "Capacidad para mantener orden, constancia y cumplimiento en las responsabilidades asignadas.",
    aporte: [
      "Favorece la continuidad del trabajo",
      "Mejora el nivel de responsabilidad",
      "Da confianza en entornos formales"
    ]
  },
  "adaptabilidad": {
    titulo: "Adaptabilidad",
    descripcion: "Capacidad para ajustarse a cambios, nuevas herramientas y distintos entornos de trabajo.",
    aporte: [
      "Facilita aprender rápido",
      "Ayuda a responder ante cambios inesperados",
      "Mejora la integración en distintos contextos"
    ]
  },
  "responsabilidad": {
    titulo: "Responsabilidad",
    descripcion: "Capacidad para cumplir tareas con seriedad, asumir compromisos y responder por los resultados.",
    aporte: [
      "Mejora la confianza del equipo",
      "Favorece el cumplimiento de objetivos",
      "Reduce fallas por descuido"
    ]
  },
  "calidad": {
    titulo: "Resultado de calidad",
    descripcion: "Capacidad para entregar trabajos bien hechos, revisados y con buen nivel de detalle.",
    aporte: [
      "Mejora la imagen profesional",
      "Reduce retrabajos",
      "Aumenta el valor del resultado final"
    ]
  },
  "gestion-procesos": {
    titulo: "Gestión de procesos",
    descripcion: "Capacidad para entender, organizar y mejorar pasos de trabajo dentro de una actividad o sistema.",
    aporte: [
      "Ayuda a ordenar tareas y flujos",
      "Facilita detectar cuellos de botella",
      "Mejora el control operativo"
    ]
  }
};

const botonesAptitud = document.querySelectorAll(".seccion-acerca__aptitud");
const modalAptitud = document.getElementById("modal-aptitud");
const cerrarModalAptitud = document.getElementById("cerrar-modal-aptitud");

const modalAptitudTitulo = document.getElementById("modal-aptitud-titulo");
const modalAptitudDescripcion = document.getElementById("modal-aptitud-descripcion");
const modalAptitudAporte = document.getElementById("modal-aptitud-aporte");

botonesAptitud.forEach((boton) => {
  boton.addEventListener("click", () => {
    const clave = boton.dataset.aptitud;
    const info = datosAptitudes[clave];

    if (!info) return;

    modalAptitudTitulo.textContent = info.titulo;
    modalAptitudDescripcion.textContent = info.descripcion;

    modalAptitudAporte.innerHTML = "";
    info.aporte.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalAptitudAporte.appendChild(li);
    });

    modalAptitud.classList.add("modal-aptitud--activo");
  });
});

cerrarModalAptitud.addEventListener("click", () => {
  modalAptitud.classList.remove("modal-aptitud--activo");
});

modalAptitud.addEventListener("click", (e) => {
  if (e.target === modalAptitud) {
    modalAptitud.classList.remove("modal-aptitud--activo");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalAptitud.classList.remove("modal-aptitud--activo");
  }
});