const $volumeMusic = document.getElementById('volume--music')
const $audioMusic = document.getElementById('audio-music')

$volumeMusic.setAttribute(
  'value',
  window.localStorage.getItem('volume-music') || $audioMusic.value
)

$audioMusic.volume = $volumeMusic.value

$volumeMusic.addEventListener('change', event => {
  $audioMusic.volume = event.target.value
  window.localStorage.setItem('volume-music', event.target.value)
})

const $volumeSFX = document.getElementById('volume-sfx')
const $audioSFX = document.getElementById('audio-sfx')

$volumeSFX.setAttribute(
  'value',
  window.localStorage.getItem('volume-sfx') || $audioSFX.value
)

$audioSFX.volume = $volumeSFX.value

$volumeSFX.addEventListener('change', event => {
  $audioSFX.volume = event.target.value
  window.localStorage.setItem('volume-sfx', event.target.value)
})
