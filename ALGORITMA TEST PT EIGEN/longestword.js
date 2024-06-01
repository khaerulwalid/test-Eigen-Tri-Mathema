function longestWord(sentence) {
    let longest = ""
    // Pisahkan kalimat menjadi array kata
    const words = sentence.split(" ");
    for(let i = 0; i < words.length; i++) {
        if(words[i].length >= longest.length) {
            longest = words[i]
        }
    }
  
    return longest
  }
  

  const sentence = "Saya sangat senang mengerjakan soal algoritma";
  const longest = longestWord(sentence);
  console.log(longest); 
  