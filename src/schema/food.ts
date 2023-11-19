import * as Yup from 'yup';

export const NewListSchema = Yup.object().shape({
    name: Yup.string().required("Please enter a name for the list"),
    type: Yup.string().required("Please enter a type for the list"),
});