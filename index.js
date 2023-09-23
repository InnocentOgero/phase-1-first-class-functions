function receivesAFunction(receive){
    return receive()

}
function returnsANamedFunction(){
    return function printName(){
        "My name is Mark"
    }

}
function returnsAnAnonymousFunction(){
    return function(){
        "My name is Innocent"
    }
}
