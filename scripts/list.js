var example = new Vue({
    el:"#example",
    data:{
        movies:['少年派','星际穿越']
    }
})

var example2 = new Vue({
    el:"#example-2",
    data:{
        parent:"parent",
        items:[
            {message:"A"},
            {message:"B"}
        ]
    }
})

var example3 = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})

example3.object.firstName = "jack1"