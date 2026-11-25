export function SearchResultsView(props) {


    function searchResultsTreeCB(dish){
        function onDishClickACB(){
            console.log("dish click");
            props.onDishClick(dish);
            window.location.hash = "#/details";
        }

        return <span key = {dish.id} style={{display: "inline-block", width: "150px", margin: "8px",
                     verticalAlign: "top", cursor: "pointer", textAlign: "center"}} onClick = {onDishClickACB}>
                    <img src = {dish.image} alt = {dish.title} height = "100" ></img>
                    <div>{dish.title}</div>
               </span>;

    }
    return <div className="debug">{props.searchResults.map(searchResultsTreeCB)}</div>

}