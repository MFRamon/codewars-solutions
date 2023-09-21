// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){  
    let numbers = []; 
    let strArray = words.split(" ");
    
    if(words.length === 0){
      return ""
    }
    else{
        for(let i=0; i < strArray.length; i++){
      let stringNumber = strArray[i].replace(/\D/g, '');
      let stringObj = {
        order: parseInt(stringNumber), 
        value: strArray[i]
      }
      numbers.push(stringObj);
    }
    
    for(let j=0; j < numbers.length - 1; j++){
      for(let k=0; k < numbers.length - 1 - j; k++){
        if(numbers[k].order > numbers[k + 1].order){
          [numbers[k], numbers[k + 1]] = [numbers[k + 1], numbers[k]] 
        }
      }
    }
    
    let sentence = numbers.map(element => {
      const { order, value } = element; 
      return value;
    });
      
      return sentence.join(" ")
    }
  }