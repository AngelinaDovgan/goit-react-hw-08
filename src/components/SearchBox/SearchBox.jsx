import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";


export default function SearchBox() {
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div>
            <p>Search by name</p>
            <input type="text" name="filter" onChange={handleFilterChange}></input>
        </div>
    );
}