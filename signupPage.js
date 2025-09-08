import React from 'react';

const SignupPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      {/* Add registration logic */}
    </div>
  );
};

export default SignupPage;
