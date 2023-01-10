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
        
    }
}

module.exports = Transaction;