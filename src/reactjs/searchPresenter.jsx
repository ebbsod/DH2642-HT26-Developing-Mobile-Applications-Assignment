import { observer } from "mobx-react-lite";
import { SearchFormView } from "../views/searchFormView";
import { SuspenseView } from "../views/suspenseView";
import { SearchResultsView } from "../views/searchResultsView";


const Search = observer(   
 function Search(props) {
    
     function dishClickACB(dish) {
        props.model.setCurrentDishId(dish.id);
    }
    
    function renderSearchResults(){
        const promiseState = props.model.searchResultsPromiseState;
        return !promiseState.data ? 
        <SuspenseView promise = {promiseState.promise}
                      error = {promiseState.error}/> 
        : 
        <SearchResultsView searchResults = {promiseState.data}
                            onDishClick = {dishClickACB}/>;
    }

    function searchInputACB(text) {
        props.model.setSearchQuery(text);
    }

    function typeChangeACB(type) {
        props.model.setSearchType(type);
    }

    function searchClickACB() {
        props.model.doSearch(props.model.searchParams);
    }


    return <>
    <SearchFormView dishTypeOptions = {["starter", "main course", "dessert"]}
                    text = {props.model.searchParams.query}
                    type ={props.model.searchParams.type}
                    onSearchInput = {searchInputACB}
                    onTypeChange = {typeChangeACB}
                    onSearchClick = {searchClickACB} 
                    />
    {renderSearchResults()}
    
    </>
                
                 
                 
                 ;
}
);

export{Search};