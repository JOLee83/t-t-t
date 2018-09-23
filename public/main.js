let playerCount = 0

const checkWinner = () => {
  if (document.querySelector('.zero').textContent !== '' && document.querySelector('.one').textContent !== '' && document.querySelector('.two').textContent !== '' &&
    document.querySelector('.three').textContent !== '' && document.querySelector('.four').textContent !== '' && document.querySelector('.five').textContent !== '' &&
    document.querySelector('.six').textContent !== '' && document.querySelector('.seven').textContent !== '' && document.querySelector('.eight').textContent !== '') {
    document.querySelector('h2').textContent = 'DRAW'
  }
  if ((document.querySelector('.zero').textContent === 'X' && document.querySelector('.one').textContent === 'X' && document.querySelector('.two').textContent === 'X')
    || (document.querySelector('.three').textContent === 'X' && document.querySelector('.four').textContent === 'X' && document.querySelector('.five').textContent === 'X')
    || (document.querySelector('.six').textContent === 'X' && document.querySelector('.seven').textContent === 'X' && document.querySelector('.eight').textContent === 'X')
    || (document.querySelector('.zero').textContent === 'X' && document.querySelector('.three').textContent === 'X' && document.querySelector('.six').textContent === 'X')
    || (document.querySelector('.one').textContent === 'X' && document.querySelector('.four').textContent === 'X' && document.querySelector('.seven').textContent === 'X')
    || (document.querySelector('.two').textContent === 'X' && document.querySelector('.five').textContent === 'X' && document.querySelector('.eight').textContent === 'X')
    || (document.querySelector('.zero').textContent === 'X' && document.querySelector('.three').textContent === 'X' && document.querySelector('.six').textContent === 'X')
    || (document.querySelector('.zero').textContent === 'X' && document.querySelector('.four').textContent === 'X' && document.querySelector('.eight').textContent === 'X')
    || (document.querySelector('.two').textContent === 'X' && document.querySelector('.four').textContent === 'X' && document.querySelector('.six').textContent === 'X')) {
    document.querySelector('h2').textContent = 'X wins'
    document.querySelector('.zero').removeEventListener('click', playerTurn0)
    document.querySelector('.one').removeEventListener('click', playerTurn1)
    document.querySelector('.two').removeEventListener('click', playerTurn2)
    document.querySelector('.three').removeEventListener('click', playerTurn3)
    document.querySelector('.four').removeEventListener('click', playerTurn4)
    document.querySelector('.five').removeEventListener('click', playerTurn5)
    document.querySelector('.six').removeEventListener('click', playerTurn6)
    document.querySelector('.seven').removeEventListener('click', playerTurn7)
    document.querySelector('.eight').removeEventListener('click', playerTurn8)
  }
  if ((document.querySelector('.zero').textContent === 'O' && document.querySelector('.one').textContent === 'O' && document.querySelector('.two').textContent === 'O')
    || (document.querySelector('.three').textContent === 'O' && document.querySelector('.four').textContent === 'O' && document.querySelector('.five').textContent === 'O')
    || (document.querySelector('.six').textContent === 'O' && document.querySelector('.seven').textContent === 'O' && document.querySelector('.eight').textContent === 'O')
    || (document.querySelector('.zero').textContent === 'O' && document.querySelector('.three').textContent === 'O' && document.querySelector('.six').textContent === 'O')
    || (document.querySelector('.one').textContent === 'O' && document.querySelector('.four').textContent === 'O' && document.querySelector('.seven').textContent === 'O')
    || (document.querySelector('.two').textContent === 'O' && document.querySelector('.five').textContent === 'O' && document.querySelector('.eight').textContent === 'O')
    || (document.querySelector('.zero').textContent === 'O' && document.querySelector('.three').textContent === 'O' && document.querySelector('.six').textContent === 'O')
    || (document.querySelector('.zero').textContent === 'O' && document.querySelector('.four').textContent === 'O' && document.querySelector('.eight').textContent === 'O')
    || (document.querySelector('.two').textContent === 'O' && document.querySelector('.four').textContent === 'O' && document.querySelector('.six').textContent === 'O')) {
    document.querySelector('h2').textContent = 'O wins'
    document.querySelector('.zero').removeEventListener('click', playerTurn0)
    document.querySelector('.one').removeEventListener('click', playerTurn1)
    document.querySelector('.two').removeEventListener('click', playerTurn2)
    document.querySelector('.three').removeEventListener('click', playerTurn3)
    document.querySelector('.four').removeEventListener('click', playerTurn4)
    document.querySelector('.five').removeEventListener('click', playerTurn5)
    document.querySelector('.six').removeEventListener('click', playerTurn6)
    document.querySelector('.seven').removeEventListener('click', playerTurn7)
    document.querySelector('.eight').removeEventListener('click', playerTurn8)
  }
}
let playerTurn0 = () => {
  if (playerCount === 0) {
<<<<<<< HEAD
    document.querySelector('.zero').innerHTML = 'X'
=======
    document.querySelector('.zero').innerHTML = '<h3 class="red zero">X</h3>'
>>>>>>> 76aee17b04fbb74321757ac49497a4013a7b980d
    playerCount = 1
  }
  else {
    document.querySelector('.zero').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.zero').removeEventListener('click', playerTurn0)
  checkWinner()
}
let playerTurn1 = () => {
  if (playerCount === 0) {
    document.querySelector('.one').innerHTML = '<h3 class="red zero">X</h3>'
    playerCount = 1
  }
  else {
    document.querySelector('.one').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.one').removeEventListener('click', playerTurn1)
  checkWinner()
}
let playerTurn2 = () => {
  if (playerCount === 0) {
    document.querySelector('.two').innerHTML = '<h3 class="red zero">X</h3>'
    playerCount = 1
  }
  else {
    document.querySelector('.two').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.two').removeEventListener('click', playerTurn2)
  checkWinner()
}
let playerTurn3 = () => {
  if (playerCount === 0) {
    document.querySelector('.three').innerHTML = '<h3 class="red zero">X</h3>'
    playerCount = 1
  }
  else {
    document.querySelector('.three').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.three').removeEventListener('click', playerTurn3)
  checkWinner()
}
let playerTurn4 = () => {
  if (playerCount === 0) {
    document.querySelector('.four').innerHTML = '<h3 class="red zero">X</h3>'
    playerCount = 1
  }
  else {
    document.querySelector('.four').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.four').removeEventListener('click', playerTurn4)
  checkWinner()
}
let playerTurn5 = () => {
  if (playerCount === 0) {
    document.querySelector('.five').innerHTML = '<h3 class="red zero">X</h3>'
    playerCount = 1
  }
  else {
    document.querySelector('.five').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.five').removeEventListener('click', playerTurn5)
  checkWinner()
}
let playerTurn6 = () => {
  if (playerCount === 0) {
    document.querySelector('.six').innerHTML = '<h3 class="red zero">X</h3>'
    playerCount = 1
  }
  else {
    document.querySelector('.six').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.six').removeEventListener('click', playerTurn6)
  checkWinner()
}
let playerTurn7 = () => {
  if (playerCount === 0) {
    document.querySelector('.seven').innerHTML = '<h3 class="red zero">X</h3>'
    playerCount = 1
  }
  else {
    document.querySelector('.seven').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.seven').removeEventListener('click', playerTurn7)
  checkWinner()
}
let playerTurn8 = () => {
  if (playerCount === 0) {
    document.querySelector('.eight').innerHTML = '<h3 class="red zero">X</h3>'
    playerCount = 1
  }
  else {
    document.querySelector('.eight').innerHTML = '<h3 class="blue zero">O</h3>'
    playerCount = 0
  }
  document.querySelector('.eight').removeEventListener('click', playerTurn8)
  checkWinner()
}
const main = () => {
  document.querySelector('.zero').addEventListener('click', playerTurn0)
  document.querySelector('.one').addEventListener('click', playerTurn1)
  document.querySelector('.two').addEventListener('click', playerTurn2)
  document.querySelector('.three').addEventListener('click', playerTurn3)
  document.querySelector('.four').addEventListener('click', playerTurn4)
  document.querySelector('.five').addEventListener('click', playerTurn5)
  document.querySelector('.six').addEventListener('click', playerTurn6)
  document.querySelector('.seven').addEventListener('click', playerTurn7)
  document.querySelector('.eight').addEventListener('click', playerTurn8)

  document.querySelector('.reset').addEventListener('click', () => {
    document.location = '/'
  })
}
document.addEventListener('DOMContentLoaded', main)