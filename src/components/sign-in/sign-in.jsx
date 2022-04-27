import {useState, useContext} from 'react';
import FormInput from '../../components/form-input/form-input';
import Button from '../../components/button/button';
import './sign-in.scss';
import {UserContext} from '../../contexts/user';

const defaultFormFields = {
  email: '',
  password: '',
}

function SignIn() {

  const[formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let user = {name: 'name'};

    setCurrentUser(user);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]:value})
  }

  return(
    <div className='sign-up-container'>
      <h2> Есть аккаунт </h2>
      <form onSubmit={handleSubmit}>

        <FormInput label='Email'
                   type='email'
                   required
                   onChange={handleChange}
                   name='email'
                   value={email}/>

        <FormInput label='Пароль'
                   type='password'
                   required
                   onChange={handleChange}
                   name='password'
                   value={password}/>

        <div className='buttons-container'>
          <Button type='submit'>Войти</Button>
          <Button buttonType='google' type='submit'> Google</Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
