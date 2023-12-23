import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
  LayoutAnimation,
  TextInput,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import icon_main_logo from '../../assets/icon_main_logo.png';
import icon_unselected from '../../assets/icon_unselected.png';
import icon_selected from '../../assets/icon_selected.png';
import icon_arrow from '../../assets/icon_arrow.png';
import icon_wx_small from '../../assets/icon_wx_small.png';
import icon_triangle from '../../assets/icon_triangle.png';
import icon_eye_open from '../../assets/icon_eye_open.png';
import icon_eye_close from '../../assets/icon_eye_close.png';
import icon_exchange from '../../assets/icon_exchange.png';
import icon_wx from '../../assets/icon_wx.png';
import icon_qq from '../../assets/icon_qq.webp';
import icon_close_modal from '../../assets/icon_close_modal.png';

export default () => {
  const [loginType, setLoginType] = useState<'quick' | 'input'>('quick');
  const [check, setCheck] = useState<boolean>(false);
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const renderQuickLogin = () => {
    const styles = StyleSheet.create({
      root: {
        width: '100%',
        height: '100%',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        paddingHorizontal: 56,
      },

      otherLoginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 100,
      },
      otherLoginText: {
        fontSize: 16,
        color: '#303080',
      },
      icon_arrow: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginLeft: 6,
        transform: [{rotate: '180deg'}],
      },
      wxLoginButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#05c160',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      icon_wx_small: {
        width: 40,
        height: 40,
      },
      wxLoginText: {
        fontSize: 18,
        color: 'white',
        marginLeft: 6,
      },
      oneKetLoginButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#ff2442',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 16,
      },
      oneKetLoginText: {
        fontSize: 18,
        color: 'white',
      },
      logoMain: {
        width: 180,
        height: 95,
        resizeMode: 'contain',
        position: 'absolute',
        top: 170,
      },
    });
    return (
      <View style={styles.root}>
        <View style={commonStyles.protocolLayout}>
          <TouchableOpacity
            onPress={() => {
              setCheck(!check);
            }}>
            <Image
              style={commonStyles.radioButton}
              source={check ? icon_selected : icon_unselected}
            />
          </TouchableOpacity>
          <Text style={commonStyles.labelText}>我已阅读并同意</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.baidu.com');
            }}>
            <Text style={commonStyles.protocolText}>
              《用户协议》和《隐私政策》
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.otherLoginButton}
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setLoginType('input');
          }}>
          <Text style={styles.otherLoginText}>其他登录方式</Text>
          <Image style={styles.icon_arrow} source={icon_arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.wxLoginButton} activeOpacity={0.7}>
          <Image style={styles.icon_wx_small} source={icon_wx_small} />
          <Text style={styles.wxLoginText}>微信登录</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oneKetLoginButton} activeOpacity={0.7}>
          <Text style={styles.oneKetLoginText}>一键登录</Text>
        </TouchableOpacity>

        <Image style={styles.logoMain} source={icon_main_logo} />
      </View>
    );
  };

  const renderInputLogin = () => {
    const styles = StyleSheet.create({
      root: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 48,
      },
      pwdLogin: {
        fontSize: 28,
        color: '#333333',
        fontWeight: 'bold',
        marginTop: 56,
      },
      tip: {
        fontSize: 12,
        color: '#bbb',
        marginTop: 6,
      },
      phoneLayout: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 28,
      },
      pre86: {
        fontSize: 24,
        color: '#bbb',
      },
      triangle: {
        width: 12,
        height: 6,
        marginLeft: 6,
      },
      phoneInput: {
        flex: 1,
        height: 60,
        backgroundColor: 'transparent',
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 24,
        color: '#333',
        marginLeft: 16,
      },
      pwdLayout: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 8,
      },
      pwdInput: {
        marginLeft: 0,
        marginRight: 16,
      },
      iconEye: {
        width: 24,
        height: 24,
      },
      changeLayout: {
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
      },
      exchangeIcon: {
        width: 16,
        height: 16,
      },
      codeLoginText: {
        fontSize: 14,
        color: '#303080',
        flex: 1,
        marginLeft: 4,
      },
      forgetPwdText: {
        fontSize: 14,
        color: '#303080',
      },
      loginButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#ff2442',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        marginTop: 20,
      },
      loginText: {
        fontSize: 20,
        color: 'white',
      },
      wxqqLayout: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60,
      },
      icon_wx: {
        width: 50,
        height: 50,
        marginRight: 60,
      },
      icon_qq: {
        width: 50,
        height: 50,
        marginLeft: 60,
      },
      closeButton: {
        position: 'absolute',
        left: 35,
        top: 50,
      },
      closeImg: {
        width: 28,
        height: 28,
      },
    });
    return (
      <View style={styles.root}>
        <Text style={styles.pwdLogin}>账号密码登录</Text>
        <Text style={styles.tip}>未注册的手机号登录成功后将自动注册</Text>
        <View style={styles.phoneLayout}>
          <Text style={styles.pre86}>+86</Text>
          <Image style={styles.triangle} source={icon_triangle} />
          <TextInput
            style={styles.phoneInput}
            placeholderTextColor="#bbb"
            placeholder="请输入手机号码"
            autoFocus={false}
          />
        </View>
        <View style={styles.pwdLayout}>
          <TextInput
            style={[styles.phoneInput, styles.pwdInput]}
            placeholderTextColor="#bbb"
            placeholder="请输入密码"
            autoFocus={false}
          />
          <TouchableOpacity
            onPress={() => {
              setEyeOpen(!eyeOpen);
            }}>
            <Image
              style={styles.iconEye}
              source={eyeOpen ? icon_eye_open : icon_eye_close}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.changeLayout}>
          <Image style={styles.exchangeIcon} source={icon_exchange} />
          <Text style={styles.codeLoginText}>验证码登录</Text>
          <Text style={styles.forgetPwdText}>忘记密码？</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.loginButton}
          onPress={() => {
            navigation.replace('HomeTab');
          }}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>

        <View style={commonStyles.protocolLayout}>
          <TouchableOpacity
            onPress={() => {
              setCheck(!check);
            }}>
            <Image
              style={commonStyles.radioButton}
              source={check ? icon_selected : icon_unselected}
            />
          </TouchableOpacity>
          <Text style={commonStyles.labelText}>我已阅读并同意</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.baidu.com');
            }}>
            <Text style={commonStyles.protocolText}>
              《用户协议》和《隐私政策》
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wxqqLayout}>
          <Image style={styles.icon_wx} source={icon_wx} />
          <Image style={styles.icon_qq} source={icon_qq} />
        </View>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            setLoginType('quick');
          }}>
          <Image style={styles.closeImg} source={icon_close_modal} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={commonStyles.root}>
      {loginType === 'quick' ? renderQuickLogin() : renderInputLogin()}
    </View>
  );
};

const commonStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  protocolLayout: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  radioButton: {
    width: 20,
    height: 20,
  },
  labelText: {
    fontSize: 12,
    color: '#999999',
  },
  protocolText: {
    fontSize: 12,
    color: '#1020ff',
  },
});
