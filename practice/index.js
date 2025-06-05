async function test(){
    console.log("Hello first")
    await  Promise.resolve()
    console.log("hello second")
}
 function test2 () {
    console.log("Hello third")
     new Promise(async(res,rej)=>{
        console.log("hello betwwen")
       res()
    }).then(()=>{setTimeout(()=>{test()},1000)})

    console.log("hello fifth")
}

test()
test2() 