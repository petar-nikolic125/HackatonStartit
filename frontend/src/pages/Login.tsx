import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate       = useNavigate();
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]       = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/chat');
        } catch {
            setError('Failed to login');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 max-w-sm mx-auto space-y-4">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                className="w-full rounded p-2 text-black"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full rounded p-2 text-black"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-primary w-full">Login</button>
        </form>
    );
}
