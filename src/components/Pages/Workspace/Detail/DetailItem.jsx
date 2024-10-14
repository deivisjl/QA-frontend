import { Collapse, Divider, ListItemText, 
    List, ListItemAvatar,Avatar, ListItemButton } from "@mui/material";
import React, { useState } from "react";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const DetailItem = ({ item }) => {
const [isOpen, setIsOpen] = useState(false);

const handleIsOpen = () => {
    setIsOpen(!isOpen);
};

return (
<List disablePadding>
   <ListItemButton sx={{ pl: 8 }} key={item.nombre} button onClick={handleIsOpen}>
       <ListItemAvatar>
           <Avatar sx={{ backgroundColor:'#357a38'}}>
               <AutoStoriesIcon />
           </Avatar>
       </ListItemAvatar>
       <ListItemText primary={item.nombre} />
       {isOpen ? <ExpandLess /> : <ExpandMore />}
   </ListItemButton>
   <Divider component="li" />
   <Collapse in={isOpen} timeout="auto" unmountOnExit>
       <List>
           {item.Sistemas && item.Sistemas.map((sistema) => (
               <ListItemButton sx={{ pl: 5 }} key={sistema.nombre} button>
                   <ListItemAvatar>
                       <Avatar>
                           <AssignmentIcon />
                       </Avatar>
                   </ListItemAvatar>
                   <ListItemText primary={sistema.nombre} />
               </ListItemButton>
           ))}
       </List>
   </Collapse>
</List>
);
};

export default DetailItem;