//function for even number
function isEven(){
  const Number =10;

  if (Number%2==0){
    console.log(`The number ${number} is even`)
  }
  else{
    console.log(`The number ${Number} is not even`)
  }
}

isEven();

//function for comparing 3 numbers

function largestNum(){
 const a=2;
 const b=3;
 const c=4;

  if(a>b && a>c){
    console.log(`${a} is the bigger number`);
}
  else if {b>a && b>c}{
    console.log(`${b} is the gretter number`);
  }

else {
  console.log(`${c} is the bigger number`);
}

  largestNum();


//chceking if number is a string

  function reverseString(str){
    return str.split('').reverse().join('');
  }

  console.log(reverseString("HelloSpencer"))
  
