// Props Drilling
// http://localhost:3000/alone/exercise/04.js
/* eslint-disable no-unused-vars */

// 🐶 Fais évoluer le Header en ajoutant en deux composants enfants <Login /> <MenuBarInfo />
// Login retourne <div>Connexion au site : {siteName} </div>
// MenuBarInfo : <div>Vous avez {nbMessages} messages</div>

// 🐶 Tu vas devoir faire transiter les props depuis App -> Header -> Login/MenuBarInfo

const Login = ({ siteName }) => {
  return <div>Connexion au site : {siteName} </div>
}

const MenuBarInfo = ({ nbMessages }) => {
  return <div>Vous avez {nbMessages} messages</div>
}

function Header({ siteName, nbMessages }) {
  return (
    <>
      <h1>Bienvenue sur {siteName} </h1>
      <Login siteName={siteName} />
      <MenuBarInfo nbMessages={nbMessages} />
    </>
  )
}
function Content({ siteName }) {
  return <div>Article du site {siteName} </div>
}
function Footer({ siteName, email }) {
  return (
    <>
      <CGV siteName={siteName} />
      <About siteName={siteName} email={email} />
    </>
  )
}
function CGV({ siteName }) {
  return <div>CGV du site : {siteName} </div>
}

function About({ siteName, email }) {
  // 🐶 Tu vas devoir faire évoluer <About> pour qu'il utilise l'email de App
  // 🤖 <div>Contactez nous : {email}</div>
  return (
    <>
      <div>A propos du site : {siteName} </div>
      <div>Contactez nous : {email}</div>
    </>
  )
}

function App() {
  const siteName = "mikecodeur.com"
  const email = "contact@mikecodeur.com"
  const nbMessages = 18
  return (
    <>
      <Header siteName={siteName} nbMessages={nbMessages} />
      <Content siteName={siteName} />
      <Footer siteName={siteName} email={email} />
    </>
  )
}

export default App
