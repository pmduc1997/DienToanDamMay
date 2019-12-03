import React, { Fragment } from "react";
import {
    View,
    StatusBar,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList
} from "react-native";
import { CheckBox, Button } from "react-native-elements";

import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";
import Header from "app/screens/header/Header";
import { Avatar, Icon } from 'react-native-elements'

import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import i18n from "app/localization/i18n";
import rf from "app/libs/RequestFactory";
import AppPreferences from "app/utils/AppPreferences";
import AppConfig from "app/utils/AppConfig";
import CustomText from "app/components/customText";
import CustomDivider from "app/components/customDivider";

const NextIcon = require('app/assets/icons/arrow-next.png')
import ic_search from "app/assets/icons/search.png";
import ic_refresh from "app/assets/icons/refresh.png";

export default class ConnectPage extends BaseScreen {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [
                {
                    id: 1,
                    name: 'Vé máy bay giá rẻ',
                    username: 'Admin',
                    avatar: 'https://vi.seaicons.com/wp-content/uploads/2017/03/plane-icon.png',
                    status: 1
                },
                {
                    id: 2,
                    name: '1 Bước tiến gần đến thành công',
                    username: 'Biên tập',
                    avatar: 'https://nuu.com.vn/wp-content/uploads/2018/04/key.jpg',
                    status: 0
                },
                {
                    id: 3,
                    name: 'Giày tay cao cấp',
                    username: 'Admin',
                    avatar: 'https://cf.shopee.vn/file/4aac1c202164497a2aa7d12b2f375dd1',
                    status: 1
                },
                {
                    id: 4,
                    name: 'Cùng bully ngưng lời các ý',
                    username: 'Biên tập',
                    avatar: 'https://znews-stc.zdn.vn/static/topic/person/chi%20pu.jpg',
                    status: 1
                },
                {
                    id: 5,
                    name: 'Vé máy bay giá rẻ',
                    username: 'Admin',
                    avatar: 'https://vi.seaicons.com/wp-content/uploads/2017/03/plane-icon.png',
                    status: 1
                },
                {
                    id: 6,
                    name: '1 Bước tiến gần đến thành công',
                    username: 'Biên tập',
                    avatar: 'https://nuu.com.vn/wp-content/uploads/2018/04/key.jpg',
                    status: 0
                },
                {
                    id: 7,
                    name: 'Giày tay cao cấp',
                    username: 'Admin',
                    avatar: 'https://cf.shopee.vn/file/4aac1c202164497a2aa7d12b2f375dd1',
                    status: 1
                },
                {
                    id: 8,
                    name: 'Cùng bully ngưng lời các ý',
                    username: 'Biên tập',
                    avatar: 'https://znews-stc.zdn.vn/static/topic/person/chi%20pu.jpg',
                    status: 1
                },
                {
                    id: 9,
                    name: 'Vé máy bay giá rẻ',
                    username: 'Admin',
                    avatar: 'https://vi.seaicons.com/wp-content/uploads/2017/03/plane-icon.png',
                    status: 1
                },
                {
                    id: 21,
                    name: '1 Bước tiến gần đến thành công',
                    username: 'Biên tập',
                    avatar: 'https://nuu.com.vn/wp-content/uploads/2018/04/key.jpg',
                    status: 0
                },
                {
                    id: 32,
                    name: 'Giày tay cao cấp',
                    username: 'Admin',
                    avatar: 'https://cf.shopee.vn/file/4aac1c202164497a2aa7d12b2f375dd1',
                    status: 1
                },
                {
                    id: 43,
                    name: 'Cùng bully ngưng lời các ý',
                    username: 'Biên tập',
                    avatar: 'https://znews-stc.zdn.vn/static/topic/person/chi%20pu.jpg',
                    status: 1
                }
            ]
        };
    }

    _doConnect = () => this.navigate('Main')

    onSearch = () => { }

    _renderItem(item) {
        return (
            <Fragment>
                <TouchableOpacity onPress={this._doConnect}>
                    <View style={styles.contact}>
                        <View style={styles.contactAvatar}>
                            {item.avatar
                                ?
                                <Avatar size={50} rounded source={{ uri: item.avatar }} />
                                :
                                <Avatar size="large" rounded title={item.name} />
                            }
                        </View>
                        <View style={styles.contactInfo}>
                            <CustomText size={16} style={styles.contactName}>{item.name}</CustomText>
                            <CustomText size={13} style={styles.lastMessage}>{item.username}</CustomText>
                        </View>
                        <View style={styles.contactMore}>
                            <View style={styles.btnConnect}>
                                <CustomText size={12} style={{ color: 'white' }}>Kết nối</CustomText>
                            </View>
                            {/* <Image
                                style={styles.nextIcon}
                                source={NextIcon}
                            /> */}
                        </View>
                    </View>
                </TouchableOpacity>
                <CustomDivider color="#999" />
            </Fragment>

        )
    }

    renderFooter = () => <View style={styles.noPage}>
        <CustomText size={16}>Bạn không tìm thấy fanpage?</CustomText>
        <View style={styles.btnRefresh}>
            <Image style={styles.refreshIcon} source={ic_refresh} />
            <CustomText style={{ color: 'white', marginLeft: 7 }}>Làm mới kết nối</CustomText>
        </View>
    </View>

    render() {
        return (
            <View style={styles.area}>
                <StatusBar backgroundColor="#006AFE" barStyle="light-content" />
                <Header ref={"header"} navigation={this.props.navigation} invisibleNotify>
                    <CustomText style={styles.titleTab}>Kết nối fanpage</CustomText>
                </Header>
                <View style={[styles.container]}>
                    <View style={styles.inputSearch}>
                        <Image style={styles.searchIc} source={ic_search} />
                        <TextInput
                            keyboardType={"default"}
                            placeholder={i18n.t("pages.placeholder")}
                            style={styles.searchTxt}
                            // value={this.state.keySearch}
                            onChangeText={keySearch => this.onSearch(keySearch)}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => this._renderItem(item)}
                            ListFooterComponent={this.renderFooter}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
