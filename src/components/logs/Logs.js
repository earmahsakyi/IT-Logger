import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import Preloader from '../layout/Preloader';
import LogItems from './LogItems';
import { getLogs } from '../../actions/logActions';


const Logs = (  ) => {
    const dispatch = useDispatch();

    // Get logs and loading state from Redux
    const logs =useSelector(state => state.log.logs);
    const loading = useSelector(state => state.log.loading);



    useEffect(() => {
        dispatch(getLogs());// Dispatch the action to fetch logs
    },[dispatch])


       if(loading || logs === null){
        return <Preloader/>
       }
  return (
    <ul className='collection with-header'>
        <li className='collection-header'>
            <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (<p className='center'>No Logs to show...</p>):
        (logs.map(log => <LogItems log={log} key={log.id}/>))
        }

    </ul>
  )
}

export default Logs
