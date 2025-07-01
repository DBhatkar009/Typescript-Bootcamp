const car = {
    carBrand: "Hyundai",
    carModel: "Hyundai Elantra",
    carPrice: 1000000
}


const carFeatureOne = {
    FrontWheelDrive: "Standard driveTrain",
    AntiLockBreaking: "safer breaking" 
} 

const carFeatureTwo = {
 inchAlloyWheel: "Premium wheel choice"
}


function merge<T, Y, U>(source1: T, obj2: Y, obj3:U){
     return Object.assign({}, source1, obj2, obj3) as (T & Y & U); 
}

const carBuy = merge(car, carFeatureOne, carFeatureTwo);
