import  {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_END_POINT} from '../../common/utils/utils';

const initialstate = {
    players : [],
    playersStatus : "idle",
    playersFetchLoading : false, 
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
          state.playersFetchLoading = true 
        },
        [fetchPlayersData.fulfilled] : (state,action) => {
           state.playersStatus = "success"
           state.playersFetchLoading = false
           state.players = action.payload
         
        },
        [fetchPlayersData.rejected] : (state) => {
            state.playersStatus = "error"
            state.playersFetchLoading = false
        }

    }
})

export default playerSlice.reducer;