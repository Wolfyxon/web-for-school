export type Car = {
    marka: string,
    rocznik: number,
    rokProdukcji: number,
    cena: number
}

export default function Object({car}: {car: Car}) {
    return (
        <div>
            {car.marka} {car.rocznik} <hr />
            {car.cena}
        </div>
    )
}