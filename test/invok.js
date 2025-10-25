// Immediately Inviked fubction expression(IIFE)

(function chai(){
    console.log(`DB connected`);
})();

(()=>{
    console.log(`server connected to port ${3000}`);
})();