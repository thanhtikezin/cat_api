import React, { Component } from 'react';
import { CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export default class CatCard extends Component {
  render() {
    return (
      <CardItem style={{backgroundColor:'lightyellow'}}>
        <Left>
          <Thumbnail style={{width:300, height:300}} source={{uri: 'https://cdn2.thecatapi.com/images/'+this.props.img+'.jpg' || '.png'}} 
          />
          <Body>
            <Text style={{ fontSize: 35}}>{this.props.name}</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}note>Weight : (imperial : {this.props.weight}), (metric : {this.props.weight1})</Text>
            <Text style={{ fontSize: 20 }}note>Origin : {this.props.origin}</Text>
            <Text style={{ fontSize: 20 }}note>LIfespan : {this.props.life}</Text>
            <Text style={{ fontSize: 20 }}note>Temperament : {this.props.temp}</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}note>Description</Text>
            <Text style={{ fontSize: 17 }}note>"{this.props.description}"</Text>
            <Text></Text>
            <Text style={{ fontSize: 20 }}note>Wikipedia : {this.props.wiki}</Text>
          </Body>
        </Left>
      </CardItem>
    );
  }
}