import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles from "../GlobalStyles";
import ReviewsList from "../components/ReviewList";

const LocationDetails = ({ route }) => {
  const navigation = useNavigation();
  const { name, cuisine, address, postalcode, city, type, priceclass, image, id } = route.params;

  return (
    <View style={GlobalStyles.container}>
      <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={24} color='#fff' />
      </TouchableOpacity>
      {/* restaurant detaljer */}
      <Image source={{ uri: image }} style={GlobalStyles.image} />
      <Text style={GlobalStyles.title}>{name}</Text>
      <Text style={GlobalStyles.info}>
        {type} • {cuisine}
      </Text>
      <Text style={GlobalStyles.info}>
        Addresse: {address}, {postalcode} {city}
      </Text>
      <Text style={GlobalStyles.info}>Pris klasse: {priceclass}</Text>
      <TouchableOpacity style={[GlobalStyles.button, { width: "100%", backgroundColor: "#FF4500" }]}>
        <Text style={{ color: "#fff" }}>Book bord</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[GlobalStyles.button, { width: "100%" }]} onPress={() => navigation.navigate("AddReview", { locationId: id })}>
        <Text style={{ color: "#fff" }}>Tilføj anmeldelse</Text>
      </TouchableOpacity>
      <Text style={[GlobalStyles.title, { marginBottom: 0, marginTop: 10 }]}>Anmeldelser</Text>
      <ReviewsList locationId={id} />
    </View>
  );
};

export default LocationDetails;
