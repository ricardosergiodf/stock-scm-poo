import React, { useState } from 'react'
import { TextField, Button, Grid, Container, Typography } from '@mui/material'

const Login = () => {

    const [showLoginForm, setShowLoginForm] = useState(false)

    const handleSubmit = () =>{

    }

    const loginForm = () =>{
        return(
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={4}>
                        <TextField
                            name='name'
                            value={"A"}
                            onChange={handleSubmit}
                            type='text'
                            placeholder='Nome'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <TextField
                            name='name'
                            value={"B"}
                            onChange={handleSubmit}
                            type='text'
                            placeholder='Nome'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Button type='submit'></Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

  return (
    <Container>
        {loginForm === false ? (
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant='h5'>Criar conta</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h5'>Fazer login</Typography>
                </Grid>
            </Grid>
        ) : loginForm}
    </Container>
  )
}

export default Login