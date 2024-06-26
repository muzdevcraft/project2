// Program 4

function getGrades(numbers) {

  
      if (numbers >= 90 && numbers <=100) {
      
       return "Your Grade Is A.";

      }
    
      else if (numbers >= 80 && numbers <=89) {
      
       return "Your Grade Is B.";

      }
       else if (numbers >= 70 && numbers <=79) {
      
       return "Your Grade Is C.";

      }
       else if (numbers >= 60 && numbers <=69) {
      
       return "Your Grade Is D.";

      }
       else if (numbers >= 0 && numbers <=59) {
      
       return "Your Grade Is F.";

      }
       else {
      
       return "Enter valid Numbers.";

      }

}

let numb = 92;
console.log(getGrades(numb));