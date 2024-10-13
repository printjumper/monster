import monsterLogos from './monsterLogo.png'
import './App.css'
import {useEffect} from 'react'
import {animate} from './animate.js'
function MONSTER() {
	useEffect(() => {animate()}, [])
	return (
		<header className="App-header">
			<a className="App-link" href="https://www.printjumper.com" target="_blank" rel="noopener noreferrer">
				<img id="logo" src={monsterLogos} className="App-logo" alt="logo"/>
			</a>
			Hello
		</header>
	)
}

export default MONSTER

