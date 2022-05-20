# 10-2-librairie-ui-rnpaper

Découverte d'une librairie de composants "React Native" : React Native Paper.

Celle-ci est basée sur le material design :

https://material.io/design/introduction

Cliquez sur le lien suivant pour l'installation :

https://callstack.github.io/react-native-paper/getting-started.html

Création d'une interface pour suivre ses activités physique :
- Une Appbar Top : https://callstack.github.io/react-nativepaper/appbar.html
- Une Card pour afficher ses activités lorsque nous sommes à l'accueil "Home" : https://callstack.github.io/react-nativepaper/card.html
- Un Avatar reprenant notre 'Avatar' : https://callstack.github.io/react-native-paper/avatar-image.html
- Une BottomNavigation permettant de naviguer rapidement dans les différentes sections : https://callstack.github.io/react-nativepaper/avatar-image.html

--------

npm install react-native-paper

Modifier fichier babel.config.js comme suit :
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};


![Screenshot_20220520-154559_Expo Go](https://user-images.githubusercontent.com/35977024/169542329-d4923320-0c3e-46df-bf8e-223e23105d59.jpg)
