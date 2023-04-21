import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import {setUsers,setUsersCount,setUsersPage,setFetching,addFetchingFriend,delFetchingFriend} from "../../../redux/reducers/users.js"
import {refreshFriends} from "../../../redux/reducers/profile";
import api from "../../../DAL/api";


const MapStateToProps = (state) => ({ ...state.UsersPage, token: state.Authorized.token });

const MapDispatchToProps = {
    setUsers,
    refreshFriends,
    setUsersCount,
    setUsersPage,
    setFetching,
    addFetchingFriend,
    delFetchingFriend,
};

class UsersMiddleware extends React.Component {
    componentDidMount() {
        this.setPage(1);
    }

    setPage = (page) => {
        this.props.setFetching();
        api.getUsers(page,this.props.token)
            .then(data => {
                this.props.setUsersPage(page);
                this.props.setUsersCount(data.count);
                this.props.setUsers(data.entries);
                this.props.setFetching();
            });
    };

    render() {
        return <Users {...this.props} setPage={this.setPage} />
    }
}

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersMiddleware);

export default UsersContainer;