import { Formik } from 'formik';
import React from 'react'
import { Modal, View, Text } from 'react-native'
import Button from '../../../components/Button/button';
import HomeUserSelector from '../../../components/HomeUserSelector/home_user_selector';
import Input from '../../../components/Input/input';
import { NewListSchema } from '../../../schema/food';
import foodService from '../../../services/food.service';
import { global, modals } from '../../../styles'

interface IProps {
    navigation: any,
    type: string,
    setType: Function,
}
const NewListModal = (props: IProps) => {

    const active = props.type !== "";

    const Cancel = () => {
        props.setType("");
    }

    const FormSubmit = (values: any) => {
        foodService.CreateList(values.name, values.type).then(
            (res) => {
                if (res.status === 201) {
                    Cancel();
                }
                else {
                    console.log('res');
                }
            }
        )
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={active}
        >
            <View style={modals.container}>
                <View style={[modals.content, global.shadow]}>
                    <Text style={global.h2}>New List</Text>

                    <Formik
                        initialValues={{ activeInput: 'name', name: '', type: props.type }}
                        validationSchema={NewListSchema}
                        onSubmit={values => FormSubmit(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                            <View style={modals.form}>

                                {errors.name && touched.name ? (
                                    <Text style={global.error}>{`${errors.name}`}</Text>
                                ) : null}

                                <Input
                                    type="name"
                                    label="list name"
                                    icon="shopping-cart"
                                    value={values.name}
                                    placeholder="e.g. Grocery List"
                                    onChangeText={handleChange('name')}
                                    activeInput={values.activeInput}
                                    setActiveInput={(i: string) => setFieldValue('activeInput', i)}
                                />

                                <HomeUserSelector
                                    selected={values.type}
                                    setSelected={(t: string) => setFieldValue('type', t)}
                                />

                                <View style={global.horizontal}>
                                    <Button
                                        text='Cancel'
                                        onPress={Cancel}
                                        style={modals.button}
                                        hideShadow={true}
                                        grey={true}
                                    />

                                    <Button
                                        text='Create'
                                        onPress={handleSubmit}
                                        style={modals.button}
                                        hideShadow={true}
                                    />
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </Modal>
    )
}

export default NewListModal