/*
2. Zbadaj wartość logiczną wyrażeń: ,0,null,undefined,abc, ,7,-45.
*/

const tests = [
    0,
    null,
    undefined,
    "abc",
    7,
    -45
];

for (const value of tests) {
    let res = "false";
    if(value) res = "true";

    console.log(value, ":", res);
}