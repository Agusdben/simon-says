import './style.css'
import 'normalize.css'
import { handleGame } from './scripts/handleGame'
import './scripts/volume'

const $playBtn = document.getElementById('game-play')
$playBtn.addEventListener('click', () => {
  handleGame()
})
