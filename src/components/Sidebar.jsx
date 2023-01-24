import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Typography,
  Avatar,
  Collapse,
  List, 
  ListItem,
  ListItemText, 
  ListItemIcon, 
  ListItemButton,
} from "@mui/material";
import main from "../styles/main";
import imgAvatarDefault from "../images/avatar_default.png";
import Scrollbar from "./Scrollbar";
import MHidden from "./MHidden";
import {sidebarItems} from "../services/menuItems";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
      <Typography variant="h4" component="h1">
        Vagabond
      </Typography>
    </Box>
  );
};

const Account = ({name, role, image}) => {
  return (
    <Box sx={{ my: 4, mx: 2.5 }}>
      <Box sx={main.sidebar.account}>
        <Avatar src={image} alt={name} />
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const MenuItem = ({item, active, pathname}) => {
  const navigate = useNavigate();
  const { title, path, icon, children } = item;
  const isActiveRoot = active(item);
  const [open, setOpen] = useState(isActiveRoot);
  useEffect(() => {
    if(children && !isActiveRoot){
      setOpen(false)
    }
  },[pathname]);

  if(children){
    return (
      <>
        <ListItem onClick={() => setOpen(st => !st)} disablePadding>
          <ListItemButton sx={isActiveRoot ? main.sidebar.menu.active : main.sidebar.menu.item}>
            <ListItemIcon sx={main.sidebar.menu.icon}>
              {icon}
            </ListItemIcon>
            <ListItemText primary={title} disableTypography/>
          </ListItemButton>
        </ListItem>
        
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                children.map((child, index) => {
                  const isActiveChildren = active(child);
                  return (
                    <ListItem key={index} onClick={() => navigate(child.path)} disablePadding>
                      <ListItemButton sx={{
                        ...(main.sidebar.menu.item),
                        ...(isActiveChildren && main.sidebar.menu.activeSub)
                      }}>
                      <ListItemIcon sx={main.sidebar.menu.icon}>
                        <Box
                          component="span"
                          sx={{
                            ...(main.sidebar.menu.subIcon),
                            ...(isActiveChildren && main.sidebar.menu.activeSubIcon)
                          }}
                        />
                      </ListItemIcon>
                        <ListItemText primary={child.title} disableTypography/>
                      </ListItemButton>
                    </ListItem>
                  )
                })
              }
            </List>
          </Collapse>
      </>
    )
  }

  return (
    <ListItem onClick={() => navigate(path)} disablePadding>
      <ListItemButton sx={isActiveRoot ? main.sidebar.menu.active : main.sidebar.menu.item}>
        <ListItemIcon sx={main.sidebar.menu.icon}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} disableTypography/>
      </ListItemButton>
    </ListItem>
  );
}

const Menu = ({items}) => {
  const { pathname } = useLocation();
  const active = (item) => {
    if(item.path === pathname){
      return true;
    }
    if (item.children){
      let res = item.children.filter(child => child.path === pathname);
      return res.length > 0;
    }
    return false;
  }

  return (
    <List disablePadding>
      {
        items.map(item => <MenuItem key={item.title} item={item} active={active} pathname={pathname}/>)
      }
    </List>
  )
}

const Sidebar = ({ isOpenSidebar, onCloseSidebar }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const render = (
    <Scrollbar sx={main.sidebar.scrollbar}>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Logo  />
      </Box>
      <Box>
        <Account name="Andres Deniz" role="Administrador" image={imgAvatarDefault}/>
      </Box>
      <Menu items={sidebarItems}/>
      <Box sx={{pt: 5}} />
    </Scrollbar>
  );

  return (
    <Box sx={main.sidebar.root}>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{sx: main.sidebar.drawer}}
        >
          {render}
        </Drawer>
      </MHidden>
      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{sx: main.sidebar.drawer}}
        >
          {render}
        </Drawer>
      </MHidden>
    </Box>
  );
};

export default Sidebar;
