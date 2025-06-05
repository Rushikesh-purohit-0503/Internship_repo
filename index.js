// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let totalsum=0;
// for (let salary in salaries){
//     totalsum += salaries[salary]
// }
// console.log(totalsum)



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(obj){
//     for (prop in obj){
//         if (typeof obj[prop] == "number"){
//             obj[prop]=obj[prop]*2
//         }
//     }
//     console.log(obj)
// }

// multiplyNumeric(menu)


// let user = {
//     firstName: "Ilya",
//     sayHi() {

//         let arrow = () => {
//             let firstName = "rushi";
//             alert(this.firstName)
//         };
//         arrow();
//     }
// };

// user.sayHi(); 

// function Calculator(){

//      this.read=()=>{
//         this.a=+prompt("Enter a");
//         this.b=+prompt("Enter b");
//     }
//      this.sum=()=>{
//          return this.a+this.b;


//     }
//     this.mul=()=>{
//         return this.a*this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return 10;
// }

// function f() {
//     wait().then(result => alert(result))
//     // ...what should you write here?
//     // we need to call async wait() and wait to get 10
//     // remember, we can't use "await"
// }
// f()




// const slider = document.getElementById('slider');
// const sliderValue = document.getElementById('sliderValue');

// slider.addEventListener('input', () => {
//     sliderValue.textContent = slider.value;
// });
// textarea.value=localStorage.getItem('textContent');

// textarea.oninput = ()=>{
//   localStorage.setItem('textContent',textarea.value)
// }


// let str = "Hey There";

// let regexp ;

// alert( str.match(/\w/g) ); // array of matches: 7,9,0,3,1,2,3,4,5,6,7

// // let's make the digits-only phone number of them:
// alert( str.match(regexp).join('') ); // 79031234567

// let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

// socket.onopen = function(e) {
//   alert("[open] Connection established");
//   alert("Sending to server");
//   socket.send("My name is John");
// };

// socket.onmessage = function(event) {
//   alert(`[message] Data received from server: ${event.data}`);
// };

// socket.onclose = function(event) {
//   if (event.wasClean) {
//     alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//   } else {
//     // e.g. server process killed or network down
//     // event.code is usually 1006 in this case
//     alert('[close] Connection died');
//   }
// };

// socket.onerror = function(error) {
//   alert(`[error]`);
// };

// let socket = new WebSocket("wss://javascript.info/article/websocket/chat/ws",["soap", "wamp"]);

// // send message from the form
// document.forms.publish.onsubmit = function() {
//   let outgoingMessage = this.message.value;

//   socket.send(outgoingMessage);
//   return true;
// };

// // message received - show the message in div#messages
// socket.onmessage = function(event) {
//   let message = event.data;

//   let messageElem = document.createElement('div');
//   messageElem.textContent = message;
//   document.getElementById('messages').prepend(messageElem);
// }

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }

// function handleError(){
//   console.log("error occured")
// }

// loadScript('1.js', step1);

// function step1(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     console.log("successfully loaded 1.js");
//     loadScript('2.js', step2);

//   }
// }

// function step2(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('3.js', step3);
//     console.log("successfully loaded 2.js");
//   }
// }

// function step3(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...continue after all scripts are loaded (*)
//     console.log("successfully loaded 3.js");
//   }
// }




// Make a request for user.json
async function getData() {
  let data = await fetch(`https://api.github.com/users/falcon71181`)
    // Load the response as json
    .then(response => response.json())
    // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
    .then(githubUser => {
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);
      
      img.addEventListener('click', () => {
        img.style.border = '5px solid grey'
      })


      let public_repo = document.createElement('p');
      public_repo.textContent = githubUser.public_repos;
      document.body.append(public_repo)
      // console.log(public_repo.textContent);
      // (*)
    }).catch(error => {
      throw new Error(error)
    });
}

getData()



// let x=prompt("Enter a arithmetic expression: ")
// // let y = x.toString()s
// let ans= eval(x)
// alert(ans)
// console.log(x);


// let str = `Winnie: 1
// Piglet: 2
// Eeyore: 3`;
// console.log( str.match(/^\d/gm) ); // 1,2,3

// regexp for The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.
// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456.
// P.S. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result.
// P.P.S. The regexp shouldn’t match 123:456.
// alert("Breakfast at 09:58 in the room 123:456.".match(/\b\d\d\b:\b\d\d\b/));


// // No need to escape
// let regexp = /[-().^+]/g;

// alert( "1 + 2 - 3".match(regexp) ); // Matches +, -


// alert( "I'm not 68, but 1234 years old".match(/\d{3,5}/) ); // "1234" The range: {3,5}, match 3-5 times



// alert( "<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi) ); // <h1>, </h1> 


// Create a regexp to find ellipsis: 3 (or more?) dots in a row.
// let regexp = /\.{3,}/g; //  .3+ also works  
// alert( "Hello!... How goes?.....".match(regexp) ); 


//Create a regexp to search HTML-colors written as #ABCDEF: first # and then 6 hexadecimal characters.
// let regexp = /#[a-f0-9]{6}\b/gi
// let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
// alert( str.match(regexp) )  


// let regexp = /".+"/g;
// let str = 'a "witch" and "her" "broom" is one';
// alert( str.match(regexp) ); // "witch" and her "broom"



// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// function unique(arr) {
//   return [...new Set(arr)]
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(values) ); //





// Anagrams are words that have the same number of same letters, but in different order.
// For instance:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.
// function aclean(arr) {
//   let map = new Map();
//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     console.log(sorted);
//     map.set(sorted, word);
//     // console.log(map.set(sorted,word));
//   }
//   return [...new Set(map.values())]
// }






// let map = new Map();

// map.set("name", "John");

// let keys = Array.from( map.keys()); //if Array.fr0m is not used then error is showed
// console.log(keys);

// // Error: keys.push is not a function
// keys.push("more");




// let user = { name: "John", years: 30 };
// // your code to the left side:
// let { name, years:age , isAdmin = false } = user;
// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false



// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// let arr = Object.entries(salaries)
// function topSalary(salaries) {
//   let max = -999
//   let maxname

//   for (let [key, value] of arr) {
//     if (value == "" ) return null;
//     if(max < value ){
//       max =value
//       maxname = key
//     }
//   }
//   return maxname
// }
// topSalary(salaries)
// console.log(topSalary(salaries));





// let room = {
//   number: 23
// };
// let meetup = {
//   title: "Conference",
//   occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   place: room
// };
// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;
// alert(JSON.stringify(meetup, function replacer(key, value) {
//   return (key !== '' && value==meetup) ? undefined : value
// }));


// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }
//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }
//   stop() {
//     clearInterval(this.timer);
//   };

//   start() {
//     this.render()
//     this.timer = setInterval(this.render(), 1000);
//   };
// }

// // let clock = new Clock({template:'h:m:s'}); 

// // clock.start();
// // clock.stop();
// // class Animal {


// //   constructor(name) {
// //     this.name = name;
// //   }
// // }
// // class Rabbit extends Animal {
// //   super(name) {
// //     this.name = name;
// //     this.created = Date.now();
// //   }
// // }
// // let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// // alert(rabbit.name);

// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// let extendedClock = new ExtendedClock({ template: 'h:m:s' }, 1000)
// extendedClock.start()
// extendedClock.stop()      

// class Rabbit extends Object {
//   constructor(name) {
//     // super()
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");

// alert( rabbit.hasOwnProperty('name') ); // Error
// function Rabbit() {}
// let rabbit = new Rabbit();
// console.log(Rabbit.prototype={});
// console.log(rabbit instanceof Rabbit );


// let head = {
//   glasses: 1
// };
// let table = {
//   pen: 3,
//   __proto__ : head

// };
// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__ : table
// };
// let pockets = {
//   money: 2000,
//   __proto__ : bed
// };
// console.log(pockets.pen);
// console.log(pockets.glasses)
// console.log(bed.glasses)  


class CoffeeMachine {
  _waterAmount = 0;

  setwaterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

  getpower() {
    return this._power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(250);
coffeeMachine.setwaterAmount(100);
// coffeeMachine.power=25;
console.log("waterAmount:", coffeeMachine.getWaterAmount());
console.log("Power:", coffeeMachine.getpower())


// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk, user.loginFail);

function isplandrome(str) {
  let str1 = str.split('').reverse().join('');
  // console.log(str1);
  if (str === str1) {
    return true
  }
}

function LongestWord(palindrom) {
  let longest = ""
  for (let i = 0; i < palindrom.length; i++) {
    if (palindrom[i].length > longest.length) {
      longest = palindrom[i]
    }
  }
  return longest
}


// function getSentenceFromParagraph(paragraph, sentenceIndex) {
//   // Split the paragraph into sentences using a regular expression
//   const sentences = paragraph.match(/[^.!?]+[.!?]+/g);

//   // Ensure the sentenceIndex is valid
//   if (sentences && sentenceIndex >= 0 && sentenceIndex < sentences.length) {
//       return sentences[sentenceIndex].trim();
//   }

//   return null; // Return null if the index is invalid
// }

function checkPali_and_Suffix(para) {
  let palindrom = []
  let suffix = []
  let sentances = para.toLowerCase().split(/[.,!?]/).map(s => s.trim()).filter(s => s.length > 0);
  let longestPalindrom = ''
  console.log(sentances);

  const str = sentances.join(' ').split(' ')
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    if (isplandrome(str[i])) {
      palindrom.push(str[i])
    }
    longestPalindrom = LongestWord(palindrom)
  }
   
  for (let word of palindrom){
    suffix= word.split('').sort().join('')
  }
  
  
  return [longestPalindrom,suffix]
}


let ans = checkPali_and_Suffix("forenoon,misdeed,believe,achive,steve,a man,racecar.I'm adam. I am racecar driver , in deed Level is good madamadam,aabbccccbbaa")
console.log(ans);
ans.forEach(element => {
  console.log(element.length);
  
})

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // console.log(Object.entries(prices).map(entry=> [entry[0],entry[1]])),  

//   // convert prices to array, map each key/value pair into another pair
//   // and then fromEntries gives back the object
//   Object.entries(prices).map(entry =>  [entry[0],entry[1] *2])
// );

// alert(doublePrices.meat); // 8


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


let arr = Object.entries(salaries).reduce((acc, [_, salary]) => acc + salary, 0);
function count(obj){
  return Object.entries(obj).length
}
console.log(arr);
console.log(count(salaries));

