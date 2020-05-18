// Code your solution here
function findMatching(data, query) {
    const lowercaseAsk = query.toLowerCase();
    return data.filter(x => {
        return x.toLowerCase() === lowercaseAsk;
    });
}

function fuzzyMatch(data, query) {
    const regEx = RegExp(`^${query}`, 'i');
    return data.filter(x => {
        if (regEx.test(x)) {
            return x;
        }
    });
}

function matchName(data, query) {
    const lowercaseAsk = query.toLowerCase();
    return data.filter(x => {
        if (x.name.toLowerCase() === lowercaseAsk)
            return `{
                name: ${x.name},
                hometown: ${x.hometown}
            }`
    })
}