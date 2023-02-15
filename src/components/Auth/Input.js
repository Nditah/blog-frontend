import React from 'react'
import { Grid, InputAdornment, IconButton, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Input = (props) => {
    const { autoFocus, name, label, type, isHalf } = props
    const { handleChange, handleShowPassword } = props

  return (
    <div>
        <Grid item xs={12} sm={isHalf ? 6 : 12 }>
            <TextField
            name={name}
            onChange={handleChange}
            variant='outline'
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' && {
                endAdornment: (
                    <InputAdornment position='end' >
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
             />
        </Grid>
    </div>
  )
}

export default Input