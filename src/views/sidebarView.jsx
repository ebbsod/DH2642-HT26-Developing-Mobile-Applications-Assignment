import {sortDishes} from "/src/utilities.js";
import {dishType} from "/src/utilities.js";
import {menuPrice} from "/src/utilities.js";
import "/src/style.css"




export function SidebarView(props){
    return (<div className="debug">
        
        <button disabled={props.number <= 1} onClick={removePortionACB}>-</button>
         {props.number} 
        <button onClick={addPortionACB}>+</button>

        
                      {
        
                      <table>
                        <tbody>
                          
                    
                          { //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript
                            // Here Array Rendering is used to generate a table row for each element of the ingredients prop (an array) 
                            sortDishes(props.dishes)?.map(dishTableRowCB)
                          }

                          <tr>
                            <td></td>
                            <td>Total: </td>
                            <td></td>
                            <td className="alignRight">{(menuPrice(props.dishes) * props.number).toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>

        
        
                      } 
        </div>

        
    );

    function dishTableRowCB(dish){

        function removeDishACB(){
        props.onDishRemove(dish);
    }   


      function interestedInDishACB(){
        props.onInterestedDish(dish)
      }
        return <tr key={ dish.id } >
                <td><button onClick={removeDishACB}>X</button></td>
                 <td><a href="#/details"  onClick = {interestedInDishACB}> {dish.title}</a></td>
                 <td>{dishType(dish)}</td>
                 <td className="alignRight">{(dish.pricePerServing * props.number).toFixed(2)}</td> 
               </tr>;
               
             
    }

    function addPortionACB(){
      props.onNumberChange(props.number + 1);
        
    }

    function removePortionACB(){
        props.onNumberChange(props.number - 1);
    }






}
