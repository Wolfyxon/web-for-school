export type UserData = {
    name: string,
    age: number,
    email: string,
    address: {
        street: string,
        city: string,
        zip: string
    }
}

export default function User({user}: {user: UserData}) {
    return (
        <div>
            <div>Imię i nazwisko: {user.name}</div>
            <div>Wiek: {user.age}</div>
            <div>Email: {user.email}</div>
            
            <b>Adres</b>:
            <div>Ulica: {user.address.street}</div>
            <div>Ulica: {user.address.city}</div>
            <div>Ulica: {user.address.zip}</div>
        </div>
    )
}