function foo() {
  var x = 10;

  {
    let x = 12;

    //let x = 12; will give error

    console.log(x);
  }

  console.log(x);
}

foo();
