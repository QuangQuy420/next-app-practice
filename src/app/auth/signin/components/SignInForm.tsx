"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const SignInForm = () => {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const loadProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    loadProviders();
  }, []);

  if (!providers) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign in to your account
        </h1>
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name} className="mb-4">
            <button
              onClick={() => signIn(provider.id)}
              className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignInForm;
