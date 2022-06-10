let str1 = "abcdefg";
let str2 = "AbCdEfF";

// for(let i=0; i<str1.length;i++) {

// }

if(str1.toLocaleLowerCase() > str2.toLocaleLowerCase())  {
    console.log(1);
} else if (str1.toLocaleLowerCase() < str2.toLocaleLowerCase()) {
    console.log(-1);
} else console.log(0);