import TopElement from "./components/TopElement";
import Card from "./components/Card";
function App() {
	return (
		<div className="App">
			<TopElement />
			<Card name="Food" curr={200} max={1000} size={320} />
			<Card name="Entertainment" curr={110} max={500} size={200} />
			<Card name="Medical" curr={300} max={1500} size={300} />
		</div>
	);
}

export default App;
