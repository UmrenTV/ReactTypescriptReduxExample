import React from "react";

const Register: React.FC = () => {
    return (
        <div>
            <h2>Register Page</h2>
            <form>
                <label>
                    Username
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
