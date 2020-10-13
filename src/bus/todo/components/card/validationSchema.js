import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    completed:	    Yup.boolean(),
    title:          Yup.string()
                    .min(3, 'Task title is too short.')
                    .required('Task title field is required.'),
    description:    Yup.string(),
    deadline:       Yup.date()
                    .min(new Date(), 'Date should be at least in one minute after now')
                    .required('Task deadline field is required.'),
    tag:            Yup.string().required('Task tag field is required.'),
    checklist:	    Yup.array().of(
        Yup.object().shape({
            completed:  Yup.boolean(),
            title: Yup.string()
                .min(3, '{i} Sub-Task title is too short.')
                .required('{i} Sub-Task title field is required.'),
        })
    ).min(1, 'Task doesn\'t contain any sub-tasks'),
});