function reverseAlphabet(input) {
    let output = ""
    let result = []
    let angka = input[input.length-1]

    for(let i = 0; i < input.length-1; i++) {
        result[i] = input[input.length - (2 + i)]
    }

    output = result.join('') + angka
  
    return output;
  }
  
  const inputString = "NEGIE1";
  const reversedString = reverseAlphabet(inputString);
  console.log(reversedString);
  