const paper: any[] = ["paperBook", "paperBoat", "paperDish"];
// let map: never = "France";
// map = 56;
const cake: any = "Chocolet Cake";


type SmartPhone = "Samsung" | "Motorola";

let bestSmartPhone: SmartPhone = "Samsung";

if(bestSmartPhone == "Samsung"){
 
} 
else if(bestSmartPhone == "Motorola"){

}
else{
   isSmartPhoneAvailable(bestSmartPhone);
}

function isSmartPhoneAvailable(value: never){
    throw new Error(`unexpected value: ${value}`);
}