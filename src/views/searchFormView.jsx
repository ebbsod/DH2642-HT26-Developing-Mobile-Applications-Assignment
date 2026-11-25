

export function SearchFormView(props) {

    function optionsCB(option){
        return <option key = {option} value = {option}>{option}</option>
    }

    function onSearchInputACB(evt){
         console.log("Search input", evt.target.value);
        props.onSearchInput(evt.target.value);
    }

     function onTypeChangeACB(option){
        console.log("Type change", option.target.value);
        props.onTypeChange(option.target.value);
    }

    function onSearchClickACB(){
        console.log("Search click");
        props.onSearchClick();
    }

    function onSummaryClickACB(){
        window.location.hash = "#/summary";
    }
    
    
    return <div>
        <input value={props.text || ""} onChange = {onSearchInputACB}/>
        <select value={props.type || ""} onChange = {onTypeChangeACB}>
                <option value="">Choose:</option>
                {props.dishTypeOptions.map(optionsCB)}
        </select>
        <button onClick = {onSearchClickACB}>Search</button>
        <button style={{float: "right"}} onClick = {onSummaryClickACB}>Summary</button>





    </div>;}