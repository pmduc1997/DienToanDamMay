import React, { Fragment } from "react";
import BaseScreen from "app/screens/BaseScreen";
import { GiftedChat } from 'react-native-gifted-chat'
import styles from "./Styles";
import { View, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomText from "app/components/customText";
import Modal from "react-native-modal";
import BackIcon from '../../assets/icons/left-arrow.png';
import TagIcon from '../../assets/icons/tag.png'
import ArrowUpIcon from '../../assets/icons/diagonal-arrow.png'
import DoubleTickIcon from '../../assets/icons/double-tick.png'
import ShoppingCartIcon from '../../assets/icons/shopping-cart.png';
import CloseIcon from '../../assets/icons/multiply.png';
import SearchIcon from '../../assets/icons/search.png';
import { FlatList } from "react-native-gesture-handler";
import CustomDivider from "../../components/customDivider";
import ic_hide from 'app/assets/icons/hide.png';
import ic_copy from 'app/assets/icons/copy-icon.png';

export default class ConversationDetails extends BaseScreen {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      search: '',
      data:
      {
        id: 1,
        name: 'Tên khách hàng here',
        avatar: 'https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg',
        lastMessage: 'Sale xử lý',
        state: 'seen',
        updatedAt: '12/11/2019'
      },
      quickAnswers: [
        '1 ngày chạy 10k bước',
        'đắt rẻ đều rất chạy',
        'luôn có 1 người rất cố gắng',
        'không thử thách nào là quá khó cả',
        '1 ngày chạy 10k bước',
        'đắt rẻ đều rất chạy',
        'luôn có 1 người rất cố gắng',
        'không thử thách nào là quá khó cả',
      ],
      filteredAnswers: [],
      block: [
        'Welcome Message',
        'Default Answer',
        'Cơ hội kinh doanh',
        'Đã từng kinh doanh',
        'Chưa từng kinh doanh',
      ],
      isModalVisible: false,
      isBlockModalVisible: false
    }
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          avatar: 'http://www.topcartoons.tv/wp-content/uploads/The-Worry-Men.jpg',
          text: 'Chào bạn! Bạn có nhu cầu gì ạ ?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  _onSearch = (text) => {
    this.setState(prevState => {
      const filteredData = prevState.quickAnswers.filter(element => {
        return element.toLowerCase().includes(text.toLowerCase());
      });
      return {
        search: text,
        filteredAnswers: filteredData
      };
    });
  }
  quickAnswersModal = () => {
    const { search, quickAnswers, filteredAnswers, } = this.state
    return (
      <Modal
        style={{ borderRadius: 15 }}
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.setState({ isModalVisible: false })}
      >
        <KeyboardAvoidingView behavior="height" enabled>
          <View style={styles.contentModal}>
            <View style={styles.headerQuickAnswer}>
              <CustomText size={14} style={styles.headerText}>Trả lời nhanh</CustomText>
              <View style={styles.searchBox}>
                <TextInput style={styles.searchInput} onChangeText={text => this._onSearch(text)} />
                <Image style={styles.icon} source={SearchIcon} />
              </View>
              <TouchableOpacity onPress={this.toggleModal}>
                <Image style={styles.closeIcon} source={CloseIcon} />
              </TouchableOpacity>
            </View>
            <View style={[styles.container, styles.quickAnswersView]}>
              <FlatList
                data={search == '' ? quickAnswers : filteredAnswers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => this._renderItem(item)}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal >
    )
  }

  blockModal = () => {
    return (
      <Modal
        style={{ borderRadius: 15 }}
        isVisible={this.state.isBlockModalVisible}
        onBackdropPress={() => this.setState({ isBlockModalVisible: false })}
      >
        <KeyboardAvoidingView behavior="height" enabled>
          <View style={styles.contentModal}>
            <View style={styles.headerQuickAnswer}>
              <CustomText size={14} style={styles.headerText}>Blocks</CustomText>
              <View style={styles.searchBox}>
                <TextInput style={styles.searchInput} />
                <Image style={styles.icon} source={SearchIcon} />
              </View>
              <TouchableOpacity onPress={this.toggleBlockModal}>
                <Image style={styles.closeIcon} source={CloseIcon} />
              </TouchableOpacity>
            </View>
            <View style={[styles.container, styles.quickAnswersView]}>
              <FlatList
                data={this.state.block}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => this._renderBlockItem(item)}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    )
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  toggleBlockModal = () => {
    this.setState({ isBlockModalVisible: !this.state.isBlockModalVisible });
  };
  _renderItem(item) {
    return (
      <Fragment>
        <TouchableOpacity>
          <CustomText size={16} style={styles.quickAnswersText}>{item}</CustomText>
        </TouchableOpacity>
        <CustomDivider color="#bdbdbd" />
      </Fragment>
    );
  }
  _renderBlockItem(item) {
    return (
      <Fragment>
        <TouchableOpacity>
          <CustomText size={16} style={[styles.quickAnswersText, { color: 'black' }]}>{item}</CustomText>
        </TouchableOpacity>
        <CustomDivider color="#bdbdbd" />
      </Fragment>
    )
  }
  render() {
    const { data } = this.state
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.area}>
        <View style={styles.headerTab}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image style={[styles.icon, { marginLeft: 15, marginRight: 3 }]} source={BackIcon} />
          </TouchableOpacity>
          {/* <View style={[styles.avatar, { flex: 1.6 }]}>
            {data.avatar
              ?
              <Avatar size={40} rounded source={{ uri: data.avatar }} />
              :
              <Avatar size={40} rounded title={data.name} />
            }
          </View> */}
          <View style={styles.contactInfo}>
            <CustomText size={16} style={styles.contactName}>{data.name}</CustomText>
            <Image style={[styles.icon, { marginLeft: 5 }]} source={ic_copy} />
            {/* <CustomText size={13} style={styles.lastMessage}>{data.lastMessage}</CustomText> */}
          </View>
          <View style={styles.contactIcons}>
            <TouchableOpacity onPress={this.toggleModal}>
              <Image style={styles.icon} source={ic_hide} />
            </TouchableOpacity>
            <Image style={styles.icon} source={DoubleTickIcon} />
            <TouchableOpacity onPress={this.toggleBlockModal}>
              <Image style={styles.icon} source={ArrowUpIcon} />
            </TouchableOpacity>
            <Image style={styles.icon} source={ShoppingCartIcon} />
          </View>
        </View>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {this.quickAnswersModal()}
        {this.blockModal()}
      </View>
    )
  }
}
