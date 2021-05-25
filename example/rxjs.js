const {Observable} = require('rxjs')

const obs = new Observable((observer)=>{
    setInterval(() => {
        let counter = Math.round(Math.random()*10)
        observer.next('test ' + counter)
        if(counter == 5)
            observer.error('failure')
        if(counter == 1)
            observer.complete()
        
    }, 1000);
})

obs.subscribe({next:(data)=>{
    console.log('data : '+data)
}, error:(error)=>{
    console.log('error : '+error)
}, complete:(msg)=>{
    console.log('completed')
}})