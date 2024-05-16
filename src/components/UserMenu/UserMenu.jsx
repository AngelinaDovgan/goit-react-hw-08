import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    );
}