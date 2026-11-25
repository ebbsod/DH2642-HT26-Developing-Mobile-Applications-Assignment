/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
import { resolvePromise } from "./resolvePromise";
import { searchDishes, getDishDetails} from "./dishSource";

export const model = {  
    numberOfGuests: 2,
    dishes: [],
    currentDishId: null,  // null means "intentionally empty"
    searchParams: {},
    searchResultsPromiseState: {},
    currentDishPromiseState: {},

   currentDishEffect(){
        if (this.currentDishId) {
            resolvePromise(getDishDetails(this.currentDishId), this.currentDishPromiseState);
        } else {
            resolvePromise(undefined, this.currentDishPromiseState);
        }
    },

    setSearchQuery(query){
        this.searchParams.query = query;

    },

    setSearchType(type){
        this.searchParams.type = type;

    },

     doSearch(searchParams){
        const searchPromise = searchDishes(searchParams);
        resolvePromise(searchPromise, this.searchResultsPromiseState);
        
        

    },


    setCurrentDishId(dishId){
        this.currentDishId = dishId;
        // this.someProperty= someValue
    },
    
    setNumberOfGuests(number){
        if (Number.isInteger(number) && number > 0){
            this.numberOfGuests = number;
        }
        else {
            throw "number of guests not a positive integer";
            
        }

    },
    
    addToMenu(dishToAdd){
        // array spread syntax exercise
        // It sets this.dishes to a new array [   ] where we spread (...) the elements of the existing this.dishes
        this.dishes= [...this.dishes, dishToAdd];
    },

    // filter callback exercise
    removeFromMenu(dishToRemove){
        function shouldWeKeepDishCB(dish){
            return dish.id !== dishToRemove.id;

            
        }
        this.dishes= this.dishes.filter(shouldWeKeepDishCB);
    },
    
 
    // more methods will be added here, don't forget to separate them with comma!
};

