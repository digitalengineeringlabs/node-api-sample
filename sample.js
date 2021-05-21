//callback function

function add(a,b,cbfn){
    const d = a + b;
    if(d > 100) {
        //failure
        cbfn('pass smaller numbers to add');
    } else {
    //success
        cbfn(undefined,d)
    }
}

add(266,3, function(error,data){
    if(error)
        console.error(error)
    else 
        console.log(data)
})

//Promise

// const pr = new Promise(function(resolve,reject){
//     //sucess
//     if(false)
//         resolve('All works')
//     //failure
//     else
//         reject('Nothing works')
// })

// ///pr.then((data)=>{},(error)=>{});

// pr.then((data)=>{
//     console.log('Success: '+data)
// }).catch((error)=>{
//     console.log('Error: '+error)
// })

function addPromise(a,b) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const d = a + b;
            if(d > 100) {
                //failure
                reject('pass smaller numbers to add')
            } else {
                //success
                resolve(d)
            }
        }, 2000);
    })
}

function subPromise(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const d = a - b;
            if(d < 10) {
                //failure
                reject('pass larger numbers to minus')
            } else {
                //success
                resolve(d)
            }
        }, 2000);
    })
}

// // add 40 + 50
// // sub result from above with 20

addPromise(40,50).then((data)=>{
    console.log(data)
    subPromise(data,20).then((sResult)=>{
        console.log(sResult)
    }).catch((error)=>{
        console.error(error)
    })
})
.catch((error)=>{
    console.error(error)
});

//async and await

const calculate = async () => {
    try {
        const sum = await addPromise(20,50)
        console.log(sum)
        const net = await subPromise(sum,20)
        console.log('Net: '+net)
    } catch(e){
        console.error('Error: '+e)
    }
}

calculate();