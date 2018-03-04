"use strict";

const url = 'http://thecatapi.com';



const fetchCats = new Promise((resolve, reject) => {
    return get(url)
        .then(resp => {
            if (resp.status < 400) {
                resolve(resp.date);
            }
            else (resp.status > 400){
                reject(resp.error);
            }
          
                
             
        });
});
const fetchDogs = new Promise((resolve, reject)=> {
    return get(url).then(resp => {
        if (resp.status < 400) {
            resolve(resp.date);
        }
        else (resp.status > 400){
            reject(resp.error);
        }
    });
});
fetchCats.then(resp => {
    if (resp.ok) {
      return resp();
    }
}).catch (error => {
  return error ();
});
fetchDogs
  .then (resp => {
    if (resp.ok) {
      return resp ();
    }
  })
  .catch (error => {
    return error ();
  });



function fetchAllAnimals (fetchCats, fetchDogs) {
  return new Promise ((resolve, reject) => {
    if (fetchCats === resolve && fetchDogs === resolve) {
      resolve (fetchAllAnimals.data);
    } else {
      reject (fetchAllAnimals.error);
    }
  });
}
