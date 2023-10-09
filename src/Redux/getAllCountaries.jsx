import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getAllCountaries = createAsyncThunk('getAllCountaries', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = response.json();
        return data

    }
    catch (error) {
        return rejectWithValue(error)
    }
})

export const getCountery = createAsyncThunk('getCountery', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)
        const data = response.json();
        return data

    }
    catch (error) {
        return rejectWithValue(error)
    }
})
export const getSingleCountary = createAsyncThunk('getSingleCountary', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
        const data = response.json();
        return data

    }
    catch (error) {
        return rejectWithValue(error)
    }
})
export const getCountariesByRegion = createAsyncThunk('getCountariesByRegion', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${id}`)
        const data = response.json();
        return data

    }
    catch (error) {
        return rejectWithValue(error)
    }
})
export const getSearchCountary = createAsyncThunk('getSearchCountary', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)
        const data = response.json();
        return data

    }
    catch (error) {
        return rejectWithValue(error)
    }
})
const countariesSlice = createSlice({
    name: "countaries",
    initialState: {
        countaries: [],
        loading: true,
        mode: true,
        obje: [],
        flag: '',
        name1: '',
        nativeName: '',
        languages: '',
        currncies: '',
        borders: [],
      
        error: '',
        arrRegion:[],
        search:[]
    },
    reducers: {
        changeMode: (state) => {
            if (state.mode === true) {
                state.mode = false

            }
            else {
                state.mode = true

            }

        }

    },
    extraReducers: (builder) => {
        builder.addCase(getAllCountaries.pending, (state, action) => {

            state.loading = false
        })
        builder.addCase(getAllCountaries.fulfilled, (state, action) => {
            state.loading = true
            state.countaries = action.payload
        })
        builder.addCase(getAllCountaries.rejected, (state, action) => {
            state.loading = true
        })
        builder.addCase(getCountery.pending, (state, action) => {
            console.log(action);
            state.loading = false
            state.error = false
        })
        builder.addCase(getCountery.fulfilled, (state, action) => {
            state.loading = true
            
            if (action.payload[0] !== undefined) {
                state.obje = action.payload[0]

                state.flag = action.payload[0].flags.png

                state.name1 = action.payload[0].name.common

                state.languages = Object.values(action.payload[0].languages).filter((e,idx)=>{
                    return idx<3

                }).join(',')
                state.currncies = Object.values(action.payload[0].currencies).map((e) => {
                    return e.name
                })
                if (action.payload[0].borders) {
                    state.borders = action.payload[0].borders.filter((e,idx)=>{
                        return idx<3
                    })
                }
                else{
                    state.borders=[]
                }
               

            }
            else{
                state.obje=null
            }

        })
        builder.addCase(getCountery.rejected, (state, action) => {
            console.log(action);
            state.loading = true
           
            
        })
        builder.addCase(getSingleCountary.pending, (state, action) => {
            console.log(action);
            state.loading = false
            state.error = false
        })
        builder.addCase(getSingleCountary.fulfilled, (state, action) => {
            state.loading = true
            
            if (action.payload[0] !== undefined) {
                state.obje = action.payload[0]

                state.flag = action.payload[0].flags.png

                state.name1 = action.payload[0].name.common

                state.languages = Object.values(action.payload[0].languages).filter((e,idx)=>{
                    return idx<3

                }).join(',')
                state.currncies = Object.values(action.payload[0].currencies).map((e) => {
                    return e.name
                })
                if (action.payload[0].borders) {
                    state.borders = action.payload[0].borders.filter((e,idx)=>{
                        return idx<3
                    })
                }
                else{
                    state.borders=[]
                }
               



            }
            else{
                state.obje=null
            }

        })
        builder.addCase(getSingleCountary.rejected, (state, action) => {
            console.log(action);
            state.loading = true
           
            
        })
        builder.addCase(getCountariesByRegion.pending, (state, action) => {
            console.log(action);
            state.loading = false
        })
        builder.addCase(getCountariesByRegion.fulfilled, (state, action) => {
            state.loading = true
           state.arrRegion=action.payload
           state.countaries=[]
           console.log(action);
        })
        builder.addCase(getCountariesByRegion.rejected, (state, action) => {
            console.log(action);
            state.loading = true
        })
        builder.addCase(getSearchCountary.pending, (state, action) => {
            console.log(action);
            state.loading = false
        })
        builder.addCase(getSearchCountary.fulfilled, (state, action) => {
            if (action.payload!==undefined) {
                state.loading = true
                state.search=action.payload
                state.countaries=[]
                state.arrRegion=[]
                console.log(action);
            }
            else{
                
                state.error=`Data Not Found 404`
            }
           
        })
        builder.addCase(getSearchCountary.rejected, (state, action) => {
            console.log(action);
            state.loading = true
           
        })


    }
})
export const data = countariesSlice.reducer
export const { changeMode } = countariesSlice.actions