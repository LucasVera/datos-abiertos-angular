// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB4MW0hFARTuO6XnYezvnKGANkrZ4amYSY',
    authDomain: 'datos-abiertos-angular.firebaseapp.com',
    databaseURL: 'https://datos-abiertos-angular.firebaseio.com',
    projectId: 'datos-abiertos-angular',
    storageBucket: '',
    messagingSenderId: '609080943173'
  }
};
