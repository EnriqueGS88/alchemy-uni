class Transaction {
    constructor(inputUTXOs, outputUTXOs) {

        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
        
    }
    
    execute() {

        // Access the .spent property stored in each TXO instance
        // then store the value of .spent into a new Array "spentFlag"
        const spentFlag = this.inputUTXOs.map( element => element.spent );
        
        // if there is one single "true" stored in the new spentFlag array
        // throw an error
        if ( spentFlag.includes( true ) == true ) {
            throw new Error( "tx has already been spent" );
        }
        
        // Create new array to store only the amounts of each inputTXO
        const inputAmountsArray = this.inputUTXOs.map( element => element.amount );
        const outputAmountsArray = this.outputUTXOs.map( element => element.amount );

        // Use reduce to get the Summatory of an Array
        const inputAmounts =  inputAmountsArray.reduce( ( acc, curr ) => acc + curr );
        const outputAmounts =  outputAmountsArray.reduce( ( acc, curr ) => acc + curr );
        const amountsComparison = inputAmounts - outputAmounts;

        if ( amountsComparison !== 0 ) {
            throw new Error( "total output amounts differ from total input amounts" );
        }

        // Call the .spend() function for each single element in the array
        this.inputUTXOs.forEach( element => element.spend() );

        
        
    }
}

module.exports = Transaction;