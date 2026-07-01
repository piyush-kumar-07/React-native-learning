import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

function StyleSheetPrac() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Hello Piyush ji from react native
      </Text>

      <Text style={styles.heading2}>
        Hello, again from react native
      </Text>

      <ScrollView horizontal>    /* used to make horizontal scrolling*/
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.boxheading}> Box 1 </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxheading}> Box 2 </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxheading}> Box 3</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxheading}> Box 4</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxheading}> Box 5</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxheading}> Box 6</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  heading: {
    fontSize: 40,
    color: 'red',
    backgroundColor: '#000',
    padding: 20, // space inside box
    margin: 20, // space outside box
    borderWidth: 2, // border thickness
    borderColor: 'black',
    borderRadius: 20,
    textAlign: 'center',
  },

  heading2: {
    fontSize: 40,
    color: 'red',
    backgroundColor: 'black',
    padding: 20,
    margin: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    textAlign: 'center',
  },

  boxContainer: {
    height: 200,

    flexDirection: 'row', // row = side by side

    justifyContent: 'space-between',//center and flex-start  and flex-end works on main axis 
    // space between boxes

    alignItems: 'center',//works on cross axis types- flex-start, center ,flex-end 
    // vertical center
  },

  box: {
    width: 50,
    height: 50,
    backgroundColor: '#f35b5b',
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',

  },
  boxheading: {
    textAlign: 'center',
    color: 'black',

  }
});

export default StyleSheetPrac;  