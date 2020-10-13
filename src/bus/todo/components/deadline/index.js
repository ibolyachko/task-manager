// Core
import React, { useState, useEffect, useContext } from 'react';

// Date Picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Helper
import { date } from '../../../../helpers/date';

// Contexts
import { CardContext } from '../../contexts/cardContext';

export const Deadline = () => {
    const { values, setFieldValue } = useContext(CardContext);
    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        setStartDate(Date.parse(values.deadline));
    }, [values.deadline]);

    return (
        <>
            <span className="date">
                <DatePicker
                    dateFormat="MMMM d, yyyy"
                    selected={startDate}
                    onChange={selectedDate => {
                        const formatDate = date.toEndDay(selectedDate);
                        setStartDate(formatDate);
                        setFieldValue('deadline', date.toISODate(formatDate));
                    }}
                    minDate={new Date()}
                />
            </span>
        </>
    );
};