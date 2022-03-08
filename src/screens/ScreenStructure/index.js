import React, { Component } from 'react';
import {  Text, Image } from 'react-native';
import Components from 'components';
import Button from 'components/Button/index';
import { createRequest, Routines } from '../../services/api';
import { connect } from 'react-redux';
import DocumentPicker from 'react-native-document-picker';


class ScreenStructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            image: null
        }
    }
    componentDidMount() {

    }





    // UploadImage = async () => {
    //     const res = await DocumentPicker.pick({
    //         type: [DocumentPicker.types.allFiles],
    //     });
    //     RNFetchBlob.fs
    //         .stat(res[0].uri)
    //         .then((stats) => {
    //             console.log("STAT PATH=======================================", stats);
    //             this.setState({
    //                 file: {
    //                     path: stats.path,
    //                     type: stats.type,
    //                 }
    //             });
    //             //output: /storage/emulated/0/WhatsApp/Media/WhatsApp Images/IMG-20200831-WA0019.jpg
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    //     console.log(res)
    // }


    UpdateImage = () => {
        console.log(this.state.file);
        Routines.user.uploadImage({
            request: createRequest(this.state.file, 'avatar'),
        }, this.props.dispatch)
            .then(response => console.log("Send imagesdan qaytib kelgan narsa"))
            .catch((err) => console.log('err'))
    }


    Register = () => {
        Routines.user.register({
            request: {
                name: 'shohjahon Ilhomjonoovich',
                email: "urolovshohjahonnnn@gmail.com",
                password: '222222222',
                age: 22
            },
        }, this.props.dispatch)
            .then(response => console.log(response.data))
            .catch((err) => console.log('err'))
    }

    Login = () => {
        Routines.user.login({
            request: {
                email: "urolovshohjahonnnn@gmail.com",
                password: '222222222',
            },
        }, this.props.dispatch)
            .then(response => console.log(response.data))
            .catch((err) => console.log('err'));
    }
    UpdateProfile = () => {
        Routines.user.updateProfile({
            request: {
                age: "42"
            },

        }, this.props.dispatch)
            .then(response => console.log(response.data))
            .catch((err) => console.log('err'))
    }


    GetAvatar = () => {
        Routines.user.getAvatar({
            request: {
                
            }
        }, this.props.dispatch)
            .then(response => {
                console.log("Get avatardan qaytgani: ", response.response);
                this.setState({ image: response.data })
            })
            .catch((err) => console.log('Error'))
    }

    render() {
        return (
            <Components.Layout>
                <Button isLoading={false} onPress={this.Register}>
                    <Text>Register</Text>
                </Button>
                <Button isLoading={false} onPress={this.Login}>
                    <Text>Login</Text>
                </Button>
                <Button isLoading={false} onPress={this.UpdateProfile}>
                    <Text>Update profile</Text>
                </Button>
                <Button isLoading={false} onPress={this.UploadImage}>
                    <Text>Upload Image</Text>
                </Button>
                <Button isLoading={false} onPress={this.UpdateImage}>
                    <Text>Send Image</Text>
                </Button>
                <Button isLoading={false} onPress={this.GetAvatar}>
                    <Text>Get Avatar</Text>
                </Button>
                <Image
                    source={{uri:"https://api-nodejs-todolist.herokuapp.com/user/6224c5c303aeda00176bea8c/avatar"}}
                    style={{
                        width:200,
                        height:300
                    }}
                />
                <Text>{this.state.file && this.state.file.path}</Text>

            </Components.Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.profile.data,
    }
};

export default connect(mapStateToProps)(ScreenStructure);