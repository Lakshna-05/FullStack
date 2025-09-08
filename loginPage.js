import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      {/* Add authentication logic */}
    </div>
  );
};

export default LoginPage;
