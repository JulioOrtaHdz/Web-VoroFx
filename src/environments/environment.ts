// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://localhost:8000/api',
  //url_api: 'https://amaliath3code.com/api',
  // url_api: 'https://axincapital.app/api',
  // url_api: 'https://test.axincapital.app/api',
  // url_api: 'https://axincapital.link/api', //Amazon pruebas

  url_login: 'http://localhost:8000/login/access/',
  //url_login:  'https://amaliath3code.com/login/access/',
  // url_login: 'https://axincapital.app/login/access/',
  // url_login: 'https://test.axincapital.app/login/access/',
  // url_login: 'https://axincapital.link/login/access/', //Amazon pruebas
  recaptcha: {
    siteKey: '6Ld5iOseAAAAACyzKyqOCZPw3NfoW5DSKvwwETN3',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
