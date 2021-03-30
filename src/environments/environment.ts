// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api:'https://platzi-store.herokuapp.com/products',
  firebase:{
    apiKey: "AIzaSyCZbVbtZ2f9iQvPHZ2A67GiG56b2KMMst0",
    authDomain: "store-82400.firebaseapp.com",
    projectId: "store-82400",
    storageBucket: "store-82400.appspot.com",
    messagingSenderId: "253040570770",
    appId: "1:253040570770:web:d5d772afa7eebe3490514b"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
