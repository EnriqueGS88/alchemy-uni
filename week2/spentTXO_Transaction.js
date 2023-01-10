class Transaction {
    constructor(inputUTXOs, outputUTXOs) {

        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
        
    }
    execute() {

        if ( this.inputUTXOs != this.outputUTXOs ) {


            throw new Error( "tx has already been spent" );
        }
        
    }
}

module.exports = Transaction;