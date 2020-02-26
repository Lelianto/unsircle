import React from 'react';
import '../styles/css/bootstrap.min.css';
import '../styles/css/index.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../stores/store';
import logo from '../images/unsircle.png';
import swal from 'sweetalert'

class Header extends React.Component {
    /** 
     * @function handleSignOut  function for handling sign out
    */
    handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        swal("Terima Kasih!", "Silakan login kembali untuk mengakses data!", "success");
        this.props.history.push("/login");
    }
    render (){
        return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4 logo-name" style={{ paddingBottom:'15px' }}>
                        <img style={{ marginTop:'20px', marginBottom:'20px', width:'40%' }} src={ logo } id="icon" alt="User Icon" />
                    </div>
                    <div className="col-md-4" style={{ marginTop:'25px' }}>
                        <label>
                            <button type="button" class="btn btn-danger" onClick={this.handleSignOut}>Log Out</button>
                        </label>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default connect("",actions)(withRouter(Header));