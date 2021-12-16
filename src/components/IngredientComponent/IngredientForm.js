import React from 'react';
import Button from "@mui/material/Button";
import {FormControl, Input, InputLabel, TextField} from "@material-ui/core";
import SaveIcon from '@mui/icons-material/Save';


function IngredientForm(props) {
    function handleSubmit() {
        return undefined
    }

    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="ingrName">Nouvel ingrédient</InputLabel>
            <Input
                id="ingrName"
                type='text'
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>

        // <form onSubmit={handleSubmit}>
        // <TextField
        //     aria-label="Nom du nouvel ingrédient"
        //     id="ingrName"
        //     name="ingrName"
        //     type="text"
        //     label='Nouvel ingrédient'
        //     size="small"
        //     variant="standard"
        // />
        //         <Button variant="outlined" color="success" size="small" startIcon={<SaveIcon />} type="submit">OK</Button>
        // </form>
    );
}

export default IngredientForm;