import { signInWithGooglePopup } from '../../utils/firebase/firebase';
import SignUp from '../../components/sign-up/sign-up';
import SignIn from '../../components/sign-in/sign-in';
import './autorisation.scss';


function Autorisation() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return(
    <div className='autorisation-container'>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Autorisation
