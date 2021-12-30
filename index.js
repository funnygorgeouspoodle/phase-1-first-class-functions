function receivesAFunction (callback, inner) {
    return callback(inner);
}
    
function returnsANamedFunction () {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}
