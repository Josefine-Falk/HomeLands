import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from './AuthProvider';
import { myCostumFetch } from '../../helpers/fetch';

export const Login = () => {
  const { loginData, setLoginData } = useContext(AuthContext)
  const onSubmit = (data) => sendLoginRequest(data)
  const { register, handleSubmit, formState: { errors }} = useForm()
  const [message, setMessage] = useState('');

  const sendLoginRequest = async (data, e) => {
      const formdata = new FormData()
      formdata.append('username', data.username)
      formdata.append('password', data.password)

      const options = {
          method: 'POST',
          body: formdata
      }

      const url = "https://api.mediehuset.net/token"
      const result = await myCostumFetch(url, options)   
      //console.log(result);
      handleSessionData(result)
  }

  const handleSessionData = (res) => {
      if(!res.message) {
          setLoginData(res)
          sessionStorage.setItem('token', JSON.stringify(res))
      } else {
          setMessage('Fandt ingen match på brugernavn eller adgangskode')
      }
  }    

  const logOut = () => {
      setLoginData([])
      sessionStorage.removeItem('token')
      setMessage('Du er nu logget ud')

      let timer = setTimeout(() => {
          setMessage('Indtast login oplysninger')
          clearTimeout(timer)
      }, 3500)
  }    

  return (
    <>
      <h1>Login</h1>
          <p>{message}</p>
          {!loginData && !loginData.username ?  
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <input type="text" id="username" name="username" {...register("username", { required: true })} placeholder="Brugernavn" />
                          {errors.username && <span>Udfyld brugernavn</span> }
                  </div>
                  <div>
                      <input type="password" id="password" name="password" {...register("password", { required: true })} placeholder="Adgangskode" />
                          {errors.password && <span>Udfyld adgangskode</span> }
                  </div>
                  <div>
                      <button type="reset">Annuller</button>
                      <button type="submit">Send</button>
                  </div>
              </form> 
          :
          <form>
              <p>Du er logget ind som {loginData.username}</p>
              <button onClick={() => {logOut()}}>Log ud</button>
          </form>
          }       
      </>
  )
}
