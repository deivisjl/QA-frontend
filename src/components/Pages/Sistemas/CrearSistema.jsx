import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { Typography, FormHelperText } from '@mui/material';
import Link from '@mui/material/Link';
import { NavLink } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux'
import { detailMessage } from '../../../store/actions/message';
import {useSelector} from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import SistemaService from '../../../services/sistemaService';
import ProyectoService from '../../../services/proyectoService';

export default function CrearSistemas(){

  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.authReducer.user)

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" component={NavLink} to='/'>
      Inicio
    </Link>,
    <Link underline="hover" key="2" color="inherit" component={NavLink} to='/Sistemas/Listar'>
      Sistemas
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Nuevo registro
    </Typography>,
  ];

  const [nombre, setNombre] = useState("");
  const [proyectos, setProyectos] = useState([]);
  const [proyecto, setProyecto] = useState('');

  useEffect(()=>{
    listarRegistros()
  },[])

  const listarRegistros = ()=>{
    ProyectoService.listar()
    .then(res => {
      setProyectos(res)
    })
    .catch(error => {
      dispatch(detailMessage({detailMessage:error.response,color:'error',showMessage:true}))
    })
  }

  const handleChange = (event) => {
    setProyecto(event.target.value);
  };

  const [errorNombre, setErrorNombre] = useState({
    error:false,
    message:"",
  });

  const [errorProyecto, setErrorProyecto] = useState({
    error:false,
    message:"",
  });

  const validateNombre = (nombre) => {
    return nombre != ''
  }

  const validateProyecto = (proyecto) => {
    return proyecto != undefined && proyecto > 0
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(validateNombre(nombre))
    {
        setErrorNombre({
            error:false,
            message:"",
          })
    }
    else
    {
        setErrorNombre({
            error:true,
            message:"El nombre es requerido",
          })
          return;
    }

    if(validateProyecto(proyecto))
        {
            setErrorProyecto({
                error:false,
                message:"",
              })
        }
        else
        {
            setErrorProyecto({
                error:true,
                message:"El nombre del proyecto es requerido",
              })
              return;
        }
    
    SistemaService.registrar({nombre,proyecto,usuario:currentUser.id})
        .then(res => {
          dispatch(detailMessage({detailMessage:res.message,color:'success',showMessage:true}))
          navigateTo('/Sistemas/Listar')
        })
        .catch(error => {
          dispatch(detailMessage({detailMessage:error.response,color:'error',showMessage:true}))
        })
  }
  return(
      <>
      <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb">
          {breadcrumbs}
      </Breadcrumbs>
          <Grid container>
              <Grid size={{ xs: 12, sm: 8, md: 6 }} offset={{ xs:0, sm: 2, md: 3 }}>
              <Card sx={{ minWidth: 275 }}>
                <Box component="form" onSubmit={handleSubmit}>
                  <CardContent>
                    <Typography sx={{ textAlign:'center', pb:2, color: 'text.secondary' }}>
                        Registrar nuevo sistema
                    </Typography>
                    <TextField id="nombre" label="Nombre" 
                      type="text" variant="outlined" 
                      error={errorNombre.error}
                      helperText={errorNombre.message}
                      value={nombre}
                      autoComplete='off'
                      onChange={(e)=> setNombre(e.target.value)}
                      fullWidth sx={{pb:2}}>
                    </TextField>
                    <FormControl fullWidth error={errorProyecto.error}>
                        <InputLabel id="select-proyecto-id">Proyecto</InputLabel>
                        <Select
                        labelId="select-proyecto-id"
                        id="select-proyecto"
                        value={proyecto}
                        label="Proyecto"
                        onChange={handleChange}
                        >
                        {proyectos && proyectos.map(function(option){
                            return (<MenuItem key={option.id} value={option.id}>{option.nombre}</MenuItem>)
                        })}
                        </Select>
                        {errorProyecto ? (<FormHelperText error>{errorProyecto.message}</FormHelperText>) : null}
                    </FormControl>
                  </CardContent>
                  <CardActions> 
                    <Box sx={{ mx: 'auto', width: 'auto' }}>
                      <Button type="submit" variant="contained">Guardar</Button>
                    </Box>
                  </CardActions>
                </Box>  
              </Card>
              </Grid>
          </Grid>
      </>
  )
}