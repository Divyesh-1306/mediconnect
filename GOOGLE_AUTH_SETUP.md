# Fix Google OAuth 400 Error

## What I Fixed in the Code:
1. ✅ Added proper `redirectTo` URL in the Google sign-in function
2. ✅ Created `/auth/callback` route to handle Google OAuth redirect
3. ✅ Added error handling to show specific error messages

## What You Need to Configure:

### Step 1: Configure Supabase Authentication Settings

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: **werksfoxavxgdoedgzkt**
3. Go to **Authentication** → **URL Configuration**
4. Add these URLs:

   **Site URL:**
   ```
   http://localhost:3000
   ```

   **Redirect URLs (add both):**
   ```
   http://localhost:3000/auth/callback
   https://werksfoxavxgdoedgzkt.supabase.co/auth/v1/callback
   ```

### Step 2: Configure Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Go to **APIs & Services** → **Credentials**
4. Find your OAuth 2.0 Client ID or create a new one
5. Add these **Authorized redirect URIs**:

   ```
   https://werksfoxavxgdoedgzkt.supabase.co/auth/v1/callback
   http://localhost:3000/auth/callback
   ```

### Step 3: Enable Google Provider in Supabase

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Find **Google** and click to enable it
3. Enter your **Client ID** and **Client Secret** from Google Cloud Console
4. Click **Save**

### Step 4: Restart Your Dev Server

```powershell
# Stop the current server (Ctrl+C)
# Then restart:
cd "c:\Users\Divyesh N\Downloads\cura\mediconnect"
npm run dev
```

## Common Issues:

- **400 Error**: Redirect URI mismatch → Check Steps 1 & 2 above
- **Origin Mismatch**: Make sure both Google Console and Supabase have the same URLs
- **localhost vs 127.0.0.1**: Use `localhost:3000` consistently

## Testing:
1. Go to http://localhost:3000/auth/login
2. Click "Continue with Google"
3. You should see Google's login popup
4. After signing in, you'll be redirected back to your app

## Need Help?
Check the browser console (F12) for detailed error messages.
