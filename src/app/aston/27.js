var obj = {
    a: () => {
        console.log(this.prop)
    },
    prop: 1
}

obj.a()
var fn = obj.a.bind(obj)
fn()

// undefined undefined