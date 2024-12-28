"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SignIn = () => {
  const router = useRouter();

  // Hardcoded credentials
  const secretPasskey = "vault123";
  const hardcodedPin = "1234";

  const [passkey, setPasskey] = useState("");
  const [pin, setPin] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // Handle Passkey Input
  const handlePasskeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasskey(e.target.value);
  };

  // Handle PIN Input
  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers
    if (/^\d*$/.test(value) && value.length <= 4) {
      setPin(value);
      setIsSubmitEnabled(value.length === 4);
    }
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (passkey !== secretPasskey || pin !== hardcodedPin) {
      alert("Invalid passkey or PIN. Please try again.");
      return;
    }

    // Create session with expiration (5 minutes)
    const sessionExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes in milliseconds
    localStorage.setItem(
      "session",
      JSON.stringify({ loggedIn: true, expiry: sessionExpiry })
    );

    // Redirect to the profile page
    router.push("/profile");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 lg:px-0">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        {/* Image at the top */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/icons/ibvblue.png"
            alt="Vault Logo"
            className="h-24 w-auto"
            width={300}
            height={100}
          />
        </div>

        <h1 className="text-xl font-medium text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Secret Passkey */}
          <div>
            <label htmlFor="passkey" className="block text-sm font-medium text-gray-700">
              Secret Passkey
            </label>
            <Input
              id="passkey"
              type="text"
              placeholder="Enter your secret passkey"
              value={passkey}
              onChange={handlePasskeyChange}
              required
            />
          </div>

          {/* PIN Password */}
          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
              4-Digit PIN
            </label>
            <Input
              id="pin"
              type="password"
              placeholder="Enter your 4-digit PIN"
              value={pin}
              onChange={handlePinChange}
              maxLength={4}
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gold"
            disabled={!isSubmitEnabled}
          >
            Access Vault
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
