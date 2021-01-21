import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { WebView } from 'react-native-webview';
import { BackHandler } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Icon } from 'react-native-elements'
import NotificationService from './NotificationService';
import BackgroundTask from 'react-native-background-task'
import BackgroundFetch from 'react-native-background-fetch';
import PushNotification from 'react-native-push-notification';

class OffersScreen extends Component { 

  WEBVIEW_REF = "sos"
  webView = {
    canGoBack: false,
    ref: null,
  }
  state = {
    url: "https://admin.dicloud.es/zca/ofertas/index.asp"
  }

  constructor(props) {
    super(props);
  }

  goHome = () => {
    this.props.navigation.navigate('Home')
  }

  goHelp = () => {
    this.props.navigation.navigate('Help')
 }

  goSOS = () => {
    this.props.navigation.navigate('SOS')
  }

  goOffers = () => {
    this.props.navigation.navigate('Offers')
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeader}>Ofertas</Text>
        </View>
        <WebView
          ref={(webView) => { this.webView.ref = webView; }}
          originWhitelist={['*']}
          source={{ uri: this.state.url }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          setSupportMultipleWindows={false}
          allowsBackForwardNavigationGestures
          onNavigationStateChange={(navState) => {
            this.setState({
              canGoBack: navState.canGoBack
            });
          }}
          onShouldStartLoadWithRequest={(event) => {
            this.setState({ url: event.url })  
            return true 
          }}
        />
       <View style={styles.navBar}>
        <TouchableOpacity onPress={this.goSOS} style={styles.navBarButton}>
          <Text style={styles.navBarHeader}>SOS</Text>
        </TouchableOpacity>
        <Icon
          name='tag'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goOffers} 
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
       <Icon
          name='location'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goHome}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
        <Icon
          name='bell'
          type='evilicon'
          color='#FFFFFF'
          size={30}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
        <Icon
          name='help'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goHelp}
        />
        </View>
    </View>
    )
  }
}

class HelpScreen extends Component { 

  WEBVIEW_REF = "sos"
  webView = {
    canGoBack: false,
    ref: null,
  }
  state = {
    url: "https://admin.dicloud.es/zca/ayuda.html"
  }

  constructor(props) {
    super(props);
  }

  goHome = () => {
    this.props.navigation.navigate('Home')
  }

  goHelp = () => {
    this.props.navigation.navigate('Help')
 }

  goSOS = () => {
    this.props.navigation.navigate('SOS')
  }

  goOffers = () => {
    this.props.navigation.navigate('Offers')
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeader}>Ayuda</Text>
        </View>
        <WebView
          ref={(webView) => { this.webView.ref = webView; }}
          originWhitelist={['*']}
          source={{ uri: this.state.url }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          setSupportMultipleWindows={false}
          allowsBackForwardNavigationGestures
          onNavigationStateChange={(navState) => {
            this.setState({
              canGoBack: navState.canGoBack
            });
          }}
          onShouldStartLoadWithRequest={(event) => {
            this.setState({ url: event.url })  
            return true 
          }}
        />
       <View style={styles.navBar}>
        <TouchableOpacity onPress={this.goSOS} style={styles.navBarButton}>
          <Text style={styles.navBarHeader}>SOS</Text>
        </TouchableOpacity>
        <Icon
          name='tag'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goOffers} 
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
       <Icon
          name='location'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goHome}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
        <Icon
          name='bell'
          type='evilicon'
          color='#FFFFFF'
          size={30}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
        <Icon
          name='help'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goHelp}
        />
        </View>
    </View>
    )
  }
}


class SOSScreen extends Component { 

  WEBVIEW_REF = "sos"
  webView = {
    canGoBack: false,
    ref: null,
  }
  state = {
    url: "https://admin.dicloud.es/zca/sos/index.asp"
  }

  constructor(props) {
    super(props);
  }

  goHome = () => {
    this.props.navigation.navigate('Home')
  }

  goHelp = () => {
    this.props.navigation.navigate('Help')
 }

  reloadSOS = () => {
    this.props.navigation.navigate('SOS')
  }

  goOffers = () => {
    this.props.navigation.navigate('Offers')
  }

  addSOS = () => {
    this.setState({ url: "https://admin.dicloud.es/zca/sos/nuevomensa.asp" })
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeader}>SOS</Text>
        </View>
        <WebView
          ref={(webView) => { this.webView.ref = webView; }}
          originWhitelist={['*']}
          source={{ uri: this.state.url }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          setSupportMultipleWindows={false}
          allowsBackForwardNavigationGestures
          onNavigationStateChange={(navState) => {
            this.setState({
              canGoBack: navState.canGoBack
            });
          }}
          onShouldStartLoadWithRequest={(event) => {
            this.setState({ url: event.url })  
            return true 
          }}
        />
       <View style={styles.navBar}>
        <TouchableOpacity onPress={this.reloadSOS} style={styles.navBarButton}>
          <Text style={styles.navBarHeader}>SOS</Text>
        </TouchableOpacity>
        <Icon
          name='tag'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goOffers}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
       <Icon
          name='location'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goHome}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
        <Icon
          name='bell'
          type='evilicon'
          color='#FFFFFF'
          size={30}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
        <Icon
          name='help'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goHelp}
        />
        </View>
    </View>
    )
  }
}

class HomeScreen extends Component { 

  _isMounted = false;
  WEBVIEW_REF = "disoft"
  map="https://admin.dicloud.es/zca/mapa.html"
  idm="10162"
  lat=28.13598034627975
  lng=-15.436172595513227
  webView = {
    canGoBack: false,
    ref: null,
  }
  state = {
    url: ""
  }

  constructor(props) {
    super(props);
    /*setInterval(() => {
      this.setLocation()
    }, 60000);*/
  }

  configNotifications = () => {
    console.log("config - Notifications")
      PushNotification.configure({
        onNotification: notification => console.log(notification),
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
        requestPermissions: Platform.OS === 'ios',
        popInitialNotification: true,
      });
      PushNotification.createChannel({
        channelId: "channel-id", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    this.setBackgroundFetch()
  }

  setBackgroundFetch = () => {
    console.log("setBackgroundFetch")
    BackgroundFetch.configure({
      minimumFetchInterval: 15, // fetch interval in minutes
      enableHeadless: true,
      stopOnTerminate: false,
      periodic: true,
    },
    async taskId => {
      console.log('Received background-fetch event: ', taskId);
      // 3. Insert code you want to run in the background, for example:
      this.pushNotification()
      // Call finish upon completion of the background task
      BackgroundFetch.finish(taskId);
    },
    error => {
      console.error('RNBackgroundFetch failed to start.');
      },
    );
  }

  pushNotification = () => {
    console.log("NOTIFICACION!!!!!")
    PushNotification.localNotification({
      title: 'Zonas Comerciales',
      message:'Aviso',
      playSound: true,
      soundName: 'default',
      channelId: "channel-id", 
    });
  }

  componentDidMount(){
    console.log("componentDidMount")
    this._isMounted = true
    this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng})
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.setLocation()
    this.configNotifications()
  }

  setLocation = () => {
    console.log(this._isMounted)
    if (this._isMounted) {
      this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
      Geolocation.getCurrentPosition(info => {
        this.lat=info.coords.latitude
        this.lng=info.coords.longitude
        this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
      });
    } 
 }

 goSOS = () => {
  this.props.navigation.navigate('SOS')
 }

  SOS = () =>{
    this.props.navigation.navigate('SOS')
  }
  
  handleBackButton = ()=>{
    if (this.state.canGoBack) {
      this.webView.ref.goBack();
      return true;
    }
    return true;
  }

  goIndex = () => {
    this.setState({ url: this.props.navigation.state.params.url })
  }

  goHelp = () => {
    this.props.navigation.navigate('Help')
  }

  goOffers = () => {
    this.props.navigation.navigate('Offers')
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeader}>Zona Guanarteme</Text>
        </View>
        <WebView
          ref={(webView) => { this.webView.ref = webView; }}
          originWhitelist={['*']}
          source={{ uri: this.state.url }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          setSupportMultipleWindows={false}
          allowsBackForwardNavigationGestures
          onNavigationStateChange={(navState) => {
            this.setState({
              canGoBack: navState.canGoBack
            });
          }}
          onShouldStartLoadWithRequest={(event) => {
            this.setState({ url: event.url })  
            return true 
          }}
        />
       <View style={styles.navBar}>
        <TouchableOpacity onPress={this.goSOS} style={styles.navBarButton}>
          <Text style={styles.navBarHeader}>SOS</Text>
        </TouchableOpacity>
        <Icon
          name='tag'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goOffers}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
       <Icon
          name='location'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.setLocation}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
        <Icon
          name='bell'
          type='evilicon'
          color='#FFFFFF'
          size={30}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#B0B359'
          size={30}
        />
        <Icon
          name='help'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goHelp}
        />
        </View>
    </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      animationEnabled: false
    }
  },
  SOS: {
    screen: SOSScreen,
    navigationOptions: {
      header: null,
      animationEnabled: false
    }
  },
  Help: {
    screen: HelpScreen,
    navigationOptions: {
      header: null,
      animationEnabled: false
    }
  },
  Offers: {
    screen: OffersScreen,
    navigationOptions: {
      header: null,
      animationEnabled: false
    }
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#B0B359", 
    flexDirection:'row', 
    textAlignVertical: 'center',
    height: 50
  },
  textBoxBtnHolder:{
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  textBox: {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingLeft: 8,
    color:"#98A406",
    borderWidth: 2,
    paddingVertical: 0,
    borderColor: '#98A406',
    borderRadius: 0,
    margin: 10,
    borderRadius: 20,
    textAlign: "center"
  },
  visibilityBtn:{
    position: 'absolute',
    right: 20,
    height: 40,
    width: 35,
    padding: 2
  },
  date:{
    color: "#98A406",
    backgroundColor: "white"
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#98A406",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 150,
    margin: 20 
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign:'center',
    width: 64
  },
  navBarHeader: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20
  },
});