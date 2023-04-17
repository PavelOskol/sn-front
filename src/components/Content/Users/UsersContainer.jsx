import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import axios from "axios";
import {setUsers,setUsersCount,setUsersPage,setFetching} from "../../../redux/reducers/users.js"
import {refreshFriends} from "../../../redux/reducers/profile";


const MapStateToProps = (state) => ({ ...state.UsersPage });

const MapDispatchToProps = {
    setUsers,
    refreshFriends,
    setUsersCount,
    setUsersPage,
    setFetching,
};

class UsersMiddleware extends React.Component {
    componentDidMount() {
        this.setPage(1);
    }

    setPage = (page) => {
        this.props.setFetching();
        axios.get('/api/auth/users?page=' + page)
            .then(res => {
                this.props.setUsersPage(page);
                this.props.setUsersCount(res.data.count);
                this.props.setUsers(res.data.entries);
                this.props.setFetching();
            });
    };

    render() {
        return <Users {...this.props} setPage={this.setPage} />
    }
}

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersMiddleware);

export default UsersContainer;