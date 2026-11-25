import { PROXY_KEY, PROXY_URL } from "./apiConfig"

function getResponseACB(response) {
    if (!response.ok) {
        throw new Error("Request failed: " + response.status);
    }
    return response.json();
}

function getResultACB(data){
    console.log(data.results);
    return data.results.slice(0,9);
}

function statusResponseACB(response){
    if (response.status != 200){
        throw new Error("Could not find recipe" + response.status)
        
    }
    return response.json();
}

export function searchDishes(searchParam){
    return fetch(PROXY_URL + "/recipes/complexSearch" + "?" + new URLSearchParams(searchParam), {
        headers: {
            "X-DH2642-Key": PROXY_KEY,
            "X-DH2642-Group": "175",
        },
    }).then(getResponseACB).then(getResultACB);
}

export function getMenuDetails(ids_array){
    const idsObject = { ids : ids_array}
    return fetch(PROXY_URL + "/recipes/informationBulk" + "?" + new URLSearchParams(idsObject), {
        headers: {
            "X-DH2642-Key": PROXY_KEY,
            "X-DH2642-Group": "175",
        },
    }).then(statusResponseACB);
}

export function arrayToObjectACB(array){
    return array[0];


}

export function getDishDetails(id){
    const singleIDarray = [id]
    return getMenuDetails(singleIDarray).then(arrayToObjectACB)
}