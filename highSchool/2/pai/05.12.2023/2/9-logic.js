function check(value){
    if(value) console.log(value+": true");
    else console.log(value+": false");
};

check(0);
check(null);
check(undefined);
check("abc");
check(-7);
check(-45);