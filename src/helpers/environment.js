let APIURL = '';

switch (window.location.hostname) {
   // this is the local host name of your react app
   case 'localhost' || '127.0.0.1':
       // this is the local host name of your API
       APIURL = 'http://localhost:3033';
       break;
   // this is the deployed react application
   case 'bermclient.herokuapp.com':
       // this is the full url of your deployed API
       APIURL = 'https://cmm-bermapi.herokuapp.com/'
}

export default APIURL;