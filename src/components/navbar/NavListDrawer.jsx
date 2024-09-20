import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavListDrawer({navLinks, setOpen}){
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
                <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Trash" />
                </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                </ListItemButton>
                </ListItem>
            </List>
            </nav>
      </Box>
    )
}