// import React from "react";
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
};

// 클래스 컴포넌트
// 1: React.Component 상속
// 2: render() 오버라이딩 후 React Element를 리턴
// 3: 속성 앞에 this
class Counter extends React.Component {
	state = { // 생성자 없이 명시적으로 속성을 초기화
		score: 30
	};

	increment = () => {
		console.log('increment');
		// this.state.score += 1; // UI 렌더링 안됨
		// 1. 반드시 setState()로 상태 변경
		// 2. 비동기로 동작하므로 콜백 함수로 상태 변경해야 함
		// 3. Merge(Overwrite)된다
		//this.setState({score: this.state.score + 1}); // 상속받은 메소드, setState()는 비동기 동작
		this.setState((prevState) => ({ // json의 중괄호로 인식하지 못하므로 { return } 생략하려면 소괄호로 json을 감싼다
			score: prevState.score + 1 // overwriting 되므로 필요한 속성만 변경 가능
		}));
	};

	// react event = 선언형 스타일: 함수 선언문을 우측에 배치
	render() { // overriding
		return (
			<div className="counter">
				<button className="counter-action decrement"> -</button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}> +</button>
			</div>
		);
	}
}

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				{/*3. 콜백 함수 호출*/}
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}> X </button>
				{props.name}
			</span>
			<Counter score={props.score}/>
		</div>
	);
};

class App extends React.Component {
	state = {
		players : [
			{name: "KYH", score: 30, id: 1},
			{name: "HTY", score: 40, id: 2},
			{name: "KMG", score: 50, id: 3},
			{name: "JDI", score: 60, id: 4}
		]
	};
	render() {
		return (
			<div className="scoreboard">
				<Header title="My Scoreboard" totalPlayers={11} />

				{ // JSX Expression
					this.state.players.map((player) => { // Function Expression, Don't type semicolon (;)
						return ( // JSX 리턴 해야하므로 JSX Expression 사용
							<Player name={player.name} score={player.score} id={player.id} key={player.id}
							removePlayer={this.handleRemovePlayer}/>
						)
					})
				}
			</div>
		)
	}
	handleRemovePlayer = (id) => { // 첫번째 parameter는 event
		console.log('handleRemovePlayer: ', id);
		this.setState(prevState => ({
			players : prevState.players.filter(player => player.id !== id)
		}));
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
