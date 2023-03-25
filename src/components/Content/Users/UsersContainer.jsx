import {connect} from "react-redux";
import Users from "./Users";
import {actionCreators} from "../../../redux/action-creator";

const MapStateToProps = (state) => ({
    users: state.UsersPage.users,
});

const MapDispatchToProps = (dispatch) => ({
    follow: (id) => dispatch( actionCreators.follow(id) ),
    unfollow: (id) => dispatch( actionCreators.unfollow(id) ),
    setUsers: (users) => dispatch( actionCreators.setUsers(users) ),

});

const UsersContainer = connect(MapStateToProps,MapDispatchToProps)(Users);

export default UsersContainer;