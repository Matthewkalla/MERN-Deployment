import * as yup from 'yup';

export const petSchema = yup.object().shape({
    petName: yup.string(),
    petType: yup.string(),
    petDescription: yup.string(),
    skill1: yup.string(),
    skill2: yup.string(),
    skill3: yup.string()
})