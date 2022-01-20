import './App.css'
import Heading from './components/static/heading'
import Card from './components/static/card'
import movielist from './movielist'

function App() {
	return (
		<div className="App">
			<Heading />
			<div className='movies'>
				{movielist.map((movie, i) => <Card key={i} data={movie}/>)}  
			</div>
		
		</div>
	)
}

export default App
