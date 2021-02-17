import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Linking, SectionList } from 'react-native';
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
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';


class SuggestionsScreen extends Component { 

  WEBVIEW_REF = "suggestions"
  webView = {
    canGoBack: false,
    ref: null,
  }
  state = {
    url: "https://admin.dicloud.es/zca/ofertas/sugerencias.asp"
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = ()=>{
    if (this.state.canGoBack) {
      this.webView.ref.goBack();
      return true;
    }
    return true;
  }

  setLocation = () => {
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

  goSuggestions = () => {
    this.setState({url: "https://admin.dicloud.es/zca/ofertas/sugerencias.asp" })
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeader}>Sugerencias</Text>
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
            if (event.url.includes("drive") || event.url.includes("tel:") || event.url.includes("mailto:") || event.url.includes("maps:") || event.url.includes("facebook")) {
              Linking.canOpenURL(event.url).then((value) => {
                if (value) {
                  Linking.openURL(event.url)
                }
              })
              return false
            } else {
              this.setState({ url: event.url })  
              return true 
            }
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
          color='#1A5276'
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
          color='#1A5276'
          size={30}
        />
        <Icon
          name='star'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goSuggestions}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#1A5276'
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

class OffersScreen extends Component { 

  WEBVIEW_REF = "offers"
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

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = ()=>{
    if (this.state.canGoBack) {
      this.webView.ref.goBack();
      return true;
    }
    return true;
  }

  setLocation = () => {
    this.props.navigation.navigate('Home')
  }

  goHelp = () => {
    this.props.navigation.navigate('Help')
 }

  goSOS = () => {
    this.props.navigation.navigate('SOS')
  }

  goOffers = () => {
    this.setState({url: "https://admin.dicloud.es/zca/ofertas/index.asp" })
  }

  goSuggestions = () => {
    this.props.navigation.navigate('Suggestions')
    this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
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
            if (event.url.includes("drive") || event.url.includes("tel:") || event.url.includes("mailto:") || event.url.includes("maps:") || event.url.includes("facebook")) {
              Linking.canOpenURL(event.url).then((value) => {
                if (value) {
                  Linking.openURL(event.url)
                }
              })
              return false
            } else {
              this.setState({ url: event.url })  
              return true 
            }
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
          color='#1A5276'
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
          color='#1A5276'
          size={30}
        />
        <Icon
          name='star'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goSuggestions}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#1A5276'
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

  WEBVIEW_REF = "help"
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

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = ()=>{
    if (this.state.canGoBack) {
      this.webView.ref.goBack();
      return true;
    }
    return true;
  }

  setLocation = () => {
    this.props.navigation.navigate('Home')
  }

  goHelp = () => {
    this.setState({url: "https://admin.dicloud.es/zca/ayuda.html" })
 }

  goSOS = () => {
    this.props.navigation.navigate('SOS')
  }

  goOffers = () => {
    this.props.navigation.navigate('Offers')
  }

  goSuggestions = () => {
    this.props.navigation.navigate('Suggestions')
    this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
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
          color='#1A5276'
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
          color='#1A5276'
          size={30}
        />
        <Icon
          name='star'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goSuggestions}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#1A5276'
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

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton); 
  }

  handleBackButton = ()=>{
    if (this.state.canGoBack) {
      this.webView.ref.goBack();
      return true;
    }
    return true;
  }

  setLocation = () => {
    this.props.navigation.navigate('Home')
  }

  goHelp = () => {
    this.props.navigation.navigate('Help')
 }

  goSOS = () => {
    this.setState({ url: "https://admin.dicloud.es/zca/sos/index.asp" })
  }

  goOffers = () => {
    this.props.navigation.navigate('Offers')
  }

  addSOS = () => {
    this.setState({ url: "https://admin.dicloud.es/zca/sos/nuevomensa.asp" })
  }

  goSuggestions = () => {
    this.props.navigation.navigate('Suggestions')
    this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
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
            if (event.url.includes("drive") || event.url.includes("tel:") || event.url.includes("mailto:") || event.url.includes("maps:") || event.url.includes("facebook")) {
              Linking.canOpenURL(event.url).then((value) => {
                if (value) {
                  Linking.openURL(event.url)
                }
              })
              return false
            } else {
              this.setState({ url: event.url })  
              return true 
            }
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
          color='#1A5276'
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
          color='#1A5276'
          size={30}
        />
        <Icon
          name='star'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goSuggestions}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#1A5276'
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

export class Company {
  constructor(id, description, coordenadasmap) {
    this.id = id;
    this.description = description;
    this.coordenadasmap = coordenadasmap
  }
}

export class Sugerencia {
  constructor(id, description, coordenadasmap, comments) {
    this.id = id;
    this.description = description;
    this.coordenadasmap = coordenadasmap;
    this.comments = comments;
  }
}

class HomeScreen extends Component { 

  WEBVIEW_REF = "zca"
  map="https://admin.dicloud.es/zca/mapa.asp"
  idm="10162"
  lat=28.13598034627975
  lng=-15.436172595513227
  sos_id=0
  ofertas_id=0
  sugerencias_id=0
  webView = {
    canGoBack: false,
    ref: null,
  }
  state = {
    url: "",
    companies: [Company]
  }

  constructor(props) {
    super(props);
    this.setLocation()
    this.getCompanies();
    setInterval(() => {
      this.getSOS();
      this.getOfertas();
      this.getSugerencias();
      this.notifyProximity();
    }, 60000);
  }

  async saveId(key, value) {
    console.log(key + " => " + value)
    await AsyncStorage.setItem(key, value);
  }

  calculateDistance(lat2, lon2, title, message){
    var radlat1 = Math.PI * this.lat/180
    var radlat2 = Math.PI * lat2/180
    var theta = this.lng-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    dist = dist * 1.609344 * 1000
    //console.log(dist + " | " + title + " | " + message)
    if (dist <= 55) {
      this.pushNotification(title,message)
    }
  }

  async notifyProximity() {
    console.log("Estoy mirando notifyProximity")
    this.state.companies.forEach(company => {
      var coords=company.coords+""
      var lat2 = coords.split("*")[0] + ""
      var lng2 = coords.split("*")[1] + ""
      var message = company.description + " está cerca de ti"
      this.calculateDistance(lat2, lng2, "Comercio cercano", message)
    });
  }

  async getCompanies() {
    var companies = [Company]
    console.log("Estoy mirando getCompanies")
    await fetch('https://app.dicloud.es/getCompanies.asp', {})
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.companies.forEach(company => {
        var c =  {
          id: company.id,
          description: company.description,
          coords: company.coordenadasmap
        }
        companies.push(c);
      });
      this.setState({ companies: companies })
      this.notifyProximity();
    }).catch(() => {});
  }

  async getSOS() {
    console.log("Estoy mirando getSOS")
    await AsyncStorage.getItem("SOS-id").then((value) => {
      if (value == null) {
        this.sos_id = 0
      } else {
        this.sos_id = value;
      }
    })
    fetch('https://app.dicloud.es/getSOS.asp', {})
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.sos.forEach(sos => {
        if (this.sos_id < sos.id && this.sos_id != 0) {
          this.saveId("SOS-id", String(sos.id))
          this.pushNotification("¡¡¡SOS!!!", sos.title_es)
        }
      });
    }).catch(() => {});
  }

  async getSugerencias() {
    console.log("Estoy mirando getSugerencias")
    await AsyncStorage.getItem("Sugerencias-id").then((value) => {
      if (value == null) {
        this.sugerencias_id = 0
      } else {
        this.sugerencias_id = value;
      }
    })
    fetch('https://app.dicloud.es/getSugerencias.asp', {})
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.sugerencias.forEach(sugerencia => {
        var coords = sugerencia.coordenadasmap + ""
        if (coords != "") {
          console.log("SUGERENCIAS ID")
          console.log(this.sugerencias_id + " and " + sugerencia.id)
          if (this.sugerencias_id < sugerencia.id) {
            var lat2 = coords.split("*")[0] + "";
            var lng2 = coords.split("*")[1] + "";
            var message = "Tienes una sugerencia de " + sugerencia.description
            this.calculateDistance(lat2, lng2, "Sugerencias y ofertas del dia", message)
            this.saveId("Sugerencias-id", String(sugerencia.id))
            this.sugerencias_id = sugerencia.id
          }
        }
      });
    }).catch(() => {});
  }

  async getOfertas() {
    console.log("Estoy mirando getOfertas")
    await AsyncStorage.getItem("Ofertas-id").then((value) => {
      if (value == null) {
        ofertas_id = 0
      } else {
        ofertas_id = value;
      }
    })
    fetch('https://app.dicloud.es/getOfertas.asp', {})
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.ofertas.forEach(oferta => {
        if (ofertas_id < oferta.id && ofertas_id != 0) {
          this.saveId("Ofertas-id", String(oferta.id))
          this.pushNotification("¡¡Tienes una nueva oferta!!", oferta.title_es)
        }
      });
    }).catch(() => {});
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
      this.getSOS();
      this.getOfertas();
      BackgroundFetch.finish(taskId);
    },
    error => {
      console.error('RNBackgroundFetch failed to start.');
      },
    );
  }

  pushNotification = (title, message) => {
    console.log("NOTIFICACION!!!!!")
    PushNotification.localNotification({
      title: title,
      message: message,
      playSound: true,
      soundName: 'default',
      channelId: "channel-id", 
    });
  }

  componentDidMount(){
    console.log("componentDidMount")
    this._isMounted = true
    this.setState({ companies: [] })
    this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng})
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.setLocation()
    this.configNotifications()
  }

  setLocation = () => {
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
  this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
 }

  SOS = () =>{
    this.props.navigation.navigate('SOS')
    this.state = {
      url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng
    }
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.setLocation()
  } 

  setLocation = () => {
    Geolocation.getCurrentPosition(info => {
      this.lat=info.coords.latitude
      this.lng=info.coords.longitude
      this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
    });
 }
  
  handleBackButton = ()=>{
    if (this.state.canGoBack) {
      this.webView.ref.goBack();
      return true;
    }
    return true;
  }

  goHelp = () => {
    this.props.navigation.navigate('Help')
    this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
  }

  goOffers = () => {
    this.props.navigation.navigate('Offers')
    this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
  }

  goSuggestions = () => {
    this.props.navigation.navigate('Suggestions')
    this.setState({ url: this.map + "?idm="+this.idm+"&lat="+this.lat+ "&lng="+this.lng })
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
            if (event.url.includes("tel:") || event.url.includes("mailto:") || event.url.includes("maps:") || event.url.includes("facebook")) {
              Linking.canOpenURL(event.url).then((value) => {
                if (value) {
                  Linking.openURL(event.url)
                }
              })
              return false
            } else {
              this.setState({ url: event.url })  
              return true 
            }
          }}
        />
       <View style={styles.navBar}>
        <TouchableOpacity onPress={this.SOS} style={styles.navBarButton}>
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
          color='#1A5276'
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
          color='#1A5276'
          size={30}
        />
        <Icon
          name='star'
          type='evilicon'
          color='#FFFFFF'
          size={30}
          onPress={this.goSuggestions}
        />
        <Icon
          name='tag'
          type='evilicon'
          color='#1A5276'
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
  },
  Suggestions: {
    screen: SuggestionsScreen,
    navigationOptions: {
      header: null,
      animationEnabled: false
    }
  },
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
    backgroundColor:"#1A5276", 
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