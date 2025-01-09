import React from 'react';
import axios from 'axios';

function App() {
    const fetchMessage = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/login');
            console.log(response.data);
            alert(response.data);
        } catch (error) {
            console.error('Error fetching the message:', error);
            alert('Error fetching the message. Check console for details.');
        }
    };

    return (
        <div>
            <h1>Decentrilized cyber security Mediation Platform ..</h1>
            <h2>coming soon...</h2>
            <button onClick={fetchMessage}>Fetch Message</button>
        </div>
    );
}

export default App;
