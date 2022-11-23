var var1 = 1;

if (true) {
    var var2 = 2;
    if (true) {
        var var3 = 3 ;
    }
}

function foo () {
    var var4 = 4;

    function bar() {
        var var5 = 5;
    }
}

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);
// console.log(var5);

var x = 1;

function foo1() {
    var x = 10;
    bar1();
}

function bar1() {
    console.log(x);
}

foo1();
bar1();


