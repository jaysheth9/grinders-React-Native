'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import jj from 'Jimmy-Johns’;

import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

let placeOrder = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>Placing order now.. calling Jimmy John’s </Text>
      </View>
    )
  }
})



const Cards = [
  {name: 'Slim 1 - Ham & Provolone Cheese', image: 'https://www.jimmyjohns.com/images/menu/Items/slim_1.jpg?n=2313'},
  {name: 'Slim 2 - Roast beef', image: 'https://www.jimmyjohns.com/images/menu/Items/slim_2.jpg?n=2313'},
  {name: 'Slim 3 - Tuna Salad', image: 'https://www.jimmyjohns.com/images/menu/Items/slim_3.jpg?n=2313'},
  {name: 'Slim 4 - turkey Breast', image: 'https://www.jimmyjohns.com/images/menu/Items/slim_4.jpg?n=2313'},
  {name: 'Slim 5 - Salami, capicola & cheese', image: 'https://www.jimmyjohns.com/images/menu/Items/slim_5.jpg?n=2313'},
  {name: 'Slim 6 - Double Cheese', image: 'https://www.jimmyjohns.com/images/menu/Items/slim_6.jpg?n=2313'},
  {name: '8” PEPE', image: 'https://cdn.jimmyjohns.com/JJW/PublicWebSite/images/menu/Items/01_pepe.jpg?n=7729'},
  {name: 'BIG JOHN', image: 'https://cdn.jimmyjohns.com/JJW/PublicWebSite/images/menu/Items/02_bigjohn.jpg?n=5655'},
  {name: 'TOTALLY TUNA', image: 'https://cdn.jimmyjohns.com/JJW/PublicWebSite/images/menu/Items/03_totallytuna(1).jpg?n=3172'},
  {name: 'TURKEY TOM', image: 'https://cdn.jimmyjohns.com/JJW/PublicWebSite/images/menu/Items/04_turkeytom(1).jpg?n=9197'}
]

const Cards2 = [
  
]

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    alert("Placing order…");

    var jj = require('Jimmy-Johns');


  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log('The index is ${index}');

    let CARD_REFRESH_LIMIT = 8;
    if(this.state.cards.length == CARD_REFRESH_LIMIT && !this.state.outOfCards){
	this.setState({
          cards: this.state.cards.concat(Cards),
          outOfCards: true
        })
    }
    
  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 0,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 0,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    bottom: 50
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})