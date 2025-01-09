import React from 'react';

const Signup = () => {
    const handleSignup = (event) => {
        event.preventDefault();
        // Signup logic will be implemented here
        console.log('Signup function coming soon...');
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;