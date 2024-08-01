// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    id:null
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
    setId(state,action){
        state.id=action.payload
    },
    clearId(state){
        state.id=null
    }
  }
});

export const { setToken, clearToken,setId,clearId } = authSlice.actions;
export default authSlice.reducer;
