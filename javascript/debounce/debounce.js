function debounce(func, timeout){
    let timer;
    return function(...args){
        console.log(args)
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this,args)
        },timeout);
    }
}

function save(name){
    console.log("name: ", name);
}

let p1 = debounce(save, 2000);
p1("hello");
p1("wow");
p1("number");