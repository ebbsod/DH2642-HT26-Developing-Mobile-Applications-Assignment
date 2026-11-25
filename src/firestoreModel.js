// initialize Firebase app
import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";

// uncomment the following lines when you have your firebaseConfig. Understand what the lines are doing!
import {firebaseConfig} from "/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig);
const db= getFirestore(app);
window.db= db

// make doc and setDoc available at the Console for testing
window.doc= doc        
window.setDoc= setDoc


/* Replace NN with your TW2_TW3 group number! */
const COLLECTION="dinnerModel175";

// TODO: read the code above
// TODO: export the function connectToPersistence, it can be empty for starters
export function connectToPersistence(model, watchFunction){

    function persistenceDataACB(){
        return [model.numberOfGuests, model.dishes, model.currentDishId];
    }

    const firestoreDoc = doc(db, COLLECTION, "dinnerModel");

    function saveToFirestoreACB(){
        if (model.ready) {
            setDoc(firestoreDoc, {
                numberOfGuests: model.numberOfGuests,
                dishes: model.dishes,
                currentDishId: model.currentDishId,
            }, {merge: true});
        }
    }

    function readFromFirestoreACB(snapshot){
        const data = snapshot.data() || {};
        model.setNumberOfGuests(data.numberOfGuests || 2);
        model.dishes = data.dishes || [];
        model.setCurrentDishId(data.currentDishId || null);
        model.ready = true;
    }

    function readErrorACB(error){
        console.log(error);
    }

    watchFunction(persistenceDataACB, saveToFirestoreACB);

    model.ready = false;
    getDoc(firestoreDoc).then(readFromFirestoreACB).catch(readErrorACB);
}











