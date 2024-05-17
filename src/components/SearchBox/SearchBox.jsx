import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/filters";
import { selectNameFilter } from "../../redux/contacts/selectors";


export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = (event) => {
           console.log("New filter value:", event.target.value);
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div>
            <p>Search by name</p>
            <input type="text" name="filters" onChange={handleFilterChange}></input>
        </div>
    );
}