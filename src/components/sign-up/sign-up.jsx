import {useState} from 'react';

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
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <label>Имя</label>
        <input type='text' required onChange={handleChange} name='name' value={name}></input>
        <label>Email</label>
        <input type='email' required onChange={handleChange} name='email' value={email}></input>
        <label>Пароль</label>
        <input type='password' required onChange={handleChange} name='password' value={password}></input>
        <label>Подтвердить пароль</label>
        <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}></input>
        <button type='submit'>Регистрация</button>
      </form>
    </div>
  );
}

export default SignUp;
