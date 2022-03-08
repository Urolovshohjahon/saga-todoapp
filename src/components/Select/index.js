import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Dimensions,
    RefreshControl,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import Components from '../index';
import get from 'lodash/get';
import styles from './styles';
import ArrowBottom from 'assets/images/Icon/ArrowBottom';
import Modal from "react-native-modal";
import i18next from 'i18next';
import { Api } from 'services/api';
import buildUrl from 'build-url';
import uniqBy from "lodash/uniqBy";

const { height } = Dimensions.get('window');

class Select extends Component {

    constructor(props) {
        super(props);
        this.scrollOffset = null;
        this.state = {
            visible: false,
            data: [],
            meta: {},
            isFetched: true,
            current_page: 1,
            refreshing: false,
            searchText: ""
        };
        this.scrollViewRef = React.createRef();
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    static defaultProps = {
        onSelect: () => { },
        renderInput: undefined,
        renderRow: undefined
    };

    componentDidMount() {
        this.getData(1, false, false)
    }

    handleOnScroll = event => {
        this.scrollOffset = event.nativeEvent.contentOffset.y
    };
    handleScrollTo = p => {
        if (this.scrollViewRef.current) {
            this.scrollViewRef.current.scrollTo(p);
        }
    };
    close() {
        this.setState({ visible: false, searchText: "" })
    }
    open() {
        this.setState({ visible: true });
        // if(get(this.state, `data`, []).length === 0)
        this.getData(1, false, false)
    }
    getData(current_page = 1, isFetched = true, refreshing = true) {
        let { loadOptionsUrl, loadOptionsParams, disabled } = this.props;

        let queryParams = {};

        if (this.state.searchText)
            queryParams["name"] = this.state.searchText;

        let url = buildUrl(loadOptionsUrl, {
            queryParams: {
                page: current_page,
                _l: i18next.languages[0],
                ...queryParams,
                ...loadOptionsParams,
            }
        });
        if (!disabled) {
            this.setState({ isFetched, refreshing });
            Api.user.getData({ url })
                .then((res) => {
                    let olderData = [];
                    if (current_page !== 1)
                        olderData = get(this.state, `data`, []);
                    let { data, _meta } = get(res, `data`, []);
                    console.log("data", data)
                    this.setState({
                        data: uniqBy([...olderData, ...data], 'id'),
                        meta: _meta,
                        isFetched: true,
                        refreshing: false,
                        current_page: current_page + 1
                    })
                })
                .catch((error) => {
                    console.log("error", error)
                    this.setState({ isFetched: true, refreshing: false });
                });
        }
    }
    render() {
        const {
            placeholder,
            loadOptionsUrl,
            optionLabel,
            field,
            form: { errors, setFieldValue, setFieldTouched, touched },
            disabled,
            onSelect = () => { },
            renderInput,
            renderRow
        } = this.props;
        let { visible, data, meta, isFetched, current_page, refreshing } = this.state;

        const error = get(errors, field.name, "");

        return (
            <View>
                {
                    visible ? (
                        <StatusBar translucent backgroundColor="rgba(0,0,0,0.4)" />
                    ) : null
                }
                <TouchableOpacity onPress={this.open} disabled={disabled}>
                    {
                        renderInput ? renderInput(this.props) : (
                            <>
                                <Text style={[styles.text, disabled ? { opacity: 0.4 } : {}]}>
                                    {field.value ? get(field.value, optionLabel, "") : placeholder}
                                </Text>
                                <View style={[styles.hairlineWidth, error ? { backgroundColor: "#D0021B" } : {}]} />
                                <View style={styles.arrow}>
                                    <ArrowBottom />
                                </View>
                            </>
                        )
                    }
                </TouchableOpacity>
                <Modal
                    isVisible={visible}
                    backdropColor={'rgba(0,0,0,0.4)'}
                    onSwipeComplete={this.close}
                    onBackButtonPress={this.close}
                    onBackdropPress={this.close}
                    swipeDirection={['down']}
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.scrollOffset}
                    scrollOffsetMax={height * 0.9} // content height - ScrollView height
                    propagateSwipe={true}
                    style={styles.modal}
                >
                    <KeyboardAvoidingView enabled behavior={undefined}>
                        <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">

                            <View style={[{ flex: 1 }]}>
                                <View style={styles.scrollableModal}>
                                    <View style={styles.top}>
                                        <View />
                                        <TouchableOpacity onPress={this.close} style={styles.close}>
                                            <Text style={styles.closeButtonText}>
                                                {i18next.t("Close")}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <ScrollView
                                        ref={this.scrollViewRef}
                                        onScroll={this.handleOnScroll}
                                        scrollEventThrottle={16}
                                        contentContainerStyle={styles.scroll}
                                        onMomentumScrollEnd={() => {
                                            if (meta && meta.pageCount >= current_page)
                                                this.getData(current_page, true, false)
                                        }}
                                        refreshControl={
                                            <RefreshControl
                                                refreshing={refreshing}
                                                onRefresh={() => { this.getData(1, true, true) }}
                                            />
                                        }
                                    >
                                        <Components.SearchBar
                                            // title={i18next.t("Поиск")}
                                            onSubmitEditing={(text) => {
                                                this.setState({ searchText: text }, () => {
                                                    this.getData(1, false, false)
                                                })
                                            }}
                                            onChangeText={(text) => {
                                                this.setState({ searchText: text }, () => {
                                                    this.getData(1, false, false)
                                                })
                                            }}
                                        />
                                        {
                                            isFetched && data.length === 0 ? (
                                                <View style={styles.emptyWrap}>
                                                    <Text>
                                                        {i18next.t("No data")}
                                                    </Text>
                                                </View>
                                            ) : null
                                        }
                                        {
                                            data && data.map((item, index) => {
                                                return renderRow ? renderRow(item, this.close) : (
                                                    <TouchableOpacity
                                                        style={styles.scrollableModalContent}
                                                        key={index}
                                                        onPress={() => {
                                                            setFieldValue(field.name, item);
                                                            onSelect(item);
                                                            this.close()
                                                        }}
                                                    >
                                                        <Text style={styles.scrollableModalText}>
                                                            {get(item, optionLabel, '')}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                    <Components.Spinner processing={!isFetched} />
                                </View>
                            </View>

                        </ScrollView>
                    </KeyboardAvoidingView>
                </Modal>
            </View>
        )
    }
}
export default Select;
