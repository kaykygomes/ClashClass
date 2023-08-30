import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";

export function Button({ ...props }) {
    return (
        <>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFFFFF",
        borderRadius: 22,
        width:"50%",
        margin: 15,


    },
    title: {
        textAlign: "center",
        color: "#03DC33",
        fontSize:25
    }
})