import { ThirdPartySignIn } from '../services/authentication';

import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

const ThirdPartySignIns = () => {
    const dispatch = useDispatch();

    return ( 
        <div className='google-button-container'>
            <GoogleLogin
                className='google-button'
                clientId={process.env.REACT_APP_CLIENT_ID}
                onSuccess={r => ThirdPartySignIn(dispatch, r.tokenId)}
                onFailure={e => console.log('Error! ', e)}
            />
        </div>
    )
}

export default ThirdPartySignIns;