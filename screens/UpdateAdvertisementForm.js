import React from 'react';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Center, Input, VStack} from "native-base";
import FormControlLabel from "native-base";

const UpdateAdvertisementForm = () => {
    // let data = route.params;
    // const [title, onChangeTextTitle] = React.useState("");
    // const [description, onChangeTextDescription] = React.useState("");
    // const [price, onChangePrice] = React.useState("");
    // const [img, onChangeImg] = useState(null);

    return (
        <NativeBaseProvider>
            <Center flex={1}>
                {/*<VStack width="90%" mx="3">*/}
                    {/*<FormControlLabel _text={{bold: true, fontSize: 25}}>Title:</FormControlLabel>*/}
                    {/*<Input*/}
                    {/*    value={title}*/}
                    {/*    onChangeText={onChangeTextTitle}*/}
                    {/*    placeholder="Title"*/}
                    {/*/>*/}
                {/*</VStack>*/}
            </Center>
        </NativeBaseProvider>
    );
}

export default UpdateAdvertisementForm;
