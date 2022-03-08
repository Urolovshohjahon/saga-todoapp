import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import Components from 'components';
import Button from 'components/Button/index';
import FormScroller from 'components/FormScroller/index';
import InfiniteFlatList from 'components/InfiniteFlatList/index';
import Input from 'components/TextField/index';
import { createRequest, Routines } from '../../services/api';
import { connect } from 'react-redux';
import styles from './style';
import NavigationService from 'navigators/NavigationService';


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: null,
            loading: false,
            screenLoader: true
        }
    }
    componentDidMount() {
        this.GetTaskById();
    }

    GetTaskById = () => {
        Routines.filemanager.getTaskById({
            request: {
                id: this.props.taskId
            }
        }, this.props.dispatch)
            .then((response) => {
                console.log("Get Task BY Id dan qaytgani", response.response.data.data);
                this.setState({
                    description: response.response.data.data.description,
                    screenLoader: false
                });

            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    UpdateTaskById = () => {
        this.setState({
            loading: true
        })
        Routines.filemanager.updateTaskByID({
            request: {
                id: this.props.taskId,
                description: this.state.description
            }
        }, this.props.dispatch)
            .then((response) => {
                console.log("UpdateTaskById dan qaytgani", response);
                this.GetAllTasks()
                NavigationService.navigate('todo');
            })
            .catch((err) => {
                console.log(err.message);
                this.setState({
                    loading: false
                })
            })
    }

    GetAllTasks = () => {
        Routines.filemanager.getAllTasks({
            request: {}
        }, this.props.dispatch)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }




    render() {
        return (
            <Components.Layout>
                {!this.state.screenLoader ? <View style={styles.body} >
                    <TextInput
                        placeholder='Description'
                        style={styles.input}
                        multiline
                        value={this.state.description}
                        onChangeText={(value) => {
                            this.setState({
                                description: value
                            })
                        }}
                    />
                    <Button isLoading={this.state.loading} color='#1eb900' style={{ width: '100%' }} onPress={this.UpdateTaskById} >
                        <Text style={styles.text}>Save changes</Text>
                    </Button>
                </View> : null}
            </Components.Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.profile.data,
        taskId: state.task.taskId
    }
};

export default connect(mapStateToProps)(Task);