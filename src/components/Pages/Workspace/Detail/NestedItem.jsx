import { Collapse, Divider, ListItemText, 
         List, ListItemAvatar,Avatar, ListItemButton } from "@mui/material";
import React, { Fragment, useState } from "react";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import ComputerIcon from '@mui/icons-material/Computer';
import DetailItem from "./DetailItem";

const NestedItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleIsOpenTwo = () =>{
    setIsOpenTwo(!isOpenTwo);
  }

  return (
    <List disablePadding>
        <ListItemButton key={item.nombre} button onClick={handleIsOpen}>
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor:'#1769aa'}}>
                    <WorkIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.nombre} />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider component="li" />
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
                {item.Sistemas && item.Sistemas.map((sistema) => (
                    <>
                    <ListItemButton sx={{ pl: 5 }} key={sistema.nombre} button onClick={handleIsOpenTwo}>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor:'#f50057'}}>
                                <ComputerIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={sistema.nombre}/>
                        {isOpenTwo ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Divider component="li" />
                    <Collapse in={isOpenTwo} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {sistema.Modulos && sistema.Modulos.map((modulo)=> {
                                return (<DetailItem key={modulo.nombre} item={modulo} />)
                            })}
                        </List>
                    </Collapse>
                    </>
                ))}
            </List>
        </Collapse>
    </List>
  );
};

export default NestedItem;