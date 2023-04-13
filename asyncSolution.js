function my_marker(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("I'm mine");
            console.log("I'm mine")
        },1000)
    })
}

function fr_marker(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("I'm fr");
            console.log("I'm fr")
        },1000)
    })
}
function ot_marker(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("I'm ot");
            console.log("I'm ot")
        },1000)
    })
}

async function gettogether(){
    await my_marker();
    await fr_marker();
    await ot_marker();
    console.log("I'm async")
}

gettogether()