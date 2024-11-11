var x = 10;

function bar(funArg) {
    var x = 30;
    funArg()
}

function foo() {
    console.log(x);
}

foo.x = 20
foo.x = 40

bar(foo)

// 10