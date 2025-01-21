const myBtn = document.getElementById('btn');
const result = document.getElementById('Result');

myBtn.onclick = function(){
    function generatePassword(length ,includeLowerCase , includeUpperCase , includesNumber , includesSymbols){

        const lowercaseChars = "abcdefghijklmnopqrstuvwz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYS";
        const number = "0123456789";
        const symbol = "@#$";
        let allowedChars = "";
        let Password = "";

        allowedChars += includeLowerCase ? lowercaseChars: "";
        allowedChars += includeUpperCase ? uppercaseChars: "";
        allowedChars += includesNumber ? number: "";
        allowedChars += includesSymbols ? symbol: "";

        if(length <= 0){
            return `(Password Length must be at least 1)`;
        }
        if(allowedChars.length === 0){
            return `(at least one set of charector need to be selected)`;
        }

        for(let i = 0; i<length; i++){
            const randomIndex = Math.floor(Math.random()* allowedChars.length);
            Password += allowedChars[randomIndex];
        }
        return Password;

    
    }
      const passwordLength = 12;
      const includeLowerCase = true;
      const includeUpperCase = true;
      const includesNumber = true;
      const includesSymbols = true;
     const Password =  generatePassword(passwordLength ,
         includeLowerCase , 
         includeUpperCase ,
          includesNumber ,
           includesSymbols) 

           result.textContent = (`Your Rendom Password is :${Password}`)



}