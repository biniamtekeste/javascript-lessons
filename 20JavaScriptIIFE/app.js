// Example of IIFE
(function (firstName){
    console.log(firstName)
})();

// We can also have a named IIFE

(favNum=function(num=3){
    console.log("My favorite number is: "+num);
})()
favNum(100);
