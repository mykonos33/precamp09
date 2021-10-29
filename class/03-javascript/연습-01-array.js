const classmates=["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']0: "철수"1: "영희"2: "훈이"length: 3[[Prototype]]: Array(0)
classmates.length
// 3
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates.includes("훈")
// false
classmates.includes("훈이")
// true
classmates.push("가나다")  
// 4
classmates
// (4) ['철수', '영희', '훈이', '가나다']
classmates.pop()
// '가나다'
classmates.pop()
// '훈이'
classmates.pop("철수")
// '영희' - 괄호안은 의미 없음 
classmates
