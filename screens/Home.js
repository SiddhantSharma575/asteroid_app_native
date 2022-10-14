import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
    const [id, setId] = useState("");
    const [loading, setLoading] = useState(false);
    const [allAst, setAllAst] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=4PZH7J2shjJuJz0lAH7ZKjJaqdezIu9gsrqSTE6B")
            .then((res) => {
                if (res.status === 404) {
                    setError("Unable to fectch ! Try Again")
                    return
                }
                return res.json()
            }).then((data) => {
                setAllAst(data.near_earth_objects)
                setLoading(false);
            }).catch((err) => {
                setError("Unable to fectch ! Try Again")
            })
    }, [])

    const getData = () => {
        const currentData = allAst.filter((curr) => {
            return curr.id === id
        })
        if (currentData.length !== 0) {
            navigation.navigate("Asteroid", {
                ast: currentData[0]
            })
        } else {
            setError("Invalid Id!!")
        }
    }

    const randomAst = () => {
        let random = Math.floor(Math.random() * 19);
        const currentData = allAst[random];
        navigation.navigate("Asteroid", {
            ast: currentData
        })
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TextInput value={id} onChangeText={(text) => {
                setId(text)
                setError(null)
            }} style={styles.input} placeholder="Enter As. id" keyboardType="numeric" />
            {loading && <Text>Loading Please Wait....</Text>}
            {error !== null && <Text>{error}</Text>}
            <View style={styles.btn}>
                <Button color="#4400aa" disabled={loading} onPress={() => getData()} title="Search"></Button>
            </View>
            <View style={styles.btn}>
                <Button color="#4400aa" disabled={loading} onPress={() => randomAst()} title="Random Asteroid Detail"></Button>
            </View>
            {/* <Button onPress={() => navigation.navigate("Asteroid")} title="Random Asteroid"></Button> */}
            {/* {allAst.length > 0 && <Text>{allAst[0].id}</Text>} */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        borderWidth: 1,
        borderColor: "#555",
        borderRadius: 5,
        textAlign: "center",
        fontSize: 15,
        marginBottom: 10
    },
    btn: {
        margin: 20,
    }
})

export default Home;