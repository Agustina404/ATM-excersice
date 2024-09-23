let value = 1000

function add(amount) {
  value += amount
  return true
}

function withdraw(amount) {
  if (amount < value) {
    return false
  }
  value -= amount
  return true
}

function actionMade(action) {
  let amount
  if (action === '1') {
    amount = parseInt(prompt('Digite el valor a consignar: '))
    return add(amount)
  } else if (action === '2') {
    amount = parseInt(prompt('Digite el valor a retirar: '))
    return withdraw(amount)
  }
  return false
}

function main() {
  while (true) {
    let action = prompt('¿Qué opción desea? 1. Consignar 2. Retirar 3. Salir')
    if (action === '3') {
      alert('¡Hasta luego!')
      break
    }

    let result = actionMade(action)
    if (result === false) {
      alert('Esta acción no se ha podido realizar.')
    } else {
      alert('Acción realizada, nuevo saldo: ' + value)
    }
  }
}

main()
