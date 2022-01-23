import React from 'react';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Center, Input, VStack} from "native-base";
import FormControlLabel from "native-base/src/components/composites/FormControl/FormControlLabel";

const UpdateAdvertisementForm = ({route}) => {
    let data = route.params;
    const [title, onChangeTextTitle] = React.useState(data.title);
    // const [description, onChangeTextDescription] = React.useState("");
    const [price, onChangePrice] = React.useState(data.price);
    // const [img, onChangeImg] = useState(null);

    return (
        <NativeBaseProvider>
            <Center flex={1} bg="tertiary.300">
                <VStack width="90%" mx="3">
                    {/*Title*/}
                    <FormControlLabel _text={{bold: true, fontSize: 20}}>Title:</FormControlLabel>
                    <Input
                        size={"lg"}
                        value={title}
                        onChangeText={onChangeTextTitle}
                        placeholder="Title"
                    />
                    {/*Price*/}
                    <FormControlLabel _text={{bold: true, fontSize: 20}}>Price:</FormControlLabel>
                    <Input
                        size={"lg"}
                        value={price}
                        onChangeText={onChangePrice}
                        placeholder="Price"
                        keyboardType="numeric"
                    />
                </VStack>
            </Center>
        </NativeBaseProvider>
    );
}

export default UpdateAdvertisementForm;
