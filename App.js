import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ padding: 5, marginLeft: 5 }}>
        <Text style={{ color: "purple", fontSize: 16, fontWeight: "700" }}>
          Mid-back (right)
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            fontWeight: "700",
            marginTop: 4,
            marginBottom: 3,
          }}
        >
          Aching, Stabbing
        </Text>
      </View>
      <Text
        style={{
          height: 1,
          borderColor: "#DCDCDC",
          borderWidth: 1,
        }}
      ></Text>
      <Text
        style={{
          color: "purple",
          fontSize: 16,
          fontWeight: "bold",
          padding: 10,
        }}
      >
        Please choose that one Number that best describes your worst pain in
        this location in past 7 days
      </Text>
      <Pressable
        style={{
          padding: 10,
          justifyContent: "center",
          backgroundGradient: "vertical",
          backgroundGradientTop: "red",
          backgroundGradientBottom: "orange",
        }}
      >
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginRight: 10,
              zIndex: 3,
              padding: 4,
              width: 30,
              height: 30,
              borderRadius: 15,
              color: "black",
              textAlign: "center",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "purple",
              borderWidth: 2,
            }}
          >
            0
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            No Pain
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              marginRight: 10,
              padding: 4,
              width: 30,
              zIndex: 3,
              height: 30,
              borderRadius: 15,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "purple",
              backgroundColor: "white",
              borderWidth: 2,
            }}
          >
            1
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Minimal
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              marginRight: 10,
              padding: 4,
              width: 30,
              height: 30,
              borderRadius: 15,
              zIndex: 3,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderColor: "purple",
              borderWidth: 2,
            }}
          >
            2
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Mild
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              marginRight: 10,
              padding: 4,
              width: 30,
              height: 30,
              borderRadius: 15,
              color: "black",
              backgroundColor: "white",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "purple",
              zIndex: 3,
              borderWidth: 2,
            }}
          >
            3
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Uncomfortable
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              zIndex: 3,
              marginRight: 10,
              padding: 4,
              width: 30,
              height: 30,
              borderRadius: 15,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "purple",
              backgroundColor: "white",
              borderWidth: 2,
            }}
          >
            4
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Moderate
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              marginRight: 10,
              padding: 4,
              width: 30,
              height: 30,
              zIndex: 3,
              borderRadius: 15,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "white",
              alignItems: "center",
              borderColor: "purple",
              borderWidth: 2,
            }}
          >
            5
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Distracting
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              marginRight: 10,
              padding: 4,
              width: 30,
              zIndex: 3,
              height: 30,
              borderRadius: 15,
              color: "black",
              textAlign: "center",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "purple",
              borderWidth: 2,
            }}
          >
            6
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Distressing
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              marginRight: 10,
              padding: 4,
              zIndex: 3,
              width: 30,
              height: 30,
              borderRadius: 15,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "white",
              alignItems: "center",
              borderColor: "purple",
              borderWidth: 2,
            }}
          >
            7
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Unmanageable
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              marginRight: 10,
              padding: 4,
              width: 30,
              height: 30,
              borderRadius: 15,
              zIndex: 3,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "purple",
              backgroundColor: "white",
              borderWidth: 2,
            }}
          >
            8
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Intense
          </Text>
        </Pressable>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              marginRight: 10,
              padding: 4,
              width: 30,
              height: 30,
              borderRadius: 15,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "purple",
              backgroundColor: "white",
              borderWidth: 2,
            }}
          >
            9
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Severe
          </Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              zIndex: 3,
              marginRight: 10,
              padding: 4,
              width: 30,
              height: 30,
              borderRadius: 15,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "purple",
              backgroundColor: "white",
              borderWidth: 2,
            }}
          >
            10
          </Text>
          <Text style={{ fontSize: 16, color: "#989898", fontWeight: "bold" }}>
            Worst Imaginable Pain
          </Text>
        </Pressable>
      </Pressable>
      <View
        style={{
          height: "55%",
          borderColor: "purple",
          borderWidth: 4,
          borderRadius: 4,
          width: 1,
          backgroundColor: "purple",
          position: "absolute",
          left: 21,
          top: 154,
          zIndex: -10,
        }}
      />
      <Pressable
        style={{ backgroundColor: "#9932CC", padding: 10, margin: 15 }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50,
  },
});
