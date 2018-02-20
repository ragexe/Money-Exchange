module.exports = function makeExchange(currency) {
    let result = {};
    if (!currency) return result;
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    const config = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};

    while (currency > 0) {
        for (let a in config) {
            if (config[a] <= currency) {
                result[a] = result[a] || 0;
                result[a]++;
                currency -= config[a];
                break;
            }
        }
    }

    return result;
};




