class Switch {
    constructor(item) {
        this.item = item;
    }
    case(pred, result) {
        if (typeof this.result === 'undefined' && pred(this.item)) 
            this.result = result;
        return this;
    }
    default(result) { return result; }
    run() { 
        return this.result;
    }
}

const match = (item) => new Switch(item);
module.exports = match;