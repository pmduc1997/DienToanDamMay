import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from "react-native";
import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";
import Header from "app/screens/header/Header";
import CustomText from "../../../../components/customText/index"
import i18n from "app/localization/i18n";
import { mainColor } from "../../../../utils/styleUtils";
import { Icon } from 'react-native-elements'
import tags from "./data";
import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import DatePicker from 'react-native-datepicker'

export default class EditCustomer extends BaseScreen {
    constructor(props) {
        super(props);
        this.state = {
            isSub: false,
            data: tags,
            gender: '',
            birthDay: "15-05-2016",
            screen: 'editCustomer'
        };
    }

    btnSubscrible = () => {
        const { isSub } = this.state
        this.setState({
            isSub: !isSub
        })
    }

    onTag = (index) => {
        const { data } = this.state
        data[index].picked = !data[index].picked
        this.setState({
            ...this.state,
            data
        })
    }

    handleChange = (name) => {
        return (text) => {
            this.setState({
                ...this.state,
                [name]: text
            })
        }
    }

    render() {
        const { isSub, gender, data, screen } = this.state
        console.log('STATE', this.state)
        return (
            <KeyboardAvoidingViewKeyboardDismiss>
                <View style={styles.area}>
                    <Header screen={screen} ref={"header"} navigation={this.props.navigation}>
                        <Text style={styles.titleTab}>{i18n.t("profile.title")}</Text>
                    </Header>
                    {/* Avatar */}
                    <View style={styles.avaAndSubs}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: 'https://znews-photo.zadn.vn/w660/Uploaded/pnbcuhbatgunb/2019_09_14/70534444_150857789485843_7517361369506288123_n_1.jpg' }} />
                        {
                            !isSub ?
                                <TouchableOpacity style={styles.btnSubs}
                                    onPress={this.btnSubscrible}
                                >
                                    <View style={styles.btnSubsContent}>
                                        <CustomText>
                                            Đăng ký
                                    </CustomText>
                                        <Icon type='font-awesome' name="plus" size={15} color="black" />
                                    </View>
                                </TouchableOpacity> :
                                <TouchableOpacity style={styles.btnSubsChecked}
                                    onPress={this.btnSubscrible}
                                >
                                    <View style={styles.btnSubsContent}>
                                        <CustomText style={{ color: "white" }}>
                                            Đã đăng ký
                                    </CustomText>
                                        <Icon type='font-awesome' name="check" size={15} color="white" />
                                    </View>
                                </TouchableOpacity>
                        }

                    </View>
                    {/* Tag */}
                    <View style={styles.tags}>
                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type='font-awesome' name="tags" size={17} color="black" />
                            <CustomText style={{ marginLeft: 10 }}>Nhãn khách hàng ( Click để chọn )</CustomText>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: "wrap", marginLeft: 5 }}>
                        {data.map((item, index) => !item.picked ?
                            <TouchableOpacity style={{
                                margin: 5, backgroundColor: "#e0e0e0", borderRadius: 20
                            }} key={index} onPress={this.onTag.bind(this, index)}>
                                <CustomText style={{ paddingHorizontal: 8, paddingVertical: 4 }}>{item.content}</CustomText>
                            </TouchableOpacity>
                            : <TouchableOpacity style={{
                                margin: 5, backgroundColor: mainColor.baseColor, borderRadius: 20
                            }} key={index} onPress={this.onTag.bind(this, index)}>
                                <CustomText style={{ paddingHorizontal: 8, paddingVertical: 4, color: 'white' }}>{item.content}</CustomText>
                            </TouchableOpacity>
                        )}
                    </View>
                    {/* Edit user */}
                    <View style={styles.formInputs}>
                        <CustomText style={styles.lable}>ID</CustomText>
                        <TextInput placeholder='Id' style={styles.input} onChangeText={this.handleChange('_id')} />
                    </View>
                    <View style={styles.formInputs}>
                        <CustomText style={styles.lable}>Tên</CustomText>
                        <TextInput placeholder='Nhập tên người dùng' style={styles.input} onChangeText={this.handleChange('fullname')} />
                    </View>
                    <View style={styles.formInputs}>
                        <CustomText style={styles.lable}>Email</CustomText>
                        <TextInput placeholder='Nhập email' style={styles.input} onChonChangeTextange={this.handleChange('email')} />
                    </View>
                    <View style={styles.formInputs}>
                        <CustomText style={styles.lable}>Số điện thoại</CustomText>
                        <TextInput placeholder='Nhập số điện thoại' style={styles.input} onChangeText={this.handleChange('phone')} />
                    </View>
                    <View style={styles.formInputs}>
                        <CustomText style={styles.lable}>Địa chỉ</CustomText>
                        <TextInput placeholder='Nhập địa chỉ' style={styles.input} onChangeText={this.handleChange('address')} />
                    </View>
                    <View style={styles.formInputs}>
                        <CustomText style={styles.lable}>Giới tính</CustomText>
                        <View style={styles.gender}>
                            <View style={{ flexDirection: 'row' }}>
                                <CustomText style={{ marginRight: 10 }}>Nam</CustomText>
                                <TouchableOpacity style={styles.btnGender} onPress={() => this.setState({ gender: 'male' })}>
                                    {gender === 'male' && <View style={styles.onChecked}></View>}
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <CustomText style={{ marginRight: 10 }}>Nữ</CustomText>
                                <TouchableOpacity style={styles.btnGender} onPress={() => this.setState({ gender: 'female' })}>
                                    {gender === 'female' && <View style={styles.onChecked}></View>}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.formInputs}>
                        <CustomText style={styles.lable}>Ngày sinh</CustomText>
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.birthDay}
                            mode="date"
                            format="DD-MM-YYYY"
                            confirmBtnText={i18n.t("button.ok")}
                            cancelBtnText={i18n.t("button.cancel")}
                            customStyles={{
                                dateIcon: {
                                    position: "absolute",
                                    right: 0
                                },
                                dateInput: {
                                    borderWidth: 0,
                                    alignItems: "flex-start"
                                }
                            }}
                            onDateChange={date => {
                                this.setState({ birthDay: date });
                            }}
                        />
                    </View>
                    <View style={styles.formInputs}>
                        <CustomText style={styles.lable}>Thành phố</CustomText>
                        <TextInput placeholder='Tỉnh thành' style={styles.input} onChangeText={this.handleChange('city')} />
                    </View>
                    {/* button Edit */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{ marginVertical: 10, width: '45%', height: 50, borderRadius: 20, backgroundColor: mainColor.baseColor, justifyContent: 'center', alignItems: 'center' }}>
                            <CustomText style={{ color: 'white' }}>Cập nhật</CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingViewKeyboardDismiss>
        );
    }
}
