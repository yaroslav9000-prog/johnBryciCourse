class Queue{
    //push pop length.
    constructor(){
        this.queue = []
    }
    addToQueue= (someElement)=>{
        this.queue.push(someElement);
    }
    removeFromQueue = (someElement)=>{
        this.queue.pop(someElement);
    }
    getLength = ()=>{
        
    }
}
const someArray = [];
console.log(typeof someArray);