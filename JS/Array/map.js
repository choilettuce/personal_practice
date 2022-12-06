// 실습1
let arr = [1,2,3,4,5]

let multhreeArr = arr.map(function(element) {
    return element *3;
});

console.log(multhreeArr);

//실습2
let users = [
    {Name : "사나", age: "21"},
    {Name : "나연", age: "23"},
    {Name : "지효", age: "24"}
  ];
  
  let usersAge = users.map(function(element){
      return `${element.Name} ${element.age}`;
  })
  
  console.log(usersAge);
  