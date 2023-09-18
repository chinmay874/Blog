import React from 'react'

export const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <div className="username">
                  <label className="form__label" for="Username">Username</label>
                  <input className="form__input" type="text" id="Username" placeholder="User Name"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input  type="text" name="" id="password"  className="form__input"placeholder="password"/>
              </div>
              <div class="footer">
              <button type="Login" class="btn">Login</button>
          </div>
          <h5>Not Registered? <a href="Signup">Register</a></h5>
    </div>
    
  )
}
