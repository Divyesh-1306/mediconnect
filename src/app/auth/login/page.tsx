'use client';
import { supabase } from '@/lib/supabaseClient';

export default function Login() {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    
    if (error) {
      console.error('Google sign-in error:', error);
      alert(`Error: ${error.message}`);
    }
  }

  async function signInWithEmail(e: any) {
    e.preventDefault();
    const email = e.target.email.value;
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert('Magic link sent! Check your email.');
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-xl w-80">
        <h1 className="text-2xl font-bold text-center mb-6">MediConnect Login</h1>

        <button
          onClick={signInWithGoogle}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mb-4"
        >
          Continue with Google
        </button>

        <form onSubmit={signInWithEmail} className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border border-gray-300 p-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg"
          >
            Sign in with Email
          </button>
        </form>
      </div>
    </div>
  );
}
