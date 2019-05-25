class Switch {
    constructor(item) {
        this.item = item;
        this.isMatched = false;
    }
    case(pred, result) {
        if (!this.isMatched && pred(this.item)) {
            this.isMatched = true;
            this.result = result;
        }
        return this;
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