export const homeFlows = [
  {
    id: 'conversation',
    title: 'Hablar con Aura Sr',
    description: 'Conversación tranquila para acompañarte, recordar citas y resolver dudas.',
    action: 'Empezar a hablar',
    icon: 'A',
    tone: 'bg-teal-700',
  },
  {
    id: 'family',
    title: 'Familia y amigos',
    description: 'Llamadas, videollamadas y mensajes con una sola pulsación.',
    action: 'Ver contactos',
    icon: 'F',
    tone: 'bg-sky-700',
  },
  {
    id: 'tasks',
    title: 'Gestiones acompañadas',
    description: 'Citas medicas, medicacion, pension y facturas paso a paso.',
    action: 'Pedir ayuda',
    icon: 'G',
    tone: 'bg-amber-700',
  },
  {
    id: 'trip',
    title: 'Viaje virtual',
    description: 'Visitas calmadas a lugares bonitos con narración de Aura Sr.',
    action: 'Viajar hoy',
    icon: 'V',
    tone: 'bg-rose-700',
  },
  {
    id: 'games',
    title: 'Juegos sencillos',
    description: 'Preguntas, refranes y memoria sin prisas ni competición.',
    action: 'Jugar un rato',
    icon: 'J',
    tone: 'bg-indigo-700',
  },
  {
    id: 'wellness',
    title: 'Bienestar',
    description: 'Checks suaves para saber si todo va bien y evitar aislamiento.',
    action: 'Hacer check',
    icon: 'B',
    tone: 'bg-emerald-700',
  },
  {
    id: 'security',
    title: 'Seguridad digital',
    description: 'Aura Sr revisa mensajes sospechosos y los explica sin tecnicismos.',
    action: 'Revisar mensaje',
    icon: 'S',
    tone: 'bg-slate-800',
  },
]

export const conversationMessages = [
  {
    from: 'aura',
    text: 'Buenos días Antonio. Me alegra verte. ¿Cómo te encuentras hoy?',
    time: '09:02',
  },
  {
    from: 'user',
    text: 'Estoy bien, un poco pendiente de mis citas.',
    time: '09:03',
  },
  {
    from: 'aura',
    text: 'Claro. Si quieres, revisamos juntos tus citas médicas y te digo solo lo importante.',
    time: '09:03',
  },
  {
    from: 'aura',
    text: 'También hace dos días que no hablas con María. ¿Quieres que la llamemos después?',
    time: '09:04',
  },
]

export const contacts = [
  {
    id: 'maria',
    name: 'Maria',
    relation: 'Hija',
    availability: 'Disponible ahora',
    initials: 'M',
    gradient: 'linear-gradient(135deg, #f8c8b1, #f7e4b7)',
    note: 'Última llamada: hace 2 días',
  },
  {
    id: 'carlos',
    name: 'Carlos',
    relation: 'Nieto',
    availability: 'Puede contestar por la tarde',
    initials: 'C',
    gradient: 'linear-gradient(135deg, #b6d7f2, #c6eadf)',
    note: 'Le gusta enseñarte fotos nuevas',
  },
  {
    id: 'ana',
    name: 'Ana',
    relation: 'Amiga',
    availability: 'Mensaje recomendado',
    initials: 'A',
    gradient: 'linear-gradient(135deg, #d9c7f3, #f7c7d9)',
    note: 'Soléis hablar los sábados',
  },
]

export const assistedTasks = [
  {
    id: 'medical',
    title: 'Pedir cita médica',
    detail: 'Aura Sr acompaña la solicitud sin mostrar formularios difíciles.',
    status: 'Cita encontrada',
    steps: [
      'Ya he encontrado tu centro médico habitual.',
      'Hay una cita disponible el jueves a las 10:30.',
      'Si te parece bien, la dejamos preparada y te avisaré la tarde anterior.',
    ],
  },
  {
    id: 'medication',
    title: 'Revisar medicación',
    detail: 'Recordatorio claro de tomas y posibles dudas.',
    status: 'Todo en orden',
    steps: [
      'Hoy toca la pastilla de la tensión después del desayuno.',
      'No veo cambios nuevos en tu pauta semanal.',
      'Si notas algo raro, puedo ayudarte a preparar una pregunta para el médico.',
    ],
  },
  {
    id: 'pension',
    title: 'Consultar pensión',
    detail: 'Resumen simple, sin pantallas administrativas.',
    status: 'Resumen listo',
    steps: [
      'He preparado un resumen sencillo de tu pensión de este mes.',
      'La cantidad prevista aparece como ingresada.',
      'No hace falta que hagas nada más ahora.',
    ],
  },
  {
    id: 'invoice',
    title: 'Revisar factura',
    detail: 'Aura Sr traduce los importes y detecta cambios.',
    status: 'Factura explicada',
    steps: [
      'Esta factura de luz es un poco más alta que la anterior.',
      'La subida viene sobre todo por consumo de calefacción.',
      'Puedo guardar esta explicación para comentarla con María si quieres.',
    ],
  },
]

export const destinations = [
  {
    id: 'florence',
    name: 'Florencia',
    subtitle: 'Arte, plazas tranquilas y atardeceres sobre el Arno.',
    gradient: 'linear-gradient(135deg, #d99b6c, #f4d7a6 45%, #87b5ad)',
    narration:
      'Hoy paseamos despacio por Florencia. A la izquierda queda el río Arno y, al fondo, el Ponte Vecchio con sus pequeñas tiendas.',
    facts: ['Ponte Vecchio', 'Catedral de Santa Maria del Fiore', 'Piazza della Signoria'],
  },
  {
    id: 'paris',
    name: 'Paris',
    subtitle: 'Un paseo sereno junto al Sena.',
    gradient: 'linear-gradient(135deg, #8fb4d9, #f4d2c2 50%, #c4b7e8)',
    narration:
      'Ahora miramos París sin prisa. Aura Sr te cuenta solo una curiosidad cada vez para que puedas disfrutar del paisaje.',
    facts: ['Torre Eiffel', 'Rio Sena', 'Jardines de Luxemburgo'],
  },
  {
    id: 'granada',
    name: 'Granada',
    subtitle: 'Historia, música suave y vistas a la Alhambra.',
    gradient: 'linear-gradient(135deg, #b96558, #f0c98f 48%, #88a983)',
    narration:
      'En Granada escuchamos el agua de los patios y vemos la Alhambra iluminada. Si quieres, podemos quedarnos aqui unos minutos.',
    facts: ['La Alhambra', 'Mirador de San Nicolas', 'Barrio del Albaicin'],
  },
]

export const games = [
  {
    id: 'trivia',
    title: 'Pregunta cultural',
    prompt: '¿En qué ciudad está la Torre Eiffel?',
    options: ['Paris', 'Roma', 'Lisboa'],
    answer: 'Paris',
  },
  {
    id: 'sayings',
    title: 'Completa el refran',
    prompt: 'A quien madruga...',
    options: ['Dios le ayuda', 'se le olvida', 'canta mejor'],
    answer: 'Dios le ayuda',
  },
  {
    id: 'music',
    title: 'Recuerdos musicales',
    prompt: '¿Qué cantante popularizó "Mediterráneo"?',
    options: ['Joan Manuel Serrat', 'Niño Bravo', 'Rocío Jurado'],
    answer: 'Joan Manuel Serrat',
  },
]

export const wellnessChecks = [
  'Buenos días Antonio, ¿todo bien hoy?',
  'No hemos hablado desde ayer. Solo quería saber si estás tranquilo.',
  'Si necesitas algo, puedo avisar a María con un mensaje sencillo.',
]

export const securityExample = {
  sender: 'Número desconocido',
  message:
    'Su cuenta bancaria sera bloqueada hoy. Pulse este enlace para confirmar sus datos inmediatamente.',
  verdict: 'Este mensaje parece sospechoso.',
  advice: 'No pulses el enlace. Si quieres, llamamos juntos a tu banco desde un numero seguro.',
  explanation:
    'Aura Sr ha detectado urgencia, un enlace desconocido y una petición de datos personales. Son señales habituales de fraude.',
}
