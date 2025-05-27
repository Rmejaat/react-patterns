"use client"
// Props Functions
// http://localhost:3000/alone/exercise/02.js

// 🐶 Créé 3 props du composant Calcul : 'nb1', 'nb2' pour les nombres à calculer
// et le prop opération qui contiendra la fonction de calcul
// 🤖 utilise la destruction `Calcul({nb1, nb2, operation})`

function Calcul({ nb1, nb2, operation }) {
  // 🐶 Calcule le résulat de l'opération sur 'nb1' et 'nb2'
  // 🤖 operation(nb1, nb2)

  // 🐶 Récupère le nom de l'opération via à la propriété 'name' de 'function'
  // 🤖 `operation.name`
  // 📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/name

  // 🐶 Modifie la chaine de caractère ci-dessous pour la rendre dynamique
  return (
    <div>
      L'opération {operation.name} de {nb1} et {nb2} donne
      {` ${operation(nb1, nb2)}`}
    </div>
  )
}

function App() {
  // 🐶 Déclare une fonction 'somme' et passe la en prop de '<Calcul>'
  // 🤖 <Calcul operation={somme} />
  const somme = (nb1, nb2) => {
    return nb1 + nb2
  }

  const multiplication = (nb1, nb2) => {
    return nb1 * nb2
  }

  const exposant = (nb1, nb2) => {
    return nb1 * Math.exp(nb2)
  }

  // 🐶 Déclare une fonction 'multiplication' et passe la en prop de '<Calcul>'

  // 🐶 Déclare une fonction 'exposant' et passe la en prop de '<Calcul>'
  // 🤖 utilise `a * Math.exp(b)` pour calculer 'a exposant b'
  return (
    <>
      <Calcul nb1={10} nb2={5} operation={somme}></Calcul>
      <Calcul nb1={10} nb2={5} operation={multiplication}></Calcul>
      <Calcul nb1={10} nb2={5} operation={exposant}></Calcul>
    </>
  )
}

export default App
