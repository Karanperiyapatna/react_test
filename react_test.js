import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePageContent />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<UserDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
        </nav>
    );
}

function HomePageContent() {
    return <h2>Welcome to the Homepage</h2>;
}

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        localStorage.setItem('user', JSON.stringify({ email, password }));
        alert('Signup successful!');
        navigate('/login');
    };

    return (
        <div>
            <h2>Signup</h2>
            <input type="name" placeholder="Name" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="address" placeholder="Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
}

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem('loggedIn', 'true');
            alert('Login successful!');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

function UserDashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        navigate('/login');
    };

    return (
        <div>
            <h2>User Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default App;
