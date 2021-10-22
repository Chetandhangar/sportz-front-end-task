import  {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_END_POINT} from '../../common/utils/utils';

const initialstate = {
    players : [],
    playersStatus : "idle",

    playersFetchError : false,
    playersFetchErrorStatus : "idle" 
}




export const fetchPlayersData = createAsyncThunk(
    'player/fetchPlayerData',
    async() => {
        try{
            const  response = await axios.get(API_END_POINT);
            console.log(response.data);
            return response.data.playerList;

        }catch(err){
            console.log(err)
        }
    }
)

const playerSlice = createSlice({
    name : "player",
    initialState : initialstate,
    reducers : {},
    extraReducers : {
        [fetchPlayersData.pending] : (state) => {
          state.playersStatus = "loading"
        },
        [fetchPlayersData.fulfilled] : (state,action) => {
           state.playersStatus = "success"
           state.players = action.payload
         
        },
        [fetchPlayersData.rejected] : (state) => {
            state.playersStatus = "error"
        }

    }
})

export default playerSlice.reducer;