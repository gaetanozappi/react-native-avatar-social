import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNMaterialLetterIcon from 'react-native-material-letter-icon';

export default class AvatarSocial extends Component {
  badgeFunction = e => {
    return this.props.badgeFunction ? this.props.badgeFunction(e) : e;
  };

  viewPosition() {
    const { dim, positionStatus } = this.props;
    if (positionStatus == 'right')
      return {
        right: (dim - 30) * 0.1,
      };
    else
      return {
        left: (dim - 30) * 0.1,
      };
  }

  render() {
    const {
      colors,
      dim,
      image,
      isIcon,
      isStatus,
      icon,
      iconSize,
      iconColor,
      badgeText,
      badgeColor,
      badgeBackground,
      type,
      name,
    } = this.props;

    return (
      <View
        style={{
          width: dim,
          height: dim,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        {isStatus === true && (
          <View
            style={[
              {
                position: 'absolute',
                top: (dim - 30) * 0.98,
                zIndex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
              this.viewPosition(),
            ]}>
            {isIcon === false ? (
              <View
                style={{
                  flex: 1,
                }}>
                {badgeText && (
                  <Text
                    style={[
                      {
                        color: badgeColor,
                        fontSize: 10,
                        backgroundColor: badgeBackground,
                        borderRadius: 40,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 2,
                        paddingBottom: 2,
                        fontWeight: 'bold',
                      },
                    ]}>
                    {this.badgeFunction(badgeText)}
                  </Text>
                )}
              </View>
            ) : (
              <FontAwesome
                name={icon}
                size={iconSize || 25}
                color={iconColor || '#CCC'}
              />
            )}
          </View>
        )}

        {type == 'image' && image ? (
          <Image
            source={{
              uri: image,
            }}
            style={{
              width: dim - 30,
              height: dim - 30,
              borderRadius: (dim - 30) / 2,
            }}
          />
        ) : (
          <RNMaterialLetterIcon
            size={dim - 30}
            letter={name}
            shapeColor={'#1e95cc'}
          />
        )}
      </View>
    );
  }
}
