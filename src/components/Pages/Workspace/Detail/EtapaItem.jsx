import { Collapse, Divider, ListItemText, 
    List, ListItemAvatar,Avatar, ListItemButton, IconButton } from "@mui/material";
import React, { useState } from "react";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskItem from "./TaskItem";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
    'Agregar tarea',
  ];
  
const ITEM_HEIGHT = 48;

const EtapaItem = ({ item }) => {
const [isOpen, setIsOpen] = useState(false);
const [anchorEl, setAnchorEl] = React.useState(null);

const open = Boolean(anchorEl);

const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};

const handleClose = () => {
setAnchorEl(null);
};

const handleIsOpen = () => {
    setIsOpen(!isOpen);
};

const handleOnClick = (e) => {
    e.preventDefault()
    console.log('Holamundo')
}

return (
<List disablePadding>
   <ListItemButton sx={{ pl: 8 }} key={item.Etapa.nombre} button onClick={handleIsOpen}>
       <ListItemAvatar>
           <Avatar>
               <AssignmentIcon />
           </Avatar>
       </ListItemAvatar>
       <ListItemText primary={item.Etapa.nombre} />
       <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                    paper: {
                        style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                        },
                    },
                    }}
                >
                    {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                    ))}
                </Menu>
        </div>
       {isOpen ? <ExpandLess /> : <ExpandMore />}
   </ListItemButton>
   <Divider component="li" />
   <Collapse in={isOpen} timeout="auto" unmountOnExit>
       <List disablePadding>
           {item.Tareas && item.Tareas.map((tarea) => {
                <TaskItem key={tarea.nombre} item={tarea}/>
           })}
       </List>
   </Collapse>
</List>
);
};

export default EtapaItem;