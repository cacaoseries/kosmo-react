// function component 만드는 법
// 1. 대문자로 시작
// 2. React Element를 리턴
const Header = () => (
	<header className="header">
		<h1 className="h1">Scoreboard</h1>
		<span className="stats">Players: 1</span>
	</header>
);

const Counter = () => (
	<div className="counter">
		<button className="counter-action decrement"> -</button>
		<span className="counter-score">35</span>
		<button className="counter-action increment"> +</button>
	</div>
);

const Player = () => (
	<div className="player">
		<span className="player-name">LDK</span>
		<Counter/>
	</div>
);

const App = () => (
	<div className="scoreboard">
		<Header/>

		<Player/>
	</div>
);


ReactDOM.render(<App/>, document.getElementById('root'));