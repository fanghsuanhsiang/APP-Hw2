(function(){console.log(this)})();

let person = {
  firstname: 'Hsuan-Hsiang',
  lastname: 'Fang',
  greet1: function(){
    console.log(this);
  },

  greet: ()=>{
    console.log(this);
  },

  greet3: fuction(){
    (() => console.log(this))();
  }
};

person.greet1();
//person.greet2();
person.greet3();
