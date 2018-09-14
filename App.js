import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const { width: vw , height:vh } = Dimensions.get('window');

class Square extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    var row = this.props.row;
    var col = this.props.col;
    var indexRow = this.props.indexRow;
    var indexCol = this.props.indexCol;
    const styles = this.squareStyle(indexRow,indexCol);
    return (
      <View style={styles}>
        <Text style={{color: styles.textColor}}>{col}-{row}</Text>
     </View>
    )
  }

  squareStyle(col,row){
    var color = 'black';
    if(col%2==0){
      color = row % 2 == 0 ? 'black' : 'white';
    }else{
      color = row % 2 != 0 ? 'black' : 'white';
    }
    return {
      width:30,
      height:30,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor:color,
      textColor: color == 'black' ?  'white' : 'black' 
    }
  }
}

class Checkerboard extends React.Component{
  render(){
    var rows = [];
    ['a','b','c','d','e','f','g','h'].forEach((row,indexRow)=>{
      cols = [];
      ['8','7','6','5','4','3','2','1'].forEach((col,indexCol)=>{
        cols.push(
          <Square row={row} col={col} indexRow={indexRow} indexCol={indexCol}>
          </Square>
        )
      })
      rows.push(<View>{cols}</View>);
    })
    return (
      <View style={styles.checkerboard}>
        {
          rows.map((row)=>{
            return row;
          })
        }
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Checkerboard></Checkerboard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
  },
  checkerboard:{
    flex:1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
