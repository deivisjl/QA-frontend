import { Collapse, Divider, ListItemText, 
    List, ListItemAvatar,Avatar, ListItemButton } from "@mui/material";
import React, { useState } from "react";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TaskIcon from '@mui/icons-material/Task';

const TaskItem = ({ item }) => {

return (
<List disablePadding>
   <ListItemButton sx={{ pl: 10 }} key={item.nombre}>
       <ListItemAvatar>
           <Avatar>
               <TaskIcon />
           </Avatar>
       </ListItemAvatar>
       <ListItemText primary={item.nombre} />
   </ListItemButton>
   <Divider component="li" />
</List>
);
};

export default TaskItem;