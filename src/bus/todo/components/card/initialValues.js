// Helpers
import { date } from '../../../../helpers/date';

export const initialSubtaskValues = {
    completed: false,
    title: ''
}

export const initialValues = {
    completed: false,
    title: '',
    description: '',
    deadline: date.toEndDay(),
    tag: '',
    checklist: []
};