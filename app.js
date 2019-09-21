// function component 만드는 법
// 1. 대문자로 시작
// 2. React Element를 리턴
const Header = () => (
	<header className="header">
		<h1 className="h1">Scoreboard</h1>
		<span className="stats">Players: 1</span>
	</header>
);

ReactDOM.render(<Header/>, document.getElementById('root'));