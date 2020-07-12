var add = function (m) {
 
    var temp = function (n) {
        return add(m + n);
    }
 
    temp.toString = function () {
        console.log("tostring")
        return m;
    }
 
    return temp;
};
 
 
// add(3)(4)(5); // 12
// add(3)(6)(9)(25);
console.log(add(2)(3)(4).toString());


for (var i = 0; i < 5; i++) {
    setTimeout(function () {
       console.log(i++);
    },4000)

}
console.log(i);
