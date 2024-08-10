const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

myPromise
    .then((result) => {
        console.log("myPromise", result); // "The operation was successful!"
    })
    .catch((error) => {
        console.error(error); // "The operation failed."
    })
    .finally(() => {
        console.log("finally: Promise settled."); // Executes no matter what
    });

const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 20));
const promise3 = Promise.reject("Failed!");

Promise.all([promise1, promise2])
    .then((results) => console.log("all", results)) // [10, 20]
    .catch((error) => console.error(error));

Promise.allSettled([promise1, promise2, promise3])
    .then((result) => console.log("allSettled", result)) // 10 (promise1 resolves first)
    .catch((error) => console.error(error));

Promise.any([promise1, promise2, promise3])
    .then((result) => console.log("any", result)) // 10 (promise1 resolves first)
    .catch((error) => console.error(error));
