class Switch {
    constructor(item) {
        this.item = item;
        this.isMatched = false;
    }
    
    case(pred, result) {
        if (!this.isMatched) {
            if (this.testPred(pred)) {
                this.isMatched = true;
                this.result = result;
            }
        }
        return this;
    }
    testPred(pred) {
        return typeof pred === 'function' && pred(this.item)
            || pred === this.item;
    }
    default(result) { 
        if (this.isMatched)
            return this.result; 
        return result;
    }
    run() { 
        if (this.isMatched)
            return this.result;
        throw new Error('unexhausted pattern.');
    }
}

const match = (item) => new Switch(item);
module.exports = match;