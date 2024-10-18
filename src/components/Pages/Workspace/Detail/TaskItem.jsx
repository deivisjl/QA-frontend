import { Collapse, Divider, ListItemText, 
    List, ListItemAvatar,Avatar, ListItemButton, 
    Chip} from "@mui/material";
import React, { useState } from "react";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TaskIcon from '@mui/icons-material/Task';
import ListItemIcon from '@mui/material/ListItemIcon';

const TaskItem = ({ item }) => {

return (
<List disablePadding>
   <ListItemButton sx={{ pl: 10 }} button="true" key={item.nombre}>
       <ListItemIcon>
            <TaskIcon />
       </ListItemIcon>
       <ListItemText primary={item.nombre} />
       <Chip label={item.Estado.nombre}  sx={{ backgroundColor:`${item.Estado.color}`, color:'#fff', fontWeight:'bold'}}/>
   </ListItemButton>
   <Divider component="li" />
</List>
);
};

export default TaskItem;