import createStore from 'unistore';
import swal from 'sweetalert'

const initialState = {
    email : '',
    password : '',
    typeText : 'password'
}

export const store = createStore(initialState)

export const actions = store => ({
    /**
     * @function changeInput handling change user input in email and password  
     * @returns set email and password
     */
    changeInput : async (state,e) => {
        await store.setState({ [e.target.name]: e.target.value});
    },

    /**
     * @function postLogin user sign in
     *    a function to post user data to the database. 
     *    here, the user enters a personal account. 
     * @returns success login and ready to use web
     */
    postLogin : async (state) => {
        const password= state.password    
        const email = state.email

        if ( email === '' ) {
            swal("Gagal", "Email tidak boleh kosong...", "error");
        } else if ( password === '' ) {
            swal("Gagal", "Password tidak boleh kosong...", "error");
        } else {
            if ( email === 'test@unsircle.com') {
                if ( password === 'test@unsircle.com') {
                    swal("Selamat!", "Anda berhasil masuk!", "success");
                    localStorage.setItem("email", email);
                    localStorage.setItem("token", password);
                } else {
                    swal("Gagal", "Password yang anda masukkan salah...", "error");
                }
            } else {
                swal("Gagal", "Email yang anda masukkan salah...", "error");
            }
        }
    }
});



