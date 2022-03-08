import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from "services/api";
import get from 'lodash/get';
import Launch from "./index_without_connect";
import NavigationService from 'navigators/NavigationService';
import { LOGOUT } from 'store/constants';
import i18next from 'i18next';
import Components from 'components';
import { Api } from "services/api";

class LaunchScreen extends Component {
    componentDidMount() {
        let token = get(this.props, 'login.token', null);
        let baseUrl = get(this.props, 'baseUrl', null);
        console.log("this.props:----------------------------", this.props)
        if (baseUrl)
            Api.setBaseURL(baseUrl)
        if (token) {
            setTimeout(() => {
                this.getUserData()
            }, 500)
        } else {
            setTimeout(() => {
                this.props.navigation.reset({
                    index: 0,
                    routes: [
                        { name: 'screenStructure' }
                    ]
                })
            }, 500)
        }

        this.getUserData()
    }
    getUserData() {
        Routines.user.getMe({
            request: {
            }
        }, this.props.dispatch)
            .then(
                (successPayload) => {
                    console.log("Bu launch screen getUserdata:", successPayload)
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'screenStructure' }]
                    })
                },
                (failurePayload) => {
                    console.log("failurePayload", failurePayload);
                    let status = get(failurePayload, 'message.status', 404);
                    if (status === 401) {
                        NavigationService.reset('home', 0);
                        this.props.dispatch({ type: LOGOUT });
                        this.removeOneSignalId()
                    }
                    else {
                        if (failurePayload.message === "NETWORK_ERROR") {
                            Components.Toast.show();
                        }
                        let routeName = 'network';
                        NavigationService.reset(routeName, 0)
                    }
                }
            )
            .catch(err => console.log("ERRORRRRR"))
    }
    removeOneSignalId() {
        // Routines.user.removeOneSignalId({request: {
        //         data: {account_id: this.props.oneSignalId}
        //     }}, this.props.dispatch)
    }
    render() {
        return (
            <Components.Layout>
                <Launch />
            </Components.Layout>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.profile.data,
        baseUrl: state.profile.baseUrl
    }
};
export default connect(mapStateToProps)(LaunchScreen)