import React from 'react'

// necesitamos el useHistory para navegar entre rutas
import { useHistory } from 'react-router-dom'

// vamos a usar el MakeStyles de Material UI para personalizar estilos 
import { makeStyles } from '@material-ui/core/styles'

// componentes de material ui
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, Grid, Link, Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
//import Link from '@material-ui/core/Link'

// iconos de material ui
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

// componentes propios 
import CopyRight from '../components/CopyRight'

// establecemos los estilos para los componentes de meterial ui
const useStyles = makeStyles(theme => ({

    // el contendor del formulario de login
    paper: {
        marginTop: theme.spacing(8),  // pone espacio de 8 en marginTop
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    // el formulario de login
    form: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    // estilo botón del submit
    submit: {
        margin: theme.spacing(3,0,2) // (top, bottom, sides)
    },
    // estilo para icono del login
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        marginTop: theme.spacing(1)
    }
}))


export default function LoginPage() {

    // obtener las clases de estilo para aplicarlas a los componentes
    const classes = useStyles();

    // obtenemos el history para poder navegar entre rutas
    let history = useHistory();

    // metodo submit del formulario 
    const submit = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/dashboard',
            state: {
                token: '123456789'
            }
        })

    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline></CssBaseline>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography component='h1'>
                    Acceso
                </Typography>
                {/* TODO: Formulario debe ser con formik */}
                <form onSubmit={submit} className={classes.form} noValidate>
                    <TextField required fullWidth autoFocus
                        id='email' label='Eamil' name='email' margin='normal'
                        autoComplete='email' variant='outlined'>
                    </TextField>
                    <TextField required fullWidth autoFocus type='password'
                        id='password' label='Password' name='password' margin='normal'
                        autoComplete='current-password' variant='outlined'>
                    </TextField>

                    {/* checkbox para recordar los datos del usuario */}
                    <FormControlLabel 
                        control={
                            <Checkbox value='remember' color='secondary'></Checkbox>
                        }
                        label='Recordar datos'>
                    </FormControlLabel>

                    {/* botón de submit */}
                    <Button type='submit' fullWidth variant='contained'
                        color='primary' className={classes.submit}
                    >
                        Acceder
                    </Button>

                    {/* he olvidado la contraseña | registro*/}
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Link href='#' variant='body2'>
                                He olvidado contraseña
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Link href='#' variant='body2'>
                                Registro nuevo usuario
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <CopyRight></CopyRight>
            </Box>

        </Container>
    )
}
