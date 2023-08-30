import { Text } from "react-native";
import { TextInput } from "react-native";


export function Input({...props}) {
    return (
        <>
            <Text>
            {props.title}
            </Text>
            <TextInput/>
        </>

    )
}