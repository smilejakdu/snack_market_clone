import React, { useState, useEffect } from "react";

const Signup = () => {
  return (
    <div>
      <input type="text" placeholder="name" name="name" required />
      <input type="text" placeholder="id" name="id" required />
      <input type="password" placeholder="password" name="password" required />
      <input
        type="password"
        placeholder="repassword"
        name="repassword"
        required
      />
    </div>
  );
};

export default Signup;
