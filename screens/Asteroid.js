import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Asteroid = ({ route }) => {
    const [currAst, setCurrAst] = useState(route.params.ast);
    return (
        <View style={styles.body}>
            <Text style={styles.currText}>Asteroid Id : {currAst.id}</Text>
            <Text style={styles.currText}>Asteroid Name : {currAst.name}</Text>
            <Text style={styles.currText}>Asteroid Desgination : {currAst.designation}</Text>
            <Text style={styles.currText}>Estimated Diameter  : {currAst.estimated_diameter.kilometers.estimated_diameter_max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    currText: {
        margin: 10,
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Asteroid;