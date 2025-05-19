import React from 'react'
import { useDispatch, } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types'
import { deleteTech } from '../../actions/techAction'

const TechItem = ({ tech } )=> {
  const dispatch = useDispatch();

  const id = tech.id;

  const onDelete = () => {
    dispatch(deleteTech(id));
     M.toast({ html: 'Technician Deleted Successfullly'});
  }
  return (
    <div>
        <li className='collection-item'>
        <div>
            {tech.firstname}   {tech.lastname}
            <a href='#!' className='secondary-content' onClick={onDelete}>
                <i className='material-icons grey-text' >delete</i>
            </a>
        </div>
        </li>
      
    </div>
  )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
}

export default TechItem
