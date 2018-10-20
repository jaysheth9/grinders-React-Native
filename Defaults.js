'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

class renderPlaceOrder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>renderPlaceOrder</Text>
      </View>
    )
  }
}



export default {
  NoMoreCards: NoMoreCards,
  renderPlaceOrder: renderPlaceOrder
}

const styles = StyleSheet.create({
  noMoreCardsText: {
    fontSize: 22,
  }
})
