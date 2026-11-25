export function DetailsView(props) {

    function ingredientCB(ingredient) {
        return <div key={ingredient.id} data-key={ingredient.id}>
                   {ingredient.name} {ingredient.amount} {ingredient.unit}
               </div>;
    }

    function onAddToMenuACB() {
        props.onAddToMenu();
        window.location.hash = "#/search";
    }

    function onCancelACB() {
        window.location.hash = "#/search";
    }

    return <div>
        <button disabled={props.isDishInMenu} onClick={onAddToMenuACB}>Add to menu</button>
        <button onClick={onCancelACB}>Cancel</button>

        <h2>{props.dishData.title}</h2>
        <img src={props.dishData.image} />

        <div className="debug">Price: {props.dishData.pricePerServing}</div>
        <div className="debug">For {props.guests} guests: {(props.dishData.pricePerServing * props.guests).toFixed(2)}</div>

        <div className="debug">{props.dishData.extendedIngredients.map(ingredientCB)}</div>

        <div className="debug">{props.dishData.instructions}</div>
        <div className="debug"><a href={props.dishData.sourceUrl}>More information</a></div>
    </div>;
}
