import { signInWithGooglePopup } from '../../utils/firebase/firebase';
import SignUp from '../../components/sign-up/sign-up';

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return(
    <div>
      <h1>Sight IN</h1>
      <button onClick={logGoogleUser}>Войти</button>
      <SignUp />
    </div>
  );
}

export default SignIn
