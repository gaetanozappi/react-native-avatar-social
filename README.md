# React Native: react-native-avatar-social

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-native-avatar-social.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-native-avatar-social)
[![github home](http://img.shields.io/npm/v/react-native-avatar-social.svg?style=flat)](https://www.npmjs.com/package/react-native-avatar-social)
![platforms](https://img.shields.io/badge/platforms-Android-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--avatar--social-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-avatar-social)
[![npm](https://img.shields.io/npm/dm/react-native-avatar-social.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-avatar-social)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-avatar-social.svg?style=flat)](https://github.com/gaetanozappi/react-native-avatar-social/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-avatar-social.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-avatar-social/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-avatar-social.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-avatar-social/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-avatar-social.svg)]()

![PNG](screenshot/react-native-avatar-social.png)

-   [Usage](#-usage)
-   [License](#-license)

## 📖 Getting started

`$ npm install react-native-avatar-social --save`

`$ react-native link react-native-material-letter-icon`

`$ react-native link react-native-vector-icons`

## 💻 Usage

```javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import AvatarSocial from 'react-native-avatar-social';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AvatarSocial
          dim={150}
          image={
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg'
          }
          name="Connie Nielsen"
          type="image"
          isStatus={true}
          isIcon={false}
          iconSize={25}
          iconColor={'#26C6DA'}
          badgeText={100}
          badgeColor={'#ffffff'}
          badgeBackground={'#303030'}
          badgeFunction={e => {
            return e > 99 ? '99+' : e;
          }}
        />
        <AvatarSocial
          dim={150}
          image={
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg'
          }
          name="Connie Nielsen"
          type="image"
          isStatus={true}
          isIcon={false}
          iconSize={25}
          iconColor={'#26C6DA'}
          badgeText={100}
          badgeColor={'#ffffff'}
          badgeBackground={'#ff9d00'}
          positionStatus="right"
        />
        <AvatarSocial
          dim={80}
          image={
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg'
          }
          name="Connie Nielsen"
          type="image"
          isStatus={true}
          isIcon={false}
          badgeText={'100'}
          badgeColor={'#ffffff'}
          badgeBackground={'#303030'}
          badgeFunction={e => {
            return e > 99 ? '99+' : e;
          }}
          positionStatus="left"
        />
        <AvatarSocial
          dim={80}
          image={
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg'
          }
          name="Connie Nielsen"
          type="image"
          isStatus={true}
          isIcon={true}
          icon={'star'}
          iconColor="#ff9d00"
        />
        <AvatarSocial
          dim={80}
          image={
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg'
          }
          name="Connie Nielsen"
          isStatus={true}
          isIcon={false}
          badgeText={100}
          badgeColor={'#ffffff'}
          badgeBackground={'#303030'}
          badgeFunction={e => {
            return e > 99 ? '99+' : e;
          }}
          positionStatus="left"
        />
        <AvatarSocial
          dim={80}
          image={
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg'
          }
          name="Connie Nielsen"
          isStatus={true}
          isIcon={true}
          icon={'star'}
          iconColor="#ff9d00"
        />
      </View>
    );
  }
}
```

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `dim`       | `number`   |    | Avatar size.
| `image`      | `string`   |  | We need to pass an url image, as in the example.
| `name`      | `string`   |  | Name to pass in case you want to use the letter mode or the image attribute is not found.
| `type`      | `string`   |  `letter` | Choose whether to use the letter or image mode, to use image you have to pass an image url.
| `isStatus`      | `bool`   |  | Indicates whether to have the status icon.
| `isIcon`      | `bool`   |  | Indicates whether to have the status icon.
| `icon`      | `FontAwesome`   |  | Indicates what kind of icon to use.
| `iconSize`      | `number`   |  | Icon size.
| `iconColor`      | `string`   |  | Icon color.
| `badgeText`      | `string`   |  | Badge text.
| `badgeColor`      | `string`   | `#000000` | Color of the badge text.
| `badgeBackground`      | `string`   | `transparent` | Background color of the badge.
| `badgeFunction`      | `function`   |  | Use in case you want to define a function, for the badgeText attribute.
| `positionStatus`      | `string`   | `left` | Status position

## 📜 License
This library is provided under the Apache License.
