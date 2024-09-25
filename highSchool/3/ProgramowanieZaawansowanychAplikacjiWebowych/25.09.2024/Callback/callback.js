module.exports.showGreeting = () => {
    console.log("Callback powitalny działa");

    setTimeout(() => {
        console.log("Witaj użytkowniku");
    }, 3 * 1000);
}