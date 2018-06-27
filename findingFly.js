function findDeep(word,findWord) {
    let myWord = word,  myFindWord = findWord;
    for(value in myWord ){
        let newValue = typeof(myWord[value]);

        if (value === myFindWord){
            console.log(myWord[value]);
        }

        if (newValue === 'object'){
            findDeep(myWord[value], myFindWord)
        }
            
    }
    
}
findDeep(Obj,'fly');