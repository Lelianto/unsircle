import React from 'react';
import '../styles/css/bootstrap.min.css';
import '../styles/css/index.css';
import { 
    withRouter, 
    Redirect 
} from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../stores/store';;

class ProfileUser extends React.Component {
    render() {
        if ( localStorage.getItem('token') === null ){
            return <Redirect to={{ pathname: "/login" }} />;
        } else {
            const user = localStorage.getItem('email')
            return (
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                            <h3 className=''>Selamat Datang {user}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default connect("",actions)(withRouter(ProfileUser));