let a = new Promise(function (resolve, reject) {
    resolve(new Date())
})
    .then(date => {
        console.log(date.getMilliseconds());
        console.log(new Date().getMilliseconds());
    });


let promiseArray = [];

for (let i = 0; i < 100; i++) {
    let promise = new Promise(function (resolve, reject) {
        let rndNumb = Math.floor(Math.random() * 501);
        let id = i;
        setTimeout(function () { resolve({ id: id, time: rndNumb }) }, rndNumb);
    })
        .then(data => {
            console.log(`Promise with id:${data.id}, has finished in ${data.time} milliseconds.`);
            return `Promise id is #${data.id}`
        });
    promiseArray.push(promise);
};

let firstPromise = Promise.race(promiseArray).then(data => console.log(data))
let lastPromise = Promise.all(promiseArray).then(data => console.log(`All is done!`))
