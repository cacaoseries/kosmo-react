const players = [
	{name: "KYH", score: 30, id: 1},
	{name: "HTY", score: 40, id: 2},
	{name: "KMG", score: 50, id: 3},
	{name: "JDI", score: 60, id: 4}
];
// function component 만드는 법
// 1. 대문자로 시작
// 2. React Element를 리턴
const Header = (props) => {
	console.log(props);
	return (
		<header className="header">
			<h1 className="h1">{props.title}</h1>
			<span className="stats">{props.totalPlayers}</span>
		</header>
	);
}

const Counter = (props) => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> -</button>
			<span className="counter-score">{props.score}</span>
			<button className="counter-action increment"> +</button>
		</div>
	);
}

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">{props.name}</span>
			<Counter score={props.score}/>
		</div>
	);
}

const App = (props) => {
	return (
		<div className="scoreboard">
			<Header title="My Scoreboard" totalPlayers={11} />

			{ // JSX Expression
				props.initPlayers.map((player) => { // Function Expression, Don't type semicolon (;)
					return ( // JSX 리턴 해야하므로 JSX Expression 사용
						<Player name={player.name} score={player.score} key={player.id} />
					)
				})
			}

			{ // Hard cording
				// [
				// 	<Player name="KMG" score={80} />,
				// 	<Player name="KMG" score={80} />,
				// 	<Player name="KMG" score={80} />,
				// 	<Player name="KMG" score={80} />
				// ]
			}
		</div>
	);
};

ReactDOM.render(<App initPlayers={players}/>, document.getElementById('root'));
