export default function Form() {
    return (
        <form>
            <div>
                <label htmlFor="login">Imię:</label>
                <input type="text" id="login" />
            </div>
            <div>
                <label htmlFor="password">Hasło:</label>
                <input type="password" id="password" />
            </div>

            <div>
                <div>
                    <input type="radio" name="gender" id="gd-female" value="female" />
                    <label htmlFor="gd-female">K</label>
                </div>

                <div>
                    <input type="radio" name="gender" id="gd-male" value="male" />
                    <label htmlFor="gd-male">M</label>
                </div>
            </div>

            <input type="submit" value="Wyślij" />
        </form>
    )
}