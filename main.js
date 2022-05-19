const FourWheeler = {
    brand: "Tata",
    image: "url",
    wheels: 4,
    
}

const duster = Object.create(FourWheeler);
FourWheeler.name = "Duster"
console.log(duster);

const seat = Object.create(FourWheeler);
FourWheeler.seat = 4;
console.log(seat);