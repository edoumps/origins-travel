import generateJoke from './App'
import './styles/main.scss'
import emoLaugh from './assets/emoLaugh.svg'

const emoImg = document.getElementById('emoImg')
emoImg.src = emoLaugh

console.log(generateJoke())
console.log('Yes Man')
