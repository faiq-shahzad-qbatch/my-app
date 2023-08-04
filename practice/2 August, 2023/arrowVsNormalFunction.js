const regularFunctionExample = {
  message: "Hello from Regular Function!",
  showMessage: function () {
    console.log(this.message);
  },
};

const arrowFunctionExample = {
  message: "Hello from Arrow Function!",
  showMessage: () => {
    console.log(this.message);
  },
};

regularFunctionExample.showMessage();
arrowFunctionExample.showMessage();
