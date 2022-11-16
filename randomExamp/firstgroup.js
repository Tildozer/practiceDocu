/*
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve('success');
    } else {
        reject('failed');
    }
});

p.then((message) => {
    console.log('this is in the then ' + message)
}).catch((message) => {
    console.log('this is in the catch ' + message)
});
*/

const userLeft = false;
const userWatchingCatMeme = false;
/*
function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':(',
        });
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'someting < cat',
        });
    } else {
        callback('thumbs up');
    }
}

watchTutorialPromise((message) => {
    console.log('success: ' + message);
}, (error) => {
    console.log(error.name + ' ' + error.message);
})
*/

// same thing with promises instead of callbacks
/*
*/
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':(',
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'someting < cat',
            });
        } else {
            resolve('thumbs up');
        }  
    })
    
}

watchTutorialPromise().then((message) => {
    console.log('success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})

// multiple promises resolved at once
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video 1 Recorded');
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 Recorded');
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 Recorded');
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
]).then((messages) => {
    console.log(messages)
})

//race return the fist one to finish instead of them all
/*
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
]).then((message) => {
    console.log(message);
})
*/

