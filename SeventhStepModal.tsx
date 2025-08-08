import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Modal } from "./Modal";

const SeventhStepModal = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <TouchableOpacity
        onPress={() => setVisibility(true)}
        style={{
          height: 55,
          width: 250,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#CD4E43",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}>
          Open Modal
        </Text>
      </TouchableOpacity>

      <Modal visibility={visibility} handleDismiss={() => setVisibility(false)}>
        <View
          style={{
            height: "auto",
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#CD4E43",
          }}
        >
          <View
            style={{
              height: "auto",
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                height: "auto",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 50, fontWeight: "bold", color: "#fff" }}>
                50% OFF
              </Text>
            </View>

            <View
              style={{
                height: "auto",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "300", color: "#fff" }}>
                on your first purchase
              </Text>
            </View>

            <View
              style={{
                height: 50,
                width: "90%",
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Enter your email address here
              </Text>
            </View>

            <View
              style={{
                height: 50,
                width: "90%",
                backgroundColor: "#7C74A1",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#900" }}>
                GET MY 50% OFF
              </Text>
            </View>

            <View
              style={{
                height: "auto",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{ borderBottomWidth: 1.5, borderBottomColor: "#FFF" }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}
                >
                  NO, THANKS
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SeventhStepModal;

const styles = StyleSheet.create({});
