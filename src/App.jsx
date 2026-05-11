import { useState } from 'react'
import { BRAND_NAME } from './brand'
import { AppShell } from './components/AppShell'
import { AssistedTasks } from './screens/AssistedTasks'
import { CognitiveGames } from './screens/CognitiveGames'
import { Conversation } from './screens/Conversation'
import { DigitalSecurity } from './screens/DigitalSecurity'
import { Family } from './screens/Family'
import { Home } from './screens/Home'
import { VirtualTrip } from './screens/VirtualTrip'
import { WellnessCheck } from './screens/WellnessCheck'

const screens = {
  home: {
    title: BRAND_NAME,
    subtitle: 'Acompañamiento digital sencillo para personas mayores.',
    component: Home,
  },
  conversation: {
    title: `Hablar con ${BRAND_NAME}`,
    subtitle: 'Una conversación natural, grande y tranquila.',
    component: Conversation,
  },
  family: {
    title: 'Familia y amigos',
    subtitle: 'Contactar con personas de confianza sin menus complicados.',
    component: Family,
  },
  tasks: {
    title: 'Gestiones acompañadas',
    subtitle: 'Procesos digitales simulados, explicados paso a paso.',
    component: AssistedTasks,
  },
  trip: {
    title: 'Viaje virtual',
    subtitle: 'Imágenes grandes, narración calmada y recuerdos positivos.',
    component: VirtualTrip,
  },
  games: {
    title: 'Juegos sencillos',
    subtitle: 'Estimulación cognitiva amable, sin presión y sin marcadores agresivos.',
    component: CognitiveGames,
  },
  wellness: {
    title: 'Bienestar',
    subtitle: 'Check-ins suaves para reducir aislamiento y dar tranquilidad.',
    component: WellnessCheck,
  },
  security: {
    title: 'Seguridad digital',
    subtitle: 'Mensajes sospechosos explicados con claridad y sin alarmismo.',
    component: DigitalSecurity,
  },
}

function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  const screen = screens[currentScreen] ?? screens.home
  const Screen = screen.component

  return (
    <AppShell
      title={screen.title}
      subtitle={screen.subtitle}
      showBack={currentScreen !== 'home'}
      onHome={() => setCurrentScreen('home')}
    >
      <Screen onNavigate={setCurrentScreen} />
    </AppShell>
  )
}

export default App
