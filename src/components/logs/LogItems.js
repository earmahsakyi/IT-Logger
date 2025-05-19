import React from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { deleteLog,setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const LogItems = ({ log }) => {
  const dispatch = useDispatch();

  const logid = log.id;



  const onDelete = () => {
    dispatch(deleteLog(logid));
    M.toast({ html: 'Log Deleted Successfullly'});
    
  }
  const setCurrentState = () => {
    dispatch(setCurrent(log));
  } 

  return (
    <li className='collection-item'>
      <div> 
        <a href='#edit-log-modal' className={`modal-trigger ${log.attention ? 'red-text' :
            'blue-text'
        }`} onClick={setCurrentState}>{log.message}</a>
        <br/>
        <span className='grey-text'>
        <span className='black-text'>ID #{log.id} </span>
         Last updated by {' '}
        <span className='black-text'> {log.tech}</span> on {' '}
         <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>  
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
            <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

LogItems.propTypes = {
    log: PropTypes.object.isRequired
}

export default LogItems
