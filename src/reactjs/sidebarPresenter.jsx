import { observer } from "mobx-react-lite";
import { SidebarView } from "/src/views/sidebarView.jsx";

const Sidebar = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SidebarRender(props){

        function onNumberChangeACB(newNumber){
            console.log("Portions: " + newNumber);
            props.model.setNumberOfGuests(newNumber);
        }

        function onDishRemoveACB(dishToRemove){
            console.log("Removing: " + dishToRemove.title);
            props.model.removeFromMenu(dishToRemove);
        }

        function onInterestedDishACB(dishInterested){
            console.log("DishID: " + dishInterested.id)
            props.model.setCurrentDishId(dishInterested.id)
        }



        return <SidebarView number={props.model.numberOfGuests}
                            dishes={props.model.dishes}
                            onNumberChange = {onNumberChangeACB}
                            onDishRemove = {onDishRemoveACB}
                            onInterestedDish = {onInterestedDishACB}/>;
    }
);

export { Sidebar };
