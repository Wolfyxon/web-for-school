import React from "react";

type CarProps = {
    brand: string,
    year: number
}

export default class Car extends React.Component<CarProps> {
    constructor(props: CarProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Samochód {this.props.brand} {this.props.year}
            </div>
        )
    }
}