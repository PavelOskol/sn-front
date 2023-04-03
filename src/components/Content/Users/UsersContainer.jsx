import {connect} from "react-redux";
import Users from "./Users";
import {actionCreators} from "../../../redux/action-creator";
import React from "react";
import axios from "axios";


const MapStateToProps = (state) => ({
    users: state.UsersPage.users,
    currentPage: state.UsersPage.currentPage,
    usersCount: state.UsersPage.usersCount,
    isFetching: state.UsersPage.isFetching,
});

const MapDispatchToProps = (dispatch) => ({
    follow: (id) => dispatch(actionCreators.follow(id)),
    unfollow: (id) => dispatch(actionCreators.unfollow(id)),
    setUsers: (users) => dispatch(actionCreators.setUsers(users)),
    setUsersCount: (count) => dispatch(actionCreators.setUsersCount(count)),
    setUsersPage: (page) => dispatch(actionCreators.setUsersPage(page)),
    setFetching: () => dispatch(actionCreators.setFetching()),
});

class UsersMiddleware extends React.Component {
    componentDidMount() {
        this.setPage(1);
        /*axios.get('/api/auth/users?page=1')
            .then(res => {
                this.props.setUsers(res.data.entries);
                this.props.setUsersCount(res.data.count);

            });*/

    }

    setPage = (page) => {
        this.props.setFetching();
        axios.get('/api/auth/users?page=' + page)
            .then(res => {
                debugger
                this.props.setFetching();
                this.props.setUsersPage(page);
                this.props.setUsers(res.data.entries);
                this.props.setUsersCount(res.data.count);
            });

    };

    render() {
        return <Users {...this.props} setPage={this.setPage}/>
    }
}

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersMiddleware);

export default UsersContainer;