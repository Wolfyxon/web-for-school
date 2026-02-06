import React from "react";

type ProfileState = {
    name: string,
    loggedIn: boolean
}

export default class Profile extends React.Component<{}, ProfileState> {
    state = {
        name: "Grzegorz Brzęczyszczykiewicz",
        loggedIn: true
    };

    render() {
        return (
            <div>
                <p>
                    {
                        this.state.loggedIn
                        ? `Zalogowany jako ${this.state.name}`
                        : "Niezalogowany"
                    }
                </p>
                <button onClick={this.toggleLogin}>
                    {
                        this.state.loggedIn
                        ? "Wyloguj"
                        : "Zaloguj"
                    }
                </button>
            </div>
        );
    }

    toggleLogin = () => {
        this.setState({
            ...this.state,
            loggedIn: !this.state.loggedIn
        });
    }
}