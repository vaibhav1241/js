const user ={
    username : "vaibhav",
    price : 2000,

    welcomeMessage : function(){
            console.log(`${this.username}, welcome to our website! Your price is ${this.price}.`);
            console.log(this);
    }


}
user.welcomeMessage();
user.username ="aman";
user.welcomeMessage();
