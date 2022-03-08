import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Components from 'components';
import { Routines } from '../../services/api';
import { connect } from 'react-redux';
import styles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavigationService from 'navigators/NavigationService';
import FlatList from 'components/InfiniteFlatList';
import Button from 'components/Button'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            image: null,
            refreshing: true
        }
    }
    componentDidMount() {
        this.Login();

    }

    Login = () => {
        Routines.user.login({
            request: {
                email: "urolovshohruh@gmail.com",
                password: '222222222',
            },
        }, this.props.dispatch)
            .then(response => {
                console.log(response.data);
                this.GetAllTasks();
            })
            .catch((err) => console.log('err'));
    }

    GetAllTasks = () => {
        this.setState({
            refreshing: true
        })
        Routines.filemanager.getAllTasks({
            request: {}
        }, this.props.dispatch)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    refreshing: false
                })
            })
            .catch((err) => {
                console.log(err.message);
                this.setState({
                    refreshing: false
                })
            })
    }


    DeleteTask = (id) => {
        Routines.filemanager.deleteTask({
            request: {
                id
            }
        }, this.props.dispatch)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    SetId = (id) => {
        this.props.dispatch({ type: 'SET_TASK_ID', payload: id });
        NavigationService.navigate('edittask');
    }



    render() {
        return (
            <Components.Layout>
                <View style={styles.body} >
                    {/* <Button isLoading={false} onPress={this.Login}>
                        <Text>Login</Text>
                    </Button> */}

                    <FlatList
                        onRefresh={this.GetAllTasks}
                        refreshing={this.state.refreshing}
                        data={this.props.tasks}
                        renderItem={({ item }) => (
                            <View style={styles.item}  >
                                <View style={styles.item_row} >
                                    <View style={styles.item_body} >
                                        <Text style={styles.subtitle} >{item.description}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }} >
                                        <TouchableOpacity style={styles.delete}
                                            onPress={() => this.SetId(item._id)}
                                        >
                                            <FontAwesome5 size={25} color={'blue'} name={'edit'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.delete}
                                            onPress={() => this.DeleteTask(item._id)}
                                        >
                                            <FontAwesome5 size={25} color={'#ff3636'} name={'trash'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity onPress={() => NavigationService.navigate('newtask')} style={styles.button} >
                        <FontAwesome5 name={'plus'} size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
            </Components.Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.profile.data,
        tasks: state.task.tasks
    }
};

export default connect(mapStateToProps)(Todo);