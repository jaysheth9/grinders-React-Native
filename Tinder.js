'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import axios from 'axios';


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

let RenderPlaceOrder = React.createClass({
  render() {
    return (
      <View>
        <Text style={styles.cardMatched}>Ehrfürchtig ... </Text>
        <Text style={styles.cardMatched}>Sandwich auf dem Weg</Text>
        <Image style={styles.thumbnail} source={{uri: 'https://media.giphy.com/media/8VsSNMX55NX4Q/giphy.gif'}} style={{paddingTop:20, width: 400, height: 400}} />
      </View>
    )
  }
})

var userInfoForMenu = {
             email: "johnson.evan1@gmail.com", //your Jimmy John's account email
             password: "vor23fed",    //your Jimmy John's account password
             locationID: 2630,
             verbose: true,
             address: {
               line1: "207 Boren Avenue North",
               line2: "",
               city: "Seattle",
               state: "WA",
               zipcode: "98115",
               company: "Amazon",
               friendlyName: "Work",
               instructions: "Call when in the lobby.",
               longitude: -122.336256,
               latitude: 47.620173
             }
           }


var userInfo = {
             email: "johnson.evan1@gmail.com", //your Jimmy John's account email
             password: "vor23fed",    //your Jimmy John's account password
             firstName: "Evan",
             lastName: "Johnson",
             phone: "206-914-8313",
             tipAmount: "2",
             locationID: 2630,
             isTest: true,
             verbose: true,
             address: {
               line1: "207 Boren Avenue North",
               line2: "",
               city: "Seattle",
               state: "WA",
               zipcode: "98115",  
               company: "Amazon",
               friendlyName: "Work",
               instructions: "Call when in the lobby.",
               longitude: -122.336256,
               latitude: 47.620173
             },
             paymentInfo: {
               expMonth: 4,
               expYear: 2019,
               cvv: 123
             }
           }


const item = [{"Index":"","MenuItemId":"3703","MenuItemText":"#9 ITALIAN NIGHT CLUB®","SelectedSize":"Regular","Quantity":1,"ExtendedPrice":0,"Label":"","DisplayText":"","DisplayPrice":"","FavoriteName":"","ItemCost":0,"MustEdit":false,"IsQuantityFixed":false,"IsSizeFixed":false,"IsPriceFixed":false,"CanDelete":false,"CanEdit":false,"IsMainCouponItem":false,"NoMayo":false,"RewardNotes":"","CouponReference":"","ConfirmedSprouts":false,"Modifiers":[{"GroupId":"3003","SelectedAnswerId":"23570","SelectedAnswerText":"","EditItem":false},{"GroupId":"3001","SelectedAnswerId":"23569","SelectedAnswerText":"","EditItem":false},{"GroupId":"3015","SelectedAnswerId":"23565","SelectedAnswerText":"","EditItem":false},{"GroupId":"3017","SelectedAnswerId":"23564","SelectedAnswerText":"","EditItem":false},{"GroupId":"3895","SelectedAnswerId":"23425","SelectedAnswerText":"","EditItem":false},{"GroupId":"4008","SelectedAnswerId":"23724","SelectedAnswerText":"","EditItem":false},{"GroupId":"3997","SelectedAnswerId":"23244","SelectedAnswerText":"","EditItem":false},{"GroupId":"3005","SelectedAnswerId":"23568","SelectedAnswerText":"","EditItem":false},{"GroupId":"3011","SelectedAnswerId":"23553","SelectedAnswerText":"","EditItem":false},{"GroupId":"3013","SelectedAnswerId":"23552","SelectedAnswerText":"","EditItem":false},{"GroupId":"2944","SelectedAnswerId":"23216","SelectedAnswerText":"","EditItem":false},{"GroupId":"3893","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3894","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"2990","SelectedAnswerId":"23241","SelectedAnswerText":"","EditItem":false},{"GroupId":"3889","SelectedAnswerId":"23398","SelectedAnswerText":"","EditItem":false},{"GroupId":"2988","SelectedAnswerId":"23237","SelectedAnswerText":"","EditItem":false},{"GroupId":"3995","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"3996","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"3020","SelectedAnswerId":"23313","SelectedAnswerText":"","EditItem":false},{"GroupId":"3022","SelectedAnswerId":"23323","SelectedAnswerText":"","EditItem":false},{"GroupId":"2998","SelectedAnswerId":"23258","SelectedAnswerText":"","EditItem":false},{"GroupId":"2996","SelectedAnswerId":"23253","SelectedAnswerText":"","EditItem":false},{"GroupId":"3018","SelectedAnswerId":"23308","SelectedAnswerText":"","EditItem":false},{"GroupId":"3964","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3965","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false}]}, 
               {"Index":"","MenuItemId":"3695","MenuItemText":"SLIM 1","SelectedSize":"Regular","Quantity":1,"ExtendedPrice":0,"Label":"","DisplayText":"","DisplayPrice":"","FavoriteName":"","ItemCost":0,"MustEdit":false,"IsQuantityFixed":false,"IsSizeFixed":false,"IsPriceFixed":false,"CanDelete":false,"CanEdit":false,"IsMainCouponItem":false,"NoMayo":false,"RewardNotes":"","CouponReference":"","ConfirmedSprouts":false,"Modifiers":[{"GroupId":"3003","SelectedAnswerId":"23570","SelectedAnswerText":"","EditItem":false},{"GroupId":"3001","SelectedAnswerId":"23569","SelectedAnswerText":"","EditItem":false},{"GroupId":"3005","SelectedAnswerId":"23568","SelectedAnswerText":"","EditItem":false},{"GroupId":"3011","SelectedAnswerId":"23553","SelectedAnswerText":"","EditItem":false},{"GroupId":"3013","SelectedAnswerId":"23552","SelectedAnswerText":"","EditItem":false},{"GroupId":"3940","SelectedAnswerId":"23399","SelectedAnswerText":"","EditItem":false},{"GroupId":"3888","SelectedAnswerId":"23216","SelectedAnswerText":"","EditItem":false},{"GroupId":"3972","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3974","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"2990","SelectedAnswerId":"23241","SelectedAnswerText":"","EditItem":false},{"GroupId":"2988","SelectedAnswerId":"23237","SelectedAnswerText":"","EditItem":false},{"GroupId":"3964","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3965","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"4022","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false}]},
               {"Index":"","MenuItemId":"3696","MenuItemText":"SLIM 2","SelectedSize":"Regular","Quantity":1,"ExtendedPrice":0,"Label":"","DisplayText":"","DisplayPrice":"","FavoriteName":"","ItemCost":0,"MustEdit":false,"IsQuantityFixed":false,"IsSizeFixed":false,"IsPriceFixed":false,"CanDelete":false,"CanEdit":false,"IsMainCouponItem":false,"NoMayo":false,"RewardNotes":"","CouponReference":"","ConfirmedSprouts":false,"Modifiers":[{"GroupId":"3003","SelectedAnswerId":"23570","SelectedAnswerText":"","EditItem":false},{"GroupId":"3001","SelectedAnswerId":"23569","SelectedAnswerText":"","EditItem":false},{"GroupId":"2989","SelectedAnswerId":"23566","SelectedAnswerText":"","EditItem":false},{"GroupId":"2991","SelectedAnswerId":"23563","SelectedAnswerText":"","EditItem":false},{"GroupId":"3011","SelectedAnswerId":"23553","SelectedAnswerText":"","EditItem":false},{"GroupId":"3013","SelectedAnswerId":"23552","SelectedAnswerText":"","EditItem":false},{"GroupId":"3940","SelectedAnswerId":"23399","SelectedAnswerText":"","EditItem":false},{"GroupId":"3888","SelectedAnswerId":"23216","SelectedAnswerText":"","EditItem":false},{"GroupId":"3972","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3974","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3004","SelectedAnswerId":"23273","SelectedAnswerText":"","EditItem":false},{"GroupId":"3964","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3965","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"4022","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false}]},
               {"Index":"","MenuItemId":"3688","MenuItemText":"#1 PEPE®","SelectedSize":"Regular","Quantity":1,"ExtendedPrice":0,"Label":"","DisplayText":"","DisplayPrice":"","FavoriteName":"","ItemCost":0,"MustEdit":false,"IsQuantityFixed":false,"IsSizeFixed":false,"IsPriceFixed":false,"CanDelete":false,"CanEdit":false,"IsMainCouponItem":false,"NoMayo":false,"RewardNotes":"","CouponReference":"","ConfirmedSprouts":false,"Modifiers":[{"GroupId":"3003","SelectedAnswerId":"23570","SelectedAnswerText":"","EditItem":false},{"GroupId":"3001","SelectedAnswerId":"23569","SelectedAnswerText":"","EditItem":false},{"GroupId":"3015","SelectedAnswerId":"23565","SelectedAnswerText":"","EditItem":false},{"GroupId":"3017","SelectedAnswerId":"23564","SelectedAnswerText":"","EditItem":false},{"GroupId":"3895","SelectedAnswerId":"23557","SelectedAnswerText":"","EditItem":false},{"GroupId":"3019","SelectedAnswerId":"23560","SelectedAnswerText":"","EditItem":false},{"GroupId":"4008","SelectedAnswerId":"23724","SelectedAnswerText":"","EditItem":false},{"GroupId":"2994","SelectedAnswerId":"23244","SelectedAnswerText":"","EditItem":false},{"GroupId":"3021","SelectedAnswerId":"23559","SelectedAnswerText":"","EditItem":false},{"GroupId":"3023","SelectedAnswerId":"23558","SelectedAnswerText":"","EditItem":false},{"GroupId":"3005","SelectedAnswerId":"23568","SelectedAnswerText":"","EditItem":false},{"GroupId":"3011","SelectedAnswerId":"23553","SelectedAnswerText":"","EditItem":false},{"GroupId":"3013","SelectedAnswerId":"23552","SelectedAnswerText":"","EditItem":false},{"GroupId":"3940","SelectedAnswerId":"23399","SelectedAnswerText":"","EditItem":false},{"GroupId":"3888","SelectedAnswerId":"23216","SelectedAnswerText":"","EditItem":false},{"GroupId":"3892","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3974","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"2990","SelectedAnswerId":"23241","SelectedAnswerText":"","EditItem":false},{"GroupId":"2988","SelectedAnswerId":"23237","SelectedAnswerText":"","EditItem":false},{"GroupId":"3993","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"3994","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"2998","SelectedAnswerId":"23258","SelectedAnswerText":"","EditItem":false},{"GroupId":"2996","SelectedAnswerId":"23253","SelectedAnswerText":"","EditItem":false},{"GroupId":"3964","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3965","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"4022","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false}]},
               {"Index":"","MenuItemId":"3689","MenuItemText":"#2 BIG JOHN®","SelectedSize":"Regular","Quantity":1,"ExtendedPrice":0,"Label":"","DisplayText":"","DisplayPrice":"","FavoriteName":"","ItemCost":0,"MustEdit":false,"IsQuantityFixed":false,"IsSizeFixed":false,"IsPriceFixed":false,"CanDelete":false,"CanEdit":false,"IsMainCouponItem":false,"NoMayo":false,"RewardNotes":"","CouponReference":"","ConfirmedSprouts":false,"Modifiers":[{"GroupId":"3003","SelectedAnswerId":"23570","SelectedAnswerText":"","EditItem":false},{"GroupId":"3001","SelectedAnswerId":"23569","SelectedAnswerText":"","EditItem":false},{"GroupId":"3015","SelectedAnswerId":"23565","SelectedAnswerText":"","EditItem":false},{"GroupId":"3017","SelectedAnswerId":"23564","SelectedAnswerText":"","EditItem":false},{"GroupId":"3895","SelectedAnswerId":"23557","SelectedAnswerText":"","EditItem":false},{"GroupId":"3019","SelectedAnswerId":"23560","SelectedAnswerText":"","EditItem":false},{"GroupId":"4008","SelectedAnswerId":"23724","SelectedAnswerText":"","EditItem":false},{"GroupId":"2994","SelectedAnswerId":"23244","SelectedAnswerText":"","EditItem":false},{"GroupId":"3021","SelectedAnswerId":"23559","SelectedAnswerText":"","EditItem":false},{"GroupId":"3023","SelectedAnswerId":"23558","SelectedAnswerText":"","EditItem":false},{"GroupId":"2989","SelectedAnswerId":"23566","SelectedAnswerText":"","EditItem":false},{"GroupId":"2991","SelectedAnswerId":"23563","SelectedAnswerText":"","EditItem":false},{"GroupId":"3011","SelectedAnswerId":"23553","SelectedAnswerText":"","EditItem":false},{"GroupId":"3013","SelectedAnswerId":"23552","SelectedAnswerText":"","EditItem":false},{"GroupId":"3940","SelectedAnswerId":"23399","SelectedAnswerText":"","EditItem":false},{"GroupId":"3888","SelectedAnswerId":"23216","SelectedAnswerText":"","EditItem":false},{"GroupId":"3892","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3974","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3004","SelectedAnswerId":"23273","SelectedAnswerText":"","EditItem":false},{"GroupId":"3993","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"3994","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"2998","SelectedAnswerId":"23258","SelectedAnswerText":"","EditItem":false},{"GroupId":"2996","SelectedAnswerId":"23253","SelectedAnswerText":"","EditItem":false},{"GroupId":"3964","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3965","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"4022","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false}]},
               {"Index":"","MenuItemId":"3690","MenuItemText":"#3 TOTALLY TUNA®","SelectedSize":"Regular","Quantity":1,"ExtendedPrice":0,"Label":"","DisplayText":"","DisplayPrice":"","FavoriteName":"","ItemCost":0,"MustEdit":false,"IsQuantityFixed":false,"IsSizeFixed":false,"IsPriceFixed":false,"CanDelete":false,"CanEdit":false,"IsMainCouponItem":false,"NoMayo":false,"RewardNotes":"","CouponReference":"","ConfirmedSprouts":false,"Modifiers":[{"GroupId":"3003","SelectedAnswerId":"23570","SelectedAnswerText":"","EditItem":false},{"GroupId":"3001","SelectedAnswerId":"23569","SelectedAnswerText":"","EditItem":false},{"GroupId":"3017","SelectedAnswerId":"23564","SelectedAnswerText":"","EditItem":false},{"GroupId":"3150","SelectedAnswerId":"23561","SelectedAnswerText":"","EditItem":false},{"GroupId":"3895","SelectedAnswerId":"23557","SelectedAnswerText":"","EditItem":false},{"GroupId":"3019","SelectedAnswerId":"23560","SelectedAnswerText":"","EditItem":false},{"GroupId":"4008","SelectedAnswerId":"23724","SelectedAnswerText":"","EditItem":false},{"GroupId":"2994","SelectedAnswerId":"23244","SelectedAnswerText":"","EditItem":false},{"GroupId":"3021","SelectedAnswerId":"23559","SelectedAnswerText":"","EditItem":false},{"GroupId":"3023","SelectedAnswerId":"23558","SelectedAnswerText":"","EditItem":false},{"GroupId":"2989","SelectedAnswerId":"23566","SelectedAnswerText":"","EditItem":false},{"GroupId":"2991","SelectedAnswerId":"23563","SelectedAnswerText":"","EditItem":false},{"GroupId":"3005","SelectedAnswerId":"23568","SelectedAnswerText":"","EditItem":false},{"GroupId":"3013","SelectedAnswerId":"23552","SelectedAnswerText":"","EditItem":false},{"GroupId":"3940","SelectedAnswerId":"23399","SelectedAnswerText":"","EditItem":false},{"GroupId":"3888","SelectedAnswerId":"23216","SelectedAnswerText":"","EditItem":false},{"GroupId":"3892","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3974","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3010","SelectedAnswerId":"23288","SelectedAnswerText":"","EditItem":false},{"GroupId":"3014","SelectedAnswerId":"23298","SelectedAnswerText":"","EditItem":false},{"GroupId":"3993","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"3994","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"2998","SelectedAnswerId":"23258","SelectedAnswerText":"","EditItem":false},{"GroupId":"3964","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3965","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"4022","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false}]},
               {"Index":"","MenuItemId":"3691","MenuItemText":"#4 TURKEY TOM®","SelectedSize":"Regular","Quantity":1,"ExtendedPrice":0,"Label":"","DisplayText":"","DisplayPrice":"","FavoriteName":"","ItemCost":0,"MustEdit":false,"IsQuantityFixed":false,"IsSizeFixed":false,"IsPriceFixed":false,"CanDelete":false,"CanEdit":false,"IsMainCouponItem":false,"NoMayo":false,"RewardNotes":"","CouponReference":"","ConfirmedSprouts":false,"Modifiers":[{"GroupId":"3003","SelectedAnswerId":"23570","SelectedAnswerText":"","EditItem":false},{"GroupId":"3001","SelectedAnswerId":"23569","SelectedAnswerText":"","EditItem":false},{"GroupId":"3015","SelectedAnswerId":"23565","SelectedAnswerText":"","EditItem":false},{"GroupId":"3017","SelectedAnswerId":"23564","SelectedAnswerText":"","EditItem":false},{"GroupId":"3895","SelectedAnswerId":"23557","SelectedAnswerText":"","EditItem":false},{"GroupId":"3019","SelectedAnswerId":"23560","SelectedAnswerText":"","EditItem":false},{"GroupId":"4008","SelectedAnswerId":"23724","SelectedAnswerText":"","EditItem":false},{"GroupId":"2994","SelectedAnswerId":"23244","SelectedAnswerText":"","EditItem":false},{"GroupId":"3021","SelectedAnswerId":"23559","SelectedAnswerText":"","EditItem":false},{"GroupId":"3023","SelectedAnswerId":"23558","SelectedAnswerText":"","EditItem":false},{"GroupId":"2989","SelectedAnswerId":"23566","SelectedAnswerText":"","EditItem":false},{"GroupId":"2991","SelectedAnswerId":"23563","SelectedAnswerText":"","EditItem":false},{"GroupId":"3005","SelectedAnswerId":"23568","SelectedAnswerText":"","EditItem":false},{"GroupId":"3011","SelectedAnswerId":"23553","SelectedAnswerText":"","EditItem":false},{"GroupId":"3940","SelectedAnswerId":"23399","SelectedAnswerText":"","EditItem":false},{"GroupId":"3888","SelectedAnswerId":"23216","SelectedAnswerText":"","EditItem":false},{"GroupId":"3892","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3974","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3012","SelectedAnswerId":"23293","SelectedAnswerText":"","EditItem":false},{"GroupId":"3993","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"3994","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"2998","SelectedAnswerId":"23258","SelectedAnswerText":"","EditItem":false},{"GroupId":"2996","SelectedAnswerId":"23253","SelectedAnswerText":"","EditItem":false},{"GroupId":"3964","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3965","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"4022","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false}]},
               {"Index":"","MenuItemId":"3701","MenuItemText":"#7 GOURMET SMOKED HAM CLUB","SelectedSize":"Regular","Quantity":1,"ExtendedPrice":0,"Label":"","DisplayText":"","DisplayPrice":"","FavoriteName":"","ItemCost":0,"MustEdit":false,"IsQuantityFixed":false,"IsSizeFixed":false,"IsPriceFixed":false,"CanDelete":false,"CanEdit":false,"IsMainCouponItem":false,"NoMayo":false,"RewardNotes":"","CouponReference":"","ConfirmedSprouts":false,"Modifiers":[{"GroupId":"3003","SelectedAnswerId":"23570","SelectedAnswerText":"","EditItem":false},{"GroupId":"3001","SelectedAnswerId":"23569","SelectedAnswerText":"","EditItem":false},{"GroupId":"3015","SelectedAnswerId":"23565","SelectedAnswerText":"","EditItem":false},{"GroupId":"3017","SelectedAnswerId":"23564","SelectedAnswerText":"","EditItem":false},{"GroupId":"3895","SelectedAnswerId":"23557","SelectedAnswerText":"","EditItem":false},{"GroupId":"3019","SelectedAnswerId":"23560","SelectedAnswerText":"","EditItem":false},{"GroupId":"4008","SelectedAnswerId":"23724","SelectedAnswerText":"","EditItem":false},{"GroupId":"3997","SelectedAnswerId":"23244","SelectedAnswerText":"","EditItem":false},{"GroupId":"3021","SelectedAnswerId":"23559","SelectedAnswerText":"","EditItem":false},{"GroupId":"3023","SelectedAnswerId":"23558","SelectedAnswerText":"","EditItem":false},{"GroupId":"3005","SelectedAnswerId":"23568","SelectedAnswerText":"","EditItem":false},{"GroupId":"3011","SelectedAnswerId":"23553","SelectedAnswerText":"","EditItem":false},{"GroupId":"3013","SelectedAnswerId":"23552","SelectedAnswerText":"","EditItem":false},{"GroupId":"3940","SelectedAnswerId":"23399","SelectedAnswerText":"","EditItem":false},{"GroupId":"2944","SelectedAnswerId":"23216","SelectedAnswerText":"","EditItem":false},{"GroupId":"3893","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3894","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"4017","SelectedAnswerId":"23241","SelectedAnswerText":"","EditItem":false},{"GroupId":"2988","SelectedAnswerId":"23237","SelectedAnswerText":"","EditItem":false},{"GroupId":"3995","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"3996","SelectedAnswerId":"23252","SelectedAnswerText":"","EditItem":false},{"GroupId":"2998","SelectedAnswerId":"23258","SelectedAnswerText":"","EditItem":false},{"GroupId":"2996","SelectedAnswerId":"23253","SelectedAnswerText":"","EditItem":false},{"GroupId":"3964","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"3965","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false},{"GroupId":"4022","SelectedAnswerId":"0","SelectedAnswerText":"","EditItem":false}]}
]

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
  {
    Id : "3695",
    name : "SLIM 1",
    Price : "4.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3695_medium.jpg"
  },
  {
    Id:"3696",
    name : "SLIM 2",
    Price : "4.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3696_medium.jpg"
  },
  {
    Id : "3697",
    name : "SLIM 3",
    Price : "4.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3697_medium.jpg"
  },
  {
    Id : "3698",
    name : "SLIM 4",
    Price : "4.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3698_medium.jpg"
  },
  {
    Id : "3699",
    name : "SLIM 5",
    Price : "4.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3699_medium.jpg"
  },
  {
    Id : "3700",
    name : "SLIM 6",
    Price : "4.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3700_medium.jpg"
  },
  {
    Id : "3688",
    name : "#1 PEPE®",
    Description : "Real wood-smoked ham and provolone cheese, garnished with lettuce, tomato & mayo.",
    Price : "5.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3688_medium.jpg"
  },
  {
    Id : "3689",
    name : "#2 BIG JOHN®",
    Description : "Medium rare choice roast beef, topped with yummy mayo, lettuce & tomato.",
    Price : "5.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3689_medium.jpg"
  },
  {
    Id : "3690",
    name : "#3 TOTALLY TUNA®",
    Description : "Fresh housemade tuna, mixed with celery, onions & our tasty sauce, then topped with cucumber, lettuce & tomato. (My tuna rocks!)",
    Price : "5.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3690_medium.jpg"
  },
  {
    Id : "3691",
    name : "#4 TURKEY TOM®",
    Description : "Fresh sliced turkey breast, topped with lettuce, tomato & mayo. (The original) *Pictured with sprouts. Sprouts are optional and can be added by request, where available.",
    Price : "5.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3691_medium.jpg"
  },
  {
    Id : "3692",
    name : "#5 VITO®",
    Description : "The original Italian sub with genoa salami, provolone cheese, capicola, onion, lettuce, tomato & a real tasty Italian vinaigrette. (Hot peppers by request)",
    Price : "5.99",
    image : "https://online.jimmyjohns.com/resources/images/menuitems/3692_medium.jpg"
  },
  {
    Id : "482",
    name : "Giant Club Sandwiches",
    Description : "My club sandwiches have twice the meat or cheese.",
    Price : "5.99",
    image : "https://online.jimmyjohns.com/resources/images/menusections/482.jpg"
  },
  {
    Id : "483",
    name : "The J.J. Gargantuan®",
    Description : "This sandwich was invented by Jimmy John's brother, Huey. It's huge enough to feed the hungriest of all humans! Tons of genoa salami, sliced smoked ham, capicola, roast beef, turkey & provolone cheese, jammed into one of our homemade French buns then smothered with onions, mayo, lettuce, tomato & our homemade Italian dressing.",
    Price : "5.99",
    image : "https://online.jimmyjohns.com/resources/images/menusections/483.jpg"
  }
]

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards2,
      outOfCards: false,
      isMatched: false
    }
  },
  handleYup (card) {
            this.setState({isMatched: true });
  
             axios.post('https://htv3e31671.execute-api.us-west-2.amazonaws.com/dev/foodapi/grindersMatch', {
               userInfo: userInfo,
               items: [item]
             })
             .then((res) => {
                res.end(JSON.stringify(response.data))
             })
             .catch((error) => {
               res.end(JSON.stringify(error))
             })
           



  },
  handleNope (card) {
    console.log("nope")
  },
  renderMatched(){
      alert("called");
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

        renderCard={(cardData) => this.state.isMatched ? <RenderPlaceOrder /> : <Card {...cardData} /> }
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        stack={false}
        handleYup={this.handleYup}
        renderMatched={this.state.isMatched}
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
    backgroundColor: 'transparent',
    borderWidth: 2,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 400,
    height: 600,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    bottom: 100,
    backgroundColor: "white",
    alignSelf: "stretch",
    textAlign: 'center'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMatched: {
    paddingTop: 5,
    paddingBottom: 10,
    fontWeight: 'bold',
    bottom: 50,
    backgroundColor: "white",
    alignSelf: "stretch",
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2
  } 
})


        
