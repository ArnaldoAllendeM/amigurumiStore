import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyDRISZ7ahQzDiy6DjVr1lQIplouiTWFqIU",
  authDomain: "form-cb4c4.firebaseapp.com",
  databaseURL: "https://form-cb4c4-default-rtdb.firebaseio.com",
  projectId: "form-cb4c4",
  storageBucket: "form-cb4c4.appspot.com",
  messagingSenderId: "220633207583",
  appId: "1:220633207583:web:69436ff038fde016e1162a"
};
firebase.initializeApp(config);
var messagesRef = firebase.database().ref('contactformmessages');
$('#contactForm').submit(function(e) {
      e.preventDefault();
   
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: $('.fullname').val(),
          email: $('.email').val(),
          subject: $('.subject').val(),
          message: $('.message').val()
      });
   
      $('.success-message').show();
   
      $('#contactForm')[0].reset();
  });

  messagesRef.once('value').then((snapshot) => {
        Object.keys(snapshot.val()).forEach((key) => {
            console.log(`Name: ${snapshot.val()[key].name}`);
            console.log(`Email: ${snapshot.val()[key].email}`);
            console.log(`Subject: ${snapshot.val()[key].subject}`);
            console.log(`Message: ${snapshot.val()[key].message}`);
        });
    });