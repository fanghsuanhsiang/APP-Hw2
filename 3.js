//object
var person = {
  firstname:'Hsuan-Hsiang',
  lastname:'Fang',
  greet: function() {
    console.log(`Hello,${this.firstname}${this.lastname}`);
  }
};
person.greet();

console.log(person['firstname']);


let name,phone;
let info ={
  name:name,
  photo:phone,
  printInfo:function(){
      console.log(`Name: ${this.name},Phone: ${this.phone}`);
  }
}

info.name = "ntue";
info.phone = "2732-1104";
info.printInfo();
