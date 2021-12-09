import { useState, useEffect } from 'react';

const useDateNowState = (newDate) => {
    const [dateNow, setDateNow] = useState({});

    useEffect(() => {

        let today = newDate;
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;

        setDateNow(dateTime)
    }, [newDate]);

    return [
        dateNow,
        setDateNow
    ]
};

export default useDateNowState;