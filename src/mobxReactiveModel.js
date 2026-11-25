import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { observable, configure, autorun, reaction } from "mobx";
import { model } from "/src/DinnerModel.js";
import { connectToPersistence } from "./firestoreModel";
configure({ enforceActions: "never", });  // we don't use Mobx actions in the Lab


export const reactiveModel=observable(model)

function currentDishSideEffectACB(){
    reactiveModel.currentDishEffect();
}
autorun(currentDishSideEffectACB);

connectToPersistence(reactiveModel, reaction);


// ------ for Lab debug purposes ----------
// making the reactive model available at the browser JavasScript Console
window.myModel= reactiveModel;

// making some example dishes available 
import {dishesConst} from "/src/dishesConst.js";
window.dishesConst= dishesConst;


reactiveModel.doSearch({})
