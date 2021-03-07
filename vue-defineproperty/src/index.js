const obj = {a:0}


function defineReactive(obj, key, val) {
    console.log(112);
    Object.defineProperty(obj, key, {
        enumerable:true,
        configurable:true,
        get() {
            console.log(`${obj}执行了get方法获取${key}的值，值为${val}`)
            return val;
        },
        set(value) {
            console.log(`${obj}给${key}设置了新值，值为${value}`)
            val = value
        }
      
    })
}

defineReactive(obj,'a',10);
obj.a = 1;
console.log(obj.a);