import Block from "./block";

class Blockchain {
    constructor() {
        // this.head = new Block("genesis block");
        this.head = null;
        this.tail = null;
    }
}

export default Blockchain;