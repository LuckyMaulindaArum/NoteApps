import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      listOfItems: [],
    };
  }

  deleteItem(id) {
    //get all the list items
    const list = this.state.listOfItems;
    //filter the list and create another list which is basically list - item to be deleted
    const updatedList = list.filter((item) => item.id !== id);
    //now set the state with updated list
    this.setState({
      listOfItems: updatedList,
    });
  }

  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value,
    });
  }

  addItem = () => {
    if (this.state.newItem != "") {
      // create a new item with unique id
      const newItemJSON = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
      };

      // copy current list of items
      const list = this.state.listOfItems;

      // add the new item to the list
      list.push(newItemJSON);

      // update state with new list, reset the new item input
      this.setState({
        listOfItems: list,
        //listOfItems:[...this.state.listOfItems,list],
        newItem: "",
      });
    }

    logOut = () => {
      navigation.navigate('logout')
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>Lucky Maulinda Arum</Text>
        </View>
        <View>
          <TextInput
            placeholder="  Add notes here"
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ newItem: text });
            }}
            value={this.state.newItem}
          ></TextInput>
          <View>
            <TouchableOpacity 
            style={styles.button} onPress={this.addItem}>
              <Text style={styles.buttontext}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button1} onPress={()=>navigation.navigate('logout')}>
              <Text style={styles.buttontext1}>Logout</Text>
            </TouchableOpacity>

            
          </View>

          <View>
            <ScrollView>
              {this.state.listOfItems.map((item) => {
                return (
                  <View style={styles.listview}>
                    <Text style={styles.textstyle}> {item.value}</Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#CC9900",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                      }}
                      onPress={() => this.deleteItem(item.id)}
                    >
                      <Text style={{ color: "white" }}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF",
  },
  textView: {
    backgroundColor: "#CC9900",
    height: 80,
  },
  text: {
    textAlign: "center",
    marginTop: "10%",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  inputBox: {
    backgroundColor: "#FFF5E4",
    textAlign: "center",
    fontSize: 16,
    height: 40,
  },
  button: {
    position: "absolute",
    right: 20,
    top: 200,
    backgroundColor: "#CC9900",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

   button1: {
    position: "absolute",
    right: 100,
    top: 280,
    backgroundColor: "#CC9900",
    width: 120,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

  buttontext: {
    color: "#fff",
    fontSize: 24,
  },

   buttontext1: {
    color: "#FF94CC",
    fontSize: 14,
  },
  textstyle: {
    fontSize: 18,
    color: "#000000",
  },
  listview: {
    borderWidth: 2,
    height: 40,
    justifyContent: "space-between",
    borderColor: "#CC9900",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});