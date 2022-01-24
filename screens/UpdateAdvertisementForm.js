import React, {useEffect, useState} from 'react';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, Center, Input, Select, TextArea, VStack} from "native-base";
import FormControlLabel from "native-base/src/components/composites/FormControl/FormControlLabel";
import axios from "axios";

const UpdateAdvertisementForm = ({route, navigation}) => {
    let data = route.params;
    const [title, onChangeTextTitle] = useState(data.title);
    const [description, onChangeTextDescription] = React.useState(data.description);
    const [price, onChangePrice] = useState(data.price);
    const [selectedValue, setSelectedValue] = useState(data.category);
    const [categories, setCategories] = useState([]);

    const categoryItems = categories.map( (item) => {
        return <Select.Item key={item.key} value={item.name} label={item.name}/>
    })

    useEffect( () => {
        navigation.addListener('focus', () => {
            axios.get(
                'http://80.211.251.152:8080/api/categories'
            ).then( (response) => {
                console.log("Pobrano kategorie z GET!");
                setCategories(response.data);
            }).catch( (error) => {
                console.log("Wykryto blad (ladowanie kategorii)!");
            });
        })
    }, []);

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
                        value={price.toInteger}
                        onChangeText={onChangePrice}
                        placeholder="Price"
                        keyboardType="numeric"
                    />
                    {/*categories*/}
                    <FormControlLabel _text={{bold: true, fontSize: 20}}>Category:</FormControlLabel>
                    <Select
                        size={"lg"}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        {categoryItems}
                    </Select>
                    <Button size="md">Update</Button>
                </VStack>
            </Center>
        </NativeBaseProvider>
    );
}



export default UpdateAdvertisementForm;
