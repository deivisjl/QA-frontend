import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { logout } from "../../store/actions/auth";

export default function NavListDrawer({navLinks, setOpen}){

    const dispatch = useDispatch()

    const salir = (e)=>{
        e.preventDefault()
        setOpen(false)
        dispatch(logout())
    }

    return (
        <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
            <List>
                {
                    navLinks.map((item) => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton component={NavLink} to={item.path} onClick={()=> setOpen(false)}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
            <List>
                <ListItem disablePadding key='salir'>
                    <ListItemButton component={NavLink} to='#' onClick={salir}>
                        <ListItemText>Cerrar sesión</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            </nav>
      </Box>
    )
}