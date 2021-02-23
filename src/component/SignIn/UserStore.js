import {extendObservable} from 'mobx';
import SIForm from './SIForm';

class UserStore{
    constructor(){
        extendObservable(this,{
            loading: true,
            isLoggedIn: false,
            usename:'',
            token: SIForm.state
            // token:'' 
        })
    }
}

export default new UserStore();