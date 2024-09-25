module.exports.showGreeting = (callback) => {
    console.log("Callback powitalny działa");

    setTimeout(callback, 3 * 1000);
}