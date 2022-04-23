import { signInWithGooglePopup } from '../../utils/firebase/firebase';

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return(
    <div>
      <h1>Sight IN</h1>
      <button onClick={logGoogleUser}>Войти</button>
    </div>
  );
}

export default SignIn
