const user = {
    userName : "saurabh",
    price : 999,

    welcomeMassage  : function(){

        console.log(`${this.userName},welcome to website`);

        // console.log(this);

    }
}
// userName.welcomeMassage();
// userName.userName
// user.welcomeMassage();
// console.log(this);


const add = (num1 ,num2) => ({user : "saurabh"})

console.log(add());