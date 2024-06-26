// Program 2

function MaxOfTwo(numb1,numb2) {

 if (isNaN(numb1) || isNaN(numb2)) {

       return "Please enter valid numbers.";
      } 
      else if (numb1 > numb2) {
      
       return "The First Number is Larger.";
      }
       else if (numb1 < numb2) {
       
       return "The Second Number is Larger.";
      } 
      else if (numb1 == numb2) {
       
       return "The Both Numbers Are Same.";
      } 
      else {
       
       return "Both Numbers are Equal.";
      }
}

let num1 = 12;
let num2 = 15;
console.log(MaxOfTwo(num1,num2));