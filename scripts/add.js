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


/*for (var i = 0; i < 5; i++) {
    setTimeout(function () {
       console.log(i++);
    },4000)

}
console.log(i);*/

function a(){
    var myVar=2;
    b();
    function b(){
        console.log(myVar);
    }
}
var myVar=1;
a();

var d;
d = null;
console.info(d,typeof d);

var b1 = {
    b2 : [1,"a",console.log],
    b3 : function () {
        console.log("b3");
    }
}

console.log(typeof b1.b2[2])