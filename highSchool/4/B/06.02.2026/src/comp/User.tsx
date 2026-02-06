import React from "react"

type UserProps = {
  name: string,
  age: number
}

export default class User extends React.Component<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }

  render() {
    return (
      <div>
        Użytkownik: {this.props.name}, wiek: {this.props.age}
      </div>
    )
  }
}