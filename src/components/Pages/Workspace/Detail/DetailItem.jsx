import { Collapse, Divider, ListItemText, 
    List, ListItemAvatar,Avatar, ListItemButton } from "@mui/material";
import React, { useState } from "react";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkspaceService from "../../../../services/workspaceService";
import { detailMessage } from "../../../../store/actions/message";
import { useDispatch } from "react-redux";
import EtapaItem from "./EtapaItem";

const DetailItem = ({ item }) => {
const [isOpen, setIsOpen] = useState(false);
const [detalles, setDetalles] = useState([]);

const dispatch = useDispatch();

const handleIsOpen = () => {
    setIsOpen(!isOpen);

    if(!isOpen)
    {
        obtenerDetalle()
    }
};

const obtenerDetalle = () => {
    
    if(item.ModuloEtapas && item.ModuloEtapas.length > 0)
    {
        WorkspaceService.obtenerModulo({data:item.ModuloEtapas})
            .then(res => {
                setDetalles(res);
            })
            .catch(error => {
                dispatch(detailMessage({detailMessage:error.response,color:'error',showMessage:true}))
            })
    }
}

return (
<List disablePadding>
   <ListItemButton sx={{ pl: 8 }} key={item.nombre} button onClick={handleIsOpen}>
       <ListItemAvatar>
           <Avatar sx={{ backgroundColor:'#357a38'}}>
               <AutoStoriesIcon />
           </Avatar>
       </ListItemAvatar>
       <ListItemText primary={item.nombre} secondary={item.Usuario ? `Usuario asignado: ${item.Usuario.nombre}` : ''}/>
       {isOpen ? <ExpandLess /> : <ExpandMore />}
   </ListItemButton>
   <Divider component="li" />
   <Collapse in={isOpen} timeout="auto" unmountOnExit>
       <List disablePadding>
           {detalles && detalles.map((detalle) => (
                <EtapaItem key={detalle.Etapa.nombre} item={detalle}/>
           ))}
       </List>
   </Collapse>
</List>
);
};

export default DetailItem;