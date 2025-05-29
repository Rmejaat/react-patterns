"use client"

import { useState } from "react"

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

  const [result, setResult] = useState()
  const [nombre1, setNombre1] = useState(nb1)
  const [nombre2, setNombre2] = useState(nb2)

  const handleClick = (a = nb1, b = nb2) => {
    if (a instanceof Object) {
      a = nb1
    }
    setNombre1(a)
    setNombre2(b)
    setResult(operation(nombre1, nombre2))
  }

  return (
    <div>
      {result === undefined
        ? null
        : `L'opération ${operation.name} de ${nombre1} et ${nombre2} donne
      ${result}
      `}
      <button onClick={handleClick}>Caculer {operation.name}</button>
      <button onClick={() => handleClick(50, 20)}>
        Caculer {operation.name}
      </button>
    </div>
  )
}

function App() {
  // 🐶 Déclare une fonction 'somme' et passe la en prop de '<Calcul>'
  // 🤖 <Calcul operation={somme} />
  const somme = (nb1, nb2) => nb1 + nb2

  const multiplication = (nb1, nb2) => nb1 * nb2

  const exposant = (nb1, nb2) => nb1 * Math.exp(nb2)

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
