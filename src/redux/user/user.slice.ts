import { LocalStorage } from '@/lib/utils';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  reference: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  gender: string;
  group: string;
  role: string;
  avatar_url: string;
  login_type: string;
  is_email_verified: boolean;
  forgot_password_token: string | null;
  forgot_password_expiry: string | null;
  created_at: string;
  updated_at: string;
}

interface AuthData {
  user: User;
  accessToken: string;
  refreshToken: string;
}
// const initialState = {
//   currentUser: {
//     name: 'khaled',
//     password: '844884',
//   } as AuthData | null,
//   loading: false,
//   error: false,
// };
const initialState = {
  currentUser: null as AuthData | null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action: PayloadAction<AuthData>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action: PayloadAction<AuthData>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateUserFailure: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    deleteUserFailure: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      LocalStorage.remove('token');
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
