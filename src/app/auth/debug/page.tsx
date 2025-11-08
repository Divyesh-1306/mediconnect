'use client';
import { useEffect, useState } from 'react';

export default function AuthDebug() {
  const [config, setConfig] = useState({
    supabaseUrl: '',
    hasAnonKey: false,
    currentUrl: '',
  });

  useEffect(() => {
    setConfig({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT SET',
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      currentUrl: window.location.origin,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Auth Configuration Debug</h1>
        
        <div className="space-y-3">
          <div>
            <strong>Supabase URL:</strong>
            <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
              {config.supabaseUrl}
            </code>
          </div>
          
          <div>
            <strong>Anon Key Present:</strong>
            <span className={`ml-2 ${config.hasAnonKey ? 'text-green-600' : 'text-red-600'}`}>
              {config.hasAnonKey ? '✓ Yes' : '✗ No'}
            </span>
          </div>
          
          <div>
            <strong>Current Origin:</strong>
            <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
              {config.currentUrl}
            </code>
          </div>
          
          <div>
            <strong>Expected Callback URL:</strong>
            <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
              {config.currentUrl}/auth/callback
            </code>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <h2 className="font-semibold mb-2">⚠️ Configuration Checklist:</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Supabase URL should match your project</li>
            <li>Anon Key should be present</li>
            <li>Add <code>{config.currentUrl}/auth/callback</code> to Google Console</li>
            <li>Add same URL to Supabase Auth settings</li>
          </ol>
        </div>

        <div className="mt-4">
          <a 
            href="/auth/login"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
