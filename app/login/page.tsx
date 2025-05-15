"use client";

import React, { useState } from 'react';
import { APISDK } from '@/libs/api';
import { useRouter } from 'next/navigation';

// Define the expected response type
interface AuthResponse {
    message: string;
    access_token: string;
}

export default function Login() {
    const router = useRouter();
    const [countryCode, setCountryCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!phoneNumber) {
            setError("Please enter your phone number");
            return;
        }
        
        try {
            setIsLoading(true);
            setError('');
            setSuccess('');
            const api = APISDK.getInstance();
            const response = await api.loginRequest(countryCode, phoneNumber);
            
            setIsOtpSent(true);
            setSuccess(response.message || "OTP sent successfully");
        } catch (error) {
            console.error('Failed to send OTP:', error);
            setError("Failed to send OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!otp) {
            setError("Please enter the OTP");
            return;
        }
        
        try {
            setIsLoading(true);
            setError('');
            setSuccess('');
            const api = APISDK.getInstance();
            
            try {
                // Try to verify the OTP with the API
                const response = await api.verifyAccountAccess(countryCode, phoneNumber, otp) as AuthResponse;
                
                // Check if the API indicates an invalid OTP
                if (response.message?.toLowerCase().includes("invalid otp")) {
                    throw new Error("Invalid OTP. Please check and try again.");
                }
                
                // Extract access_token from response
                const accessToken = response.access_token;
                
                if (!accessToken) {
                    throw new Error("Authentication failed: No access token received from server");
                }
                
                // Store the token in localStorage
                localStorage.setItem('access_token', accessToken);
                setSuccess("Login successful");
                
                // Initialize the API with the token
                APISDK.getInstance(accessToken);
                
                // Redirect to home page after successful login
                setTimeout(() => {
                    router.push('/');
                }, 1000); // Small delay to show success message
            } catch (verificationError) {
                throw verificationError;
            }
        } catch (error: unknown) {
            console.error('Failed to verify OTP:', error);
            
            // Display the specific error message
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Failed to verify OTP. Please try again.");
            }
            
            // Clear OTP field on error
            setOtp('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <div className="mb-8 text-center">
                    <div className="flex justify-center mb-4">
                        <img src="/logo1.svg" alt="JEEVIC Logo" className="h-10" />
                    </div>
                    <h1 className="text-2xl font-medium text-gray-900">Admin Dashboard</h1>
                    <p className="text-gray-500 mt-2 text-sm">
                        Enter your credentials to access the dashboard
                    </p>
                </div>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                        {error}
                    </div>
                )}
                
                {success && (
                    <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
                        {success}
                    </div>
                )}
                
                {!isOtpSent ? (
                    <form onSubmit={handleSendOtp} className="space-y-4">
                        <div>
                            <label 
                                htmlFor="phone" 
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Phone Number
                            </label>
                            <div className="flex space-x-2">
                                <select
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className="w-28 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 text-black focus:ring-orange-500 text-sm"
                                >
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+61">+61</option>
                                    <option value="+86">+86</option>
                                </select>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="flex-1 rounded-md border text-black placeholder:text-gray-400 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors text-sm font-medium" 
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending OTP..." : "Send OTP"}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                        <div>
                            <label 
                                htmlFor="otp" 
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                OTP
                            </label>
                            <input
                                id="otp"
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={6}
                                className="w-full text-center text-xl placeholder:text-gray-400 text-black tracking-widest rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                            <p className="text-sm text-gray-500 text-center mt-2">
                                OTP sent to {countryCode} {phoneNumber}
                            </p>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors text-sm font-medium" 
                            disabled={isLoading}
                        >
                            {isLoading ? "Verifying..." : "Verify OTP"}
                        </button>
                        
                        <button 
                            type="button"
                            className="w-full text-orange-500 hover:text-orange-600 underline py-2 text-sm"
                            onClick={() => {
                                setIsOtpSent(false);
                                setError('');
                                setSuccess('');
                            }}
                            disabled={isLoading}
                        >
                            Change Phone Number
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}