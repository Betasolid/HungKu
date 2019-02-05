// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /* Configuracion de firebase */
  firebaseConfig: {
    apiKey: 'AIzaSyD00jDzb7pZ9UJSPfbWeSX6U7rMmEtpHFk',
    authDomain: 'hungku-9a6f4.firebaseapp.com',
    databaseURL: 'https://hungku-9a6f4.firebaseio.com',
    projectId: 'hungku-9a6f4',
    storageBucket: 'hungku-9a6f4.appspot.com',
    messagingSenderId: '729703020958',
    personasColeccion: 'personasC',
    eventosColeccion: 'eventosC'
  },
  currentLanguages: ['es', 'en'], // idiomas disponibles de la aplicación
  defaultLanguage: 'es',  // idioma por defecto
  // defaultSkin: 'light',  // tema por defecto
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
