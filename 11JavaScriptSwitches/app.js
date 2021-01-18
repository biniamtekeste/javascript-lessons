let name=prompt("Enter a name")
switch(name){
    case "Biniam:
        console.log(name +" is the best programmer in USA");
        break;
    
    case "Temesghen":
        console.log(name +" Works in Microsoft");
        break;

    case "Debas":
        console.log(name +" is a full stack web developer");
        break;

    case "Samuel":
        console.log (name +" is an animator");
        break;

    default:
        console.log(`We're sorry, the name ${name} is not found on our database.`);
        break;


}