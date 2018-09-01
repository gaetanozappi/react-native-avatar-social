# React Native: react-native-avatar-social

[![github home](http://img.shields.io/npm/v/react-native-avatar-social.svg?style=flat)](https://www.npmjs.com/package/react-native-avatar-social)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--avatar--social-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-avatar-social)
[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-avatar-social.svg?style=flat)](https://github.com/gaetanozappi/react-native-avatar-social/issues)

![PNG](screenshot/react-native-avatar-social.png)

-   [Usage](#usage)
-   [License](#license)

## 📖 Getting started

`$ npm install react-native-avatar-social --save`

## Usage

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
          positionBadge="right"
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
          positionBadge="left"
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
          positionBadge="left"
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
| `image`      | `object`   |  | We need to pass an image, as in the example.
| `name`      | `string`   |  | Name to pass in case you want to use the letter mode or the image attribute is not found.
| `type`      | `string`   |  `letter` | Choose whether to use the letter or image mode, to use image you have to pass an image url.
| `isStatus`      | `bool`   |  | Indicates whether to have the status icon.
| `isIcon`      | `bool`   |  | Indicates whether to have the status icon.
| `icon`      | `FontAwesome`   |  | Indicates what kind of icon to use.
| `iconSize`      | `number`   |  | Icon size.
| `iconColor`      | `string`   |  | Icon color.
| `badgeText`      | `string`   |  | Badge text.
| `badgeColor`      | `string`   | `#000000` |
| `badgeBackground`      | `string`   | `transparent` |
| `badgeFunction`      | `function`   |  | Use in case you want to define a function, for the badgeText attribute.
| `positionBadge`      | `string`   | `left` |


## License
This library is provided under the Apache License.
