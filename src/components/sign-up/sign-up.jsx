import {useState} from 'react';
import FormInput from '../../components/form-input/form-input';
import './sign-up.scss';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}



function SignUp() {

  const[formFields, setFormFields] = useState(defaultFormFields);
  const {name, email, password, confirmPassword} = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]:value})
  }

  return(
    <div className='sign-up-container'>
      <h2> У Вас есть аккаунт ?</h2>
      <span>Регистрация</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Имя'
                   type='text'
                   required
                   onChange={handleChange}
                   name='name'
                   value={name}/>

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

        <FormInput label='Подтвердить пароль'
                   type='password'
                   required
                   onChange={handleChange}
                   name='confirmPassword'
                   value={confirmPassword}/>

        <button type='submit'>Регистрация</button>
      </form>
    </div>
  );
}

export default SignUp;
