
export function resolvePromise(prms, promiseState){
    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;

    function saveDishACB(results){
        if(promiseState.promise === prms)
        {promiseState.data = results;}
    }

    function catchErrorACB(err){
        if(promiseState.promise === prms)
        {promiseState.error = err;}
    }

    if(!prms){
        return;
    }

    prms.then(saveDishACB).catch(catchErrorACB)

}