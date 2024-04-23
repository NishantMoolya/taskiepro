import { createSlice } from '@reduxjs/toolkit'
import { authenticate, changeAvatar, getUserProfile, userLogout } from '../api/userApi';

const initialUser = {
    name:"",
    email:"",
    avatar:"https://res.cloudinary.com/dandihqnb/image/upload/v1710670262/seatq70gmzy8p6imw1le.png",
    auth:false
}

const userSlice = createSlice({
    name:"user",
    initialState:initialUser,
    reducers:{
        login:(state,action) => {
            const { name,email } = action.payload;
            state.name = name;
            state.email = email;
            state.auth = true;
        }
    },
    extraReducers:(builder) => {
          builder.addCase(userLogout.fulfilled, (state, action) => {
            state.auth = action.payload.authenticate;
          });

          builder.addCase(getUserProfile.pending, (state,action) => {
            return {...state,auth:false}
          })
          .addCase(getUserProfile.fulfilled, (state,action) => {
            const { profile,authenticate } = action.payload;
            return {...state,...profile,auth:authenticate}
          })
          .addCase(getUserProfile.rejected, (state,action) => {
            return {...state,auth:false}
          })

          builder.addCase(changeAvatar.fulfilled, (state,action) => {
            const { avatar,authenticate } = action.payload;
            console.log(action.payload);
            if(avatar && authenticate) return {...state,avatar:avatar,auth:authenticate}
          })
      }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;