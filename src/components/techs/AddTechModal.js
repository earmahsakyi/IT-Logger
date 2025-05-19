import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../../actions/techAction';

const AddTechModal = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.tech.loading); // Assuming the loading state is stored in tech reducer
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const onSubmit = () => {
        if (firstname === '' || lastname === '') {
            M.toast({ html: 'Please enter the FirstName and LastName' });
        } else {
            dispatch(addTech({
                firstname,
                lastname,
            }));
            M.toast({ html: 'New Technician added successfully' });
            setFirstname('');
            setLastname('');
            

        }
    };

    return (
        <div id='add-tech-modal' className='modal'>
            <div className='modal-content'>
                <h4>New Technician</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='firstname'
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                        />
                        <label htmlFor='firstName' className='active'>First Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='lastname'
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                        />
                        <label htmlFor='lastName' className='active'>Last Name</label>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    onClick={onSubmit}
                    className={`modal-close waves-effect blue waves-green btn ${loading ? 'disabled' : ''}`}
                >
                    {loading ? 'Adding...' : 'Enter'}
                </a>
            </div>
        </div>
    );
};

export default AddTechModal;
