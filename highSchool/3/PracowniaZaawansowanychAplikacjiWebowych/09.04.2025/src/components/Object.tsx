export type Car = {
    marka: string,
    rocznik: number,
    rokProdukcji: number,
    cena: number
}

export default function Object({car, i}: {car: Car, i: number}) {
    if(i == 0) {
        return (
            <div>
                {car.marka} {car.rocznik}
            </div>
        );
    } else {
        return (
            <div>
                {car.cena}
            </div>
        );
    }
}