import React, {useState} from 'react';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, Center, Input, Stack, TextArea, VStack} from "native-base";
import FormControlLabel from "native-base/src/components/composites/FormControl/FormControlLabel";

const UpdateAdvertisementForm = ({route}) => {
    let data = route.params;
    console.log(data.description);
    const [title, onChangeTextTitle] = useState(data.title);
    const [description, onChangeTextDescription] = React.useState(data.description);
    const [price, onChangePrice] = useState(data.price);
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
                    <FormControlLabel _text={{bold: true, fontSize: 20}}>Decription:</FormControlLabel>
                    <TextArea
                        size={"lg"}
                        totalLines={5}
                        value={description}
                        onChangeText={onChangeTextDescription}
                        placeholder="Description"
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

                    <Button size="md">Update</Button>
                </VStack>
            </Center>
        </NativeBaseProvider>
    );
}



export default UpdateAdvertisementForm;
