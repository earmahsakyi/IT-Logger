import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechs } from '../../actions/techAction';

const TechSelectOptions = () => {
    const dispatch = useDispatch();
    const techs = useSelector(state => state.tech.techs);
    const loading = useSelector(state => state.tech.loading);

    useEffect(() => {
        dispatch(getTechs());
    }, [dispatch]);  // it's better to add dispatch as a dependency

    return (
        loading ? <option>Loading...</option> :
        techs && techs.length > 0 ?
        techs.map(t => (
            <option key={t.id} value={`${t.firstname} ${t.lastname}`}>
                {t.firstname} {t.lastname}
            </option>
        )) :
        <option>No technicians available</option>
    );
}

export default TechSelectOptions;
