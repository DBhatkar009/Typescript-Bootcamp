const numbers = new Array<any>();

numbers.push(90);
numbers.push("Hello World");


const promise = new Promise<string>((response, reject)=>{
          response("Hello World");   
})

promise.then((value)=>{
      
});