
//이게 왜  await이 안먹힐까 한참을 고민했다...
// await은 promise를 반환해야지만 먹힌다고 한다.
// ㅎ

function my_marker(){
    setTimeout(()=>{
        console.log("I'm my_marker");
        return 'my_marker'
    },1000)
}

function fr_marker(){
    setTimeout(()=>{
        console.log("I'm my_marker");
        return 'my_marker'
    },1000)
}

function ot_marker(){
    setTimeout(()=>{
        console.log("I'm my_marker");
        return 'my_marker'
    },1000)
}

async function gettogether(){
    let a = await my_marker();
    let b = await fr_marker();
    let c = await ot_marker()
    console.log('Im async1')
    return a+b+c
}

gettogether()
.then((result)=>{
    console.log(result);
})