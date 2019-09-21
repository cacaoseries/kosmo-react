function person() {
	this.arms = 2;
	this.legs = 2;
}

// arms의 출력 결과는 무엇인가?
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는?
console.log(person());
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가?
console.log(arms);
