"use client";

import { useEffect, useState } from 'react';
import { APISDK, type IUser } from '@/libs/api';

export const useAuth = () => {
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    // Helper function to handle redirects
    const redirectToLogin = () => {
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
            window.location.href = '/login';
        }
    };

    // Effect to get token from localStorage (runs once)
    useEffect(() => {
        const token = window.localStorage.getItem('access_token');
        if (token) {
            setAccessToken(token);
        } else {
            setIsLoading(false);
            // Redirect if no token is found
            redirectToLogin();
        }
    }, []);
    
    // Effect to fetch user data when token is available
    useEffect(() => {
        if(!accessToken) {
            setIsLoading(false);
            return;
        }
        
        const fetchUser = async () => {
            try {
                // Check if token has quotes and remove them if needed
                const cleanToken = accessToken.startsWith('"') && accessToken.endsWith('"') 
                    ? accessToken.slice(1, -1) 
                    : accessToken;
                    
                const api = APISDK.getInstance(cleanToken);
                const userData = await api.getUser();
                
                setUser(userData);
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Failed to fetch user:', error);
                // Clear token on error
                window.localStorage.removeItem('access_token');
                setAccessToken(null);
                setIsAuthenticated(false);
                
                // Redirect on invalid token
                redirectToLogin();
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [accessToken]);

    return {
        user: user ?? null,
        isLoading,
        isAuthenticated
    };
};
