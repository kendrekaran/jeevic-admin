'use client';

import { IUser } from '@/libs/api';
import { createContext } from 'react';

export interface IAuthContext {
    user: IUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);