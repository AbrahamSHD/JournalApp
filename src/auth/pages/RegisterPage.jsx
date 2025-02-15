import { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks'

const formData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidations = {
    email: [ ( value ) => value.includes('@'), 'The email must contain an @.' ],
    password: [ ( value ) => value.length >= 10, 'The password must have more than 10 letters.' ],
    displayName: [ ( value ) => value.length >= 3, 'Name is required.' ]
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

    const { 
      formState, displayName, email, password, onInputChange,
      isFormValid, displayNameValid, emailValid, passwordValid, 
    } = useForm( formData, formValidations );

    const onSubmit = ( event ) => {
      event.preventDefault();
      setFormSubmitted(true);

      if ( !isFormValid ) return;

      dispatch( startCreatingUserWithEmailAndPassword(formState) );
    }

    return (
        <AuthLayout title='Register' >
            <form 
                onSubmit={ onSubmit }
                className="animate__animated animate__fadeIn animate__faster"
            >
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField 
                            label="User Name"
                            type="name" 
                            placeholder="Pepe pecas"
                            fullWidth
                            name='displayName'
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField 
                            label="Email"
                            type="email"
                            placeholder="email1234@gmail.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField 
                            label="Password"
                            type="password"
                            placeholder="Password"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid } 
                        > 
                        </TextField>
                    </Grid>
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }} >
                        <Grid 
                            item 
                            xs={ 12 }
                            display={ !!errorMessage ? '' : 'none' }
                        >
                        <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>

                        <Grid item xs={ 12 } >
                            <Button 
                                disabled={ isCheckingAuthentication }
                                type='submit' 
                                variant="contained" 
                                fullWidth
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end' >
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink } color="inherit" to='/auth/login' >
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>

    )
}

