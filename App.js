import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Pressable
          style={{
            backgroundColor: "#E6E6FA",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            margin: 10,
          }}
        >
          <AntDesign name="left" size={24} color="#33006F" />
          <Text
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              fontWeight: "bold",
              color: "purple",
            }}
          >
            Worst Pain
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
          marginTop: 5,
        }}
      >
        <Text
          style={{
            marginLeft: 10,
            zIndex: 3,
            padding: 4,
            width: 20,
            height: 20,
            borderRadius: 10,
            marginHorizontal: 15,
            color: "black",
            textAlign: "center",
            backgroundColor: "#1d1160",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Text>

        <Text
          style={{
            marginLeft: 10,
            marginHorizontal: 15,
            zIndex: 3,
            padding: 4,
            width: 20,
            height: 20,
            borderRadius: 10,
            color: "black",
            textAlign: "center",
            backgroundColor: "#1d1160",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Text>

        <Text
          style={{
            marginLeft: 10,
            zIndex: 3,
            padding: 4,
            marginHorizontal: 15,
            width: 20,
            height: 20,
            borderRadius: 10,
            color: "black",
            textAlign: "center",
            backgroundColor: "#E6E6FA",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Text>

        <Text
          style={{
            marginLeft: 10,
            zIndex: 3,
            padding: 4,
            width: 20,
            marginHorizontal: 15,
            height: 20,
            borderRadius: 10,
            color: "black",
            textAlign: "center",
            backgroundColor: "#E6E6FA",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Text>

        <Text
          style={{
            marginLeft: 10,
            zIndex: 3,
            padding: 4,
            width: 20,
            height: 20,
            marginHorizontal: 15,
            borderRadius: 10,
            color: "black",
            textAlign: "center",
            backgroundColor: "#E6E6FA",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Text>

        <Text
          style={{
            marginLeft: 10,
            zIndex: 3,
            padding: 4,
            width: 20,
            height: 20,
            borderRadius: 10,
            color: "black",
            textAlign: "center",
            backgroundColor: "#E6E6FA",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Text>
      </View>
      <Text
        style={{
          height: 3,
          width: 240,
          borderColor: "#1d1160",
          borderWidth: 2,
          // position:"absolute",
          bottom: 19,
          left: 80,
        }}
      ></Text>
      <View
        style={{
          padding: 5,
          margin: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{}}>
          <Image
            style={{ width: 50, height: 50, resizeMode: "contain" }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7PThb74NpNHj67-PmAsVmmKR08kemhyEPA&usqp=CAU",
            }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
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
          height: "54%",
          borderColor: "purple",
          borderWidth: 4,
          borderRadius: 4,
          width: 1,
          backgroundColor: "purple",
          position: "absolute",
          left: 21,
          top: 270,
          zIndex: -10,
        }}
      />
      <Pressable
        style={{ backgroundColor: "#9932CC", padding: 10, margin: 15 }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Next</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50,
  },
});
