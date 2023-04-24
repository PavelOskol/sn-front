import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import {
    setPageThunk,
    changeFriendStatusThunk
} from "../../../redux/reducers/users.js"
import {refreshFriendsThunk} from "../../../redux/reducers/profile";
import withAuthRedirect from "../../hoc/withAuthRedirect";



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

const UsersContainer =  withAuthRedirect( connect(MapStateToProps, MapDispatchToProps)(UsersMiddleware) );

export default UsersContainer;