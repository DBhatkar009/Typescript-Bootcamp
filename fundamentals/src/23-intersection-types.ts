
interface HashId {
 id: string;
}

interface Bike {
    title: string;
    model: string;
    Description: string;
    price: number;
}

type MotorBike = HashId & Bike;

const ExampleBike: MotorBike = {
    id: "254545-jjfd-45648vf-56464-vv4445",
    title: "Modern Bikes",
    model: "BMW",
    Description: "BMW-Sport Bike",
    price: 9000
}

console.log(`this is the Bike show room: ${ExampleBike}`);
