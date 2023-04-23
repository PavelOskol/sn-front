import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import {
    setPageThunk,
    changeFriendStatusThunk
} from "../../../redux/reducers/users.js"
import {refreshFriendsThunk} from "../../../redux/reducers/profile";



const MapStateToProps = (state) => ({ ...state.UsersPage, token: state.Authorized.token });

const MapDispatchToProps = {
    setPageThunk,
    refreshFriendsThunk,
    changeFriendStatusThunk,
};

class UsersMiddleware extends React.Component {
    componentDidMount() {
        this.props.setPageThunk(1);
    }

    render() {
        return <Users {...this.props}  />
    }
}

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersMiddleware);

export default UsersContainer;