import React, { useState } from 'react'
import { TextField, Button, Grid, Container, Typography, InputAdornment, IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { makeStyles } from '@material-ui/styles';
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import TelefoneBrasileiroInput from "react-telefone-brasileiro";

const useStyles = makeStyles({
  container:{
    marginTop: '30px',
  },

  input:{
    width:"100%"
  }
})

const Cadastro = () => {
  const classes = useStyles();

  const [showPW, setShowPW] = useState(false)
  const [showConfirmPW, setShowConfirmPW] = useState(false)
  const [wrongConfirmPW, setWrongConfirmPW] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    birthDate: "",
    cpf: "",
    companyName: "",
    companyAddress: "",
    companyPhoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const passwordConfirmationError = "Os campos Senha e Confirmar Senha precisam ser iguais"

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value

    }))

  }

  const handleShowPW = () =>{
    setShowPW(!showPW)
  }

  const handleShowConfirmPW = () =>{
    setShowConfirmPW(!showConfirmPW)
  }

  const validateEmail = (email) =>{
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(data.password !== data.confirmPassword){
      setWrongConfirmPW(true)
    } else {
      setWrongConfirmPW(false)
    }
    if(!validateEmail(data.email)){
      setEmailError(true)
    } else {
      setEmailError(false)
    }

    console.log(data)
  }

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item justifyItems={'center'}>
          <Typography variant='h2' align='center'>Cadastro de Clientes</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid 
          container 
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='name'
              label="Nome"
              InputLabelProps={{ shrink: true }}
              value={data.name}
              onChange={handleChange}
              type='text'
              placeholder='Digite seu nome'
              variant='outlined'
              required
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='phoneNumber'
              label='Telefone'
              InputLabelProps={{ shrink: true }}
              value={data.phoneNumber}
              onChange={handleChange}
              type='phone'
              placeholder='Digite seu numero de telefone'
              variant='outlined'
              InputProps={{
                inputComponent: TelefoneBrasileiroInput,
                value: data.phoneNumber,
                onChange: handleChange,
                temDDD: true
              }}
              required
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='email'
              label='Email'
              InputLabelProps={{ shrink: true }}
              value={data.email}
              onChange={handleChange}
              type='email'
              placeholder='Digite seu email'
              variant='outlined'
              required
              error={emailError}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='address'
              label='Endereço'
              InputLabelProps={{ shrink: true }}
              value={data.address}
              onChange={handleChange}
              type='text'
              placeholder='Digite seu endereço'
              variant='outlined'
              required
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='birthDate'
              label='Data de nascimento'
              InputLabelProps={{ shrink: true }}
              value={data.birthDate}
              onChange={handleChange}
              type='date'
              placeholder='Digite sua data de nascimento'
              variant='outlined'
              required
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='cpf'
              label='CPF'
              InputLabelProps={{ shrink: true }}
              value={data.cpf}
              onChange={handleChange}
              type='text'
              placeholder='Digite seu CPF'
              variant='outlined'
              required
              InputProps={{
                inputComponent: CpfCnpj,
                value: data.cpf,
                onChange: handleChange,
              }}
              inputProps={{maxLength: 14}}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='companyName'
              label='Nome da Empresa'
              InputLabelProps={{ shrink: true }}
              value={data.companyName}
              onChange={handleChange}
              type='text'
              placeholder='Digite o nome da sua empresa'
              variant='outlined'
              required
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='companyAddress'
              label='Endereço da empresa'
              InputLabelProps={{ shrink: true }}
              value={data.companyAddress}
              onChange={handleChange}
              type='text'
              placeholder='Digite o endereço da sua empresa'
              variant='outlined'
              required
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='companyPhoneNumber'
              label='Telefone da Empresa'
              InputLabelProps={{ shrink: true }}
              value={data.companyPhoneNumber}
              onChange={handleChange}
              type='text'
              placeholder='Digite o telefone da sua empresa'
              variant='outlined'
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='password'
              label='Senha'
              InputLabelProps={{ shrink: true }}
              value={data.password}
              onChange={handleChange}
              type={showPW? 'text' : 'password'}
              placeholder='Digite a senha'
              variant='outlined'
              required
              InputProps={{
                endAdornment: 
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPW}>
                    {showPW ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                  </IconButton>
                </InputAdornment>
              }}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.input}
              name='confirmPassword'
              label='Confirmar senha'
              InputLabelProps={{ shrink: true }}
              value={data.confirmPassword}
              onChange={handleChange}
              type={showConfirmPW? 'text' : 'password'}
              placeholder='Confirme a senha'
              variant='outlined'
              InputProps={{
                endAdornment: 
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowConfirmPW}>
                    {showConfirmPW ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                  </IconButton>
                </InputAdornment>
              }}
              helperText={wrongConfirmPW ? passwordConfirmationError : ""}
              error={wrongConfirmPW}
            />
          </Grid>
          <Grid item md={12}>
            <Button type="submit" variant="contained">Confirmar</Button>
          </Grid>
        </Grid>
      </form>

      
    </Container>
  )
}

export default Cadastro