import { createSlice } from '@reduxjs/toolkit';

interface ISideNav {
  isToggled: boolean;
}
const initialState: ISideNav = {
  isToggled: true,
};

const sideNavSlice = createSlice({
  name: 'sidenav',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { toggle } = sideNavSlice.actions;

export default sideNavSlice.reducer;
