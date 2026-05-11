# Aura Sr - Prototipo PMV

Aura Sr es un prototipo frontend estatico para una practica de Iniciativa Emprendedora de la UOC.
Representa una solucion conversacional orientada a personas mayores con baja competencia digital.

El objetivo no es conectar servicios reales, sino mostrar un PMV visual, navegable y defendible:

- Sin backend.
- Sin autenticacion real.
- Sin APIs reales.
- Sin funcionalidades productivas reales.
- Todos los datos y respuestas son simulados.

## Ejecutar

```bash
npm install
npm run dev
```

Despues abre la URL que muestra Vite, normalmente:

```bash
http://localhost:5173/
```

No abras `index.html` directamente con doble clic, porque Vite necesita servir los modulos de React durante el desarrollo.

Validacion:

```bash
npm run lint
npm run build
```

## Arquitectura

```text
src/
  App.jsx                 Navegacion simulada mediante estado local
  index.css               TailwindCSS, estilos base y animaciones
  data/
    mockData.js           Contenido ficticio del prototipo
  components/
    AppShell.jsx          Marco principal de la aplicacion
    BigButton.jsx         Botones tactiles grandes
    ChatBubble.jsx        Mensajes conversacionales
    ContactCard.jsx       Contactos familiares
    DestinationCarousel.jsx
    FlowCard.jsx
    HomeCard.jsx
    StatusPill.jsx
    StepPanel.jsx
    VoiceButton.jsx
  screens/
    Home.jsx
    Conversation.jsx
    Family.jsx
    AssistedTasks.jsx
    VirtualTrip.jsx
    CognitiveGames.jsx
    WellnessCheck.jsx
    DigitalSecurity.jsx
```

## Como Navegar

La pantalla inicial muestra tarjetas grandes. Cada tarjeta abre un flujo representativo:

- **Hablar con Aura Sr**: conversacion principal con IA y boton gigante de voz simulado.
- **Familia y amigos**: llamadas, videollamadas y mensajes con familiares.
- **Gestiones acompanadas**: cita medica, medicacion, pension y factura explicadas paso a paso.
- **Viaje virtual**: destinos como Florencia, Paris y Granada con narracion calmada.
- **Juegos sencillos**: trivial, refranes y recuerdos musicales sin presion.
- **Bienestar**: check-ins suaves para confirmar que la persona esta bien.
- **Seguridad digital**: deteccion visual de un posible fraude y explicacion sencilla.

Siempre se puede volver con el boton **Volver al inicio**.

## Criterios UX Representados

- Botones grandes y tactiles.
- Texto amplio y muy legible.
- Alto contraste y mucho espacio en blanco.
- Maximo de acciones visibles por pantalla.
- Lenguaje claro, amable y no tecnico.
- Interaccion conversacional como eje del producto.
- Experiencia optimizada para tablet y utilizable en movil/escritorio.
