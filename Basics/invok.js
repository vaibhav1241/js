// Immediately Inviked fubction expression(IIFE)

(function chai(){
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`server connected to port ${name}`);
})("vaibhav");