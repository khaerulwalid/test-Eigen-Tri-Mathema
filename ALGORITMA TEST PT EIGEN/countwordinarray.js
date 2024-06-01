function countWordsInArray(input, query) {
    // Inisialisasi array untuk menyimpan hasil
    let output = [];
  
    for(let i = 0; i < query.length; i++) {
        let sum = 0
        for(let j = 0; j < input.length; j++) {
            if(query[i] === input[j]) {
                sum++
            }
        }

        output.push(sum)
    }
  
    return output;
  }
  

  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'ac', 'dz'];
  
  const result = countWordsInArray(INPUT, QUERY);
  console.log(result);
  