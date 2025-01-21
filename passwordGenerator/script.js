const myBtn = document.getElementById('btn');
const result = document.getElementById('Result');

myBtn.onclick = function(){
    function generatePassword(length ,includeLowerCase , includeUpperCase , includesNumber , includesSymbols){

        const lowercaseChars = "abcdefghijklmnopqrstuvwz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYS";
        const number = "0123456789";
        const symbol = "@#$()-_<>:*!";
        const allowedChars = "";
        let Password = "";

        allowedChars += includeLowerCase ? lowercaseChars: "";
        allowedChars += includeUpperCase ? uppercaseChars: "";
        allowedChars += includesNumber ? number: "";


        return '';
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

}