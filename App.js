import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";

const MovieApp = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.movies);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((e) => console.log(e));
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"small"} color={"black"} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.listBox}>
              <View style={styles.listStyle}>
                <Text>{item.id} </Text>
              </View>
              <View style={styles.listStyle}>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.listStyle}>
                <Text> {item.releaseYear}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#B392AC",
    alignItems: "center",
  },
  listBox: {
    flexDirection: "row",
    backgroundColor: "#D1B3C4",
    padding: 20,
  },
  listStyle: {
    justifyContent: "center",
    height: 40,
    width: 100,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
});

export default MovieApp;
