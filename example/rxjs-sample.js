const {Observable} = require('rxjs')

const observable = new Observable((observer)=>{
    //HTTP - API
    setInterval(() => {
        const rand = Math.round(Math.random()*10)
        observer.next('data '+rand) //success
        if(rand == 1)
            observer.error('something happened wrong') //error
        if(rand == 9)
            observer.complete() //done
    }, 500);
});

observable.subscribe({
    next:(data)=>{
        console.log('data recieved',data)
    },
    error:(error)=>{
        console.log('error recieved',error)
    },
    complete:()=>{
        console.log('stream end')
    }
});