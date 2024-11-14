'use client';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/src/app/auth/firebase/config';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) return; // Prevent submission if fields are empty

    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', true);
        // Redirect to the community page on successful login
        router.push('/community');
      }
    } catch (e) {
      console.error(e);
    } finally {
      // Clear the input fields
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm transition-transform duration-300 ease-in-out transform hover:scale-105 border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">Sign In</h1>
        {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          aria-label="Email"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          aria-label="Password"
        />
        
        <button
          onClick={handleSignIn}
          disabled={loading}
          className={`w-full p-3 rounded-lg text-white transition duration-300 ease-in-out ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-500'}`}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
