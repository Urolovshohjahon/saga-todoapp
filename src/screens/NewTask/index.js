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
            description: '',
            loading: false
        }
    }
    componentDidMount() {

    }

    AddTask = () => {

        this.setState({
            loading: true
        })


        Routines.filemanager.addTask({
            request: {
                description: this.state.description
            }
        }, this.props.dispatch)
            .then((response) => {
                console.log(response.data);
                NavigationService.navigate('todo');

            })
            .catch((err) => {
                console.log(err.message);
                this.setState({
                    loading: false
                })
            })
    }




    render() {
        return (
            <Components.Layout>
                <View style={styles.body} >
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
                    <Button isLoading={this.state.loading} color='#1eb900' style={{ width: '100%' }} onPress={this.AddTask} >
                        <Text style={styles.text}>Save Task</Text>
                    </Button>
                </View>
            </Components.Layout>
        )
    }
}



export default connect()(Task);