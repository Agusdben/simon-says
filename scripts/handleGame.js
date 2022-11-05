import { modalGameOver } from './modalGameOver'

const ANIMATION_DURATION = 300

const $playBtn = document.getElementById('game-play')
const $simonLogo = document.getElementById('simon-logo')

const $simonGreen = document.getElementById('simon-green')
const $simonRed = document.getElementById('simon-red')
const $simonYellow = document.getElementById('simon-yellow')
const $simonBlue = document.getElementById('simon-blue')
const $score = document.getElementById('score')
const $stage = document.getElementById('stage')
const simonButtons = [$simonGreen, $simonRed, $simonYellow, $simonBlue]

const $audioSFX = document.getElementById('audio-sfx')
const $audioMusic = document.getElementById('audio-music')
let game = {}

const animateBtn = (btn, duration) => {
  btn.style.transform = 'scale(1.1) '
  btn.style.filter = 'brightness(150%)'
  setTimeout(() => {
    btn.style.transform = 'scale(1)'
    btn.style.filter = 'brightness(100%)'
  }, duration)
}

const playBtnSong = btn => {
  const id = btn.getAttribute('id')
  const $sourceSFX = document.getElementById('source-sfx')
  $sourceSFX.src = `./SFX/${id}.mp3`
  $audioSFX.load()
  $audioSFX.play()
}

const disableSimonBtns = () => {
  simonButtons.forEach(btn => {
    btn.setAttribute('disabled', true)
  })
}

const enableSimonBtns = () => {
  simonButtons.forEach(btn => {
    btn.removeAttribute('disabled')
  })
}

simonButtons.forEach(btn => {
  btn.addEventListener('click', () => handleSimonBtn(btn))
})

const handleSimonBtn = btn => {
  const correctBtn = game.pattern[game.currentPlayerAttempt].getAttribute('id')
  const clickedBtn = btn.getAttribute('id')
  disableSimonBtns()

  animateBtn(btn, ANIMATION_DURATION)
  playBtnSong(btn)
  if (correctBtn !== clickedBtn) {
    disableSimonBtns()
    modalGameOver({ title: 'Game over', score: game.score })
    $playBtn.removeAttribute('disabled')
    $playBtn.style.display = 'block'
    $simonLogo.style.display = 'none'
    return
  }

  enableSimonBtns()

  game.score += 1
  $score.innerText = game.score

  if (game.currentPlayerAttempt === game.pattern.length - 1) {
    addToPattern()
    showPattern()
    $stage.innerText = game.pattern.length
    return
  }
  game.currentPlayerAttempt++
}

const addToPattern = () => {
  game.currentPlayerAttempt = 0
  game.pattern.push(
    simonButtons[Math.floor(Math.random() * simonButtons.length)]
  )
}

const showPattern = () => {
  disableSimonBtns()

  let index = 0
  const animate = setInterval(() => {
    const btn = game.pattern[index]
    animateBtn(btn, ANIMATION_DURATION)
    playBtnSong(btn)
    if (index === game.pattern.length - 1) {
      clearInterval(animate)
      enableSimonBtns()
    }
    index += 1
  }, ANIMATION_DURATION * 2) // two times becouse we need await to timeout scale 1
}

export const handleGame = () => {
  $playBtn.setAttribute('disabled', 'true')
  $playBtn.style.display = 'none'
  $simonLogo.style.display = 'block'
  $audioMusic.play()
  $score.innerText = '0'
  $stage.innerText = '0'
  game = {
    pattern: [],
    currentPlayerAttempt: 0,
    score: 0
  }

  addToPattern()
  showPattern()
}
