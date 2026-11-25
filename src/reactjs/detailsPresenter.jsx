import { observer } from "mobx-react-lite";
import { DetailsView } from "../views/detailsView";
import { SuspenseView } from "../views/suspenseView";

const Details = observer(   
 function Details(props) {
    const promiseState = props.model.currentDishPromiseState;
    
    if(!promiseState.data){
          return <SuspenseView promise = {promiseState.promise}
                               error = {promiseState.error} />;
    }

    function isDishInMenuCB(dish){
      return dish.id === props.model.currentDishId;
    }
    
    function addToMenuACB(){
      props.model.addToMenu(promiseState.data);
    }

     return <DetailsView dishData = {promiseState.data}
                         guests = {props.model.numberOfGuests}
                         isDishInMenu = {props.model.dishes.find(isDishInMenuCB) !== undefined}
                         onAddToMenu = {addToMenuACB}
            />;
}
);

export{Details};