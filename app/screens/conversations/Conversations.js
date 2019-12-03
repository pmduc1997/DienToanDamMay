import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';
import BaseScreen from 'app/screens/BaseScreen';
import styles from './Styles';
import Header from './header/Header';
import { KeyboardAvoidingViewKeyboardDismiss } from 'app/helpers/KeyboardAvoidingViewKeyboardDismiss';
import i18n from 'app/localization/i18n';
import { Avatar } from 'react-native-elements';
import rf from 'app/libs/RequestFactory';
import AppConfig from 'app/utils/AppConfig';
import moment from 'moment';

import ic_search from 'app/assets/icons/search.png';
import ic_star from 'app/assets/icons/star.png';
import CustomText from 'app/components/customText';
import ic_az from 'app/assets/icons/alphabetical-order.png';
import ic_messengernav from 'app/assets/icons/messengernav.png';
import ic_comments from 'app/assets/icons/comments.png';
import ic_hide from 'app/assets/icons/hide.png';
import ic_checksymbol from 'app/assets/icons/check-symbol.png';
import ic_tags from 'app/assets/icons/tags.png';
import ic_filter from 'app/assets/icons/filter-tool-black-shape.png';
import ic_phone from 'app/assets/icons/call-answer1.png';
import ic_sale from 'app/assets/icons/sale.png';
import ic_next from 'app/assets/icons/next-icon.png';
import ic_call_answer from 'app/assets/icons/call-answer.png';

const MessengerIcon = () => require('../../assets/icons/messenger.png');

export default class Conversations extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      shop: {
        image:
          'https://cdn2.iconfinder.com/data/icons/set-of-various-icons/512/plane-512.png',
        name: 'Shop vé máy bay',
      },
      data: [
        {
          id: 1,
          name: 'QT the worry',
          avatar:
            'https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg',
          lastMessage: 'Nhà bao việc :(',
          state: 'seen',
          labels: ['Cần tư vấn', 'Có số điện thoại'],
          updatedAt: '12/11/2019',
          group: {
            groupName: 'Hội những người thích mua sắm',
            groupAvatar:
              'https://photo-2-baomoi.zadn.vn/w1000_r1/2019_08_17_304_31864366/439f48a315e3fcbda5f2.jpg',
          },
        },
        {
          id: 2,
          name: 'Ngọc Linh',
          avatar:
            'https://vtv1.mediacdn.vn/zoom/550_339/2017/crop-1508745739145.jpg',
          lastMessage: '?? :D ??',
          state: 'notseen',
          labels: [],
          updatedAt: '12/11/2019',
          group: {
            groupName: 'Cửa hàng đồ chơi',
            groupAvatar:
              'https://photo-2-baomoi.zadn.vn/w1000_r1/2019_08_17_304_31864366/439f48a315e3fcbda5f2.jpg',
          },
        },
        {
          id: 3,
          name: 'QT very worry',
          avatar:
            'https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg',
          lastMessage: 'Nhà bao việc :(',
          state: 'notseen',
          labels: ['Có số điện thoại'],
          updatedAt: '12/11/2019',
          group: {
            groupName: 'Người thật việc thật',
            groupAvatar:
              'https://photo-2-baomoi.zadn.vn/w1000_r1/2019_08_17_304_31864366/439f48a315e3fcbda5f2.jpg',
          },
        },
        {
          id: 4,
          name: 'Phạm Mỹ Chi',
          avatar:
            'https://image.thanhnien.vn/660/uploaded/thanhlongn/2019_04_24/hai_8742_orku.jpg',
          lastMessage: 'Hàng này giá thế nào vậy ad?',
          state: 'seen',
          labels: ['Có số điện thoại'],
          updatedAt: '12/11/2019',
          group: {
            groupName: 'Hội những người thích mua sắm',
            groupAvatar:
              'https://photo-2-baomoi.zadn.vn/w1000_r1/2019_08_17_304_31864366/439f48a315e3fcbda5f2.jpg',
          },
        },
        {
          id: 5,
          name: 'Phạm Mỹ Chi',
          avatar:
            'https://image.thanhnien.vn/660/uploaded/thanhlongn/2019_04_24/hai_8742_orku.jpg',
          lastMessage: 'Hàng này giá thế nào vậy ad?',
          state: 'seen',
          labels: [],
          updatedAt: '12/11/2019',
          group: {
            groupName: 'Angular Try Hard Bois',
            groupAvatar:
              'https://photo-2-baomoi.zadn.vn/w1000_r1/2019_08_17_304_31864366/439f48a315e3fcbda5f2.jpg',
          },
        },
      ],
      iconarray: [
        {
          id: 1,
          icon: ic_tags,
        },
        {
          id: 2,
          icon: ic_sale,
        },
        {
          id: 3,
          icon: ic_filter,
        },
      ],
      keySearch: '',
      page: 1,
    };
  }

  async onSearch(key_search) { }

  _renderIconRight() {
    return this.state.iconarray.map(index => (
      <TouchableOpacity key={index.id}>
        <Image source={index.icon} style={styles.imgnavright} />
      </TouchableOpacity>
    ));
  }
  _renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.navigate('ConversationDetails');
        }}>
        <View
          style={[
            item.state == 'notseen' ? { backgroundColor: '#e1f5fe' } : {},
            styles.contact,
          ]}>
          <View style={styles.avatar}>
            {item.avatar ? (
              <Avatar size={65} rounded source={{ uri: item.avatar }} />
            ) : (
                <Avatar size={65} rounded title={item.name} />
              )}
          </View>
          <View style={styles.contactInfoList}>
            <View style={styles.boxSale}>
              <View style={styles.viewAvatarSale}>
                <Image style={styles.saleAvatar} resizeMode="contain" source={{ uri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP0031-CUSA03124_00-AV00000000000004/1536913047000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000' }} />
              </View>
              <Image source={ic_next} style={styles.nextIcon} />
              <CustomText size={16} style={styles.contactName}>
                {item.name}
              </CustomText>
            </View>
            <CustomText size={13} style={styles.lastMessage}>
              {item.lastMessage}
            </CustomText>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {item.labels.map((label, i) =>
                <View key={i} style={styles.label}>
                  <CustomText size={10} style={styles.txtfeature}>{label}</CustomText>
                </View>
              )}
            </View>

            <View style={styles.group}>
              <Avatar
                size={20}
                rounded
                source={{ uri: item.group.groupAvatar }}
              />
              <CustomText style={styles.groupName}>
                {item.group.groupName}
              </CustomText>
            </View>
          </View>
          <View style={styles.contactMore}>
            <Image style={styles.messenger} source={MessengerIcon()} />
            <CustomText style={styles.updatedAt}>{item.updatedAt}</CustomText>
            <Image source={ic_phone} style={styles.imgconver} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  onEndReached() { }

  render() {
    const { shop } = this.state;
    return (
      <View style={styles.area}>
        <Header ref={'header'} navigation={this.props.navigation}>
          <Image style={styles.logoShop} source={{ uri: shop.image }} />
          <View style={styles.infoShop}>
            <CustomText style={styles.titleTab}>{shop.name}</CustomText>
            <CustomText size={10} style={{ color: 'white' }}>Admin</CustomText>
          </View>
        </Header>

        {/* begin navbar  */}

        <View style={styles.navConversation}>
          <View style={styles.btnnavleft}>
            <TouchableOpacity style={styles.btnnav1}>
              <Image source={ic_az} style={styles.imgnav} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnnav}>
              <Image source={ic_messengernav} style={styles.imgnav} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnnav}>
              <Image source={ic_comments} style={styles.imgnav} />
            </TouchableOpacity>
            <View style={styles.eyehide}>
              <TouchableOpacity style={styles.btnnav}>
                <Image source={ic_hide} style={styles.imgnav} />
              </TouchableOpacity>
              <View style={styles.numberseyeview}>
                <CustomText size={10} style={styles.numberseye}>
                  1234
                </CustomText>
              </View>
            </View>

            <TouchableOpacity style={styles.btnnav}>
              <Image source={ic_checksymbol} style={styles.imgnav} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnnav}>
              <Image source={ic_call_answer} style={styles.imgnav} />
            </TouchableOpacity>
          </View>

          <View style={styles.btnnavright}>{this._renderIconRight()}</View>
        </View>

        {/* end navbar */}

        <View style={[styles.container, { paddingBottom: 10 }]}>
          <View style={styles.inputSearch}>
            <Image style={styles.searchIc} source={ic_search} />
            <TextInput
              keyboardType={'default'}
              placeholder={i18n.t('conversations.placeholder')}
              style={styles.searchTxt}
              // value={this.state.keySearch}
              onChangeText={keySearch => this.onSearch(keySearch)}
            />
          </View>
          <ScrollView>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={() => this.onEndReached()}
              onEndReachedThreshold={0.1}
              renderItem={({ item }) => this._renderItem(item)}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
