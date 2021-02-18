module.exports = function toReadable (number) {
      let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = ['hundred'];
    let dozen = Math.floor(number / 10);
    let hundreds = Math.floor(number / 100);
    let getdozen = number-(100*hundreds);
    let getdozen1 = Math.floor(getdozen / 10);
    let dia = number.toString().slice(1);
    let dia1 = parseInt(dia);

    
    
    if (number >= 0 && number <= 999) {
        if ((number >= 20 && number <= 99) && (number % 10 != 0)) {
            
            return dozens[dozen-2] + ' ' + units[number-dozen*10];

        } else if ((number >= 20 && number <= 99) && (number % 10 == 0)) {

            return  dozens[dozen-2];   

        } else if ((number >= 100 && number <= 999) && (number % 100 == 0)) {

            return  units[hundreds] + ' '  +  hundred;

        } else if ((number >= 100 && number <= 999) && (number % 10 == 0)) {
        if (dia == 10){
        return units[hundreds] + ' '  +  hundred + " " + units[dia]
        }
        
       return units[hundreds] + ' '  +  hundred + " " +  dozens[getdozen1-2];
       
        } else if ((number >= 100 && number <= 999) && (number % 10 != 0) && (dia >= 0 && dia <= 19)){
        
        return  units[hundreds] + ' '  +  hundred + ' ' + units[dia1];
        
        } else if ((number >= 100 && number <= 999) && (number % 10 != 0) && (dia >= 20 && dia <= 99)) {
        
        return  units[hundreds] + ' '  +  hundred + ' ' + dozens[dia[0]-2] + ' ' + units[dia[1]];
        
        }
        
      return units[number];
    }
  


}
