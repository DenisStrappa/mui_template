import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  ButtonGroup,
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Avatar,
  Popover,
  Divider,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Input,
  InputAdornment,
  ClickAwayListener,
  Slide
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import main from "../styles/main";
import MHidden from "./MHidden";
import { authSelector, authAction } from "../redux/authRedux";
import {navbarAccountItems} from "../services/menuItems";
import avatarDefault from "../images/avatars/avatar_default.jpg";

const MenuPopover = ({children, sx, ...other}) => {
  return (
    <Popover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{ sx: {...(main.navbar.popover), ...sx}}}
      {...other}
    > 
      <Box sx={main.navbar.popoverArrow} />
      {children}
    </Popover>
  )
}

const Search = () => {
  const [open, setOpen] = useState(false);
  const handleSearch= () => {
    setOpen(false);
  }
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box>
        {
          !open && (
            <IconButton onClick={() => setOpen(true)}>
              <SearchIcon/>
            </IconButton>
          )
        }
        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <Box sx={main.navbar.searchBar}>
            <Input
                autoFocus
                fullWidth
                disableUnderline
                placeholder="Buscar..."
                startAdornment={
                  <InputAdornment position="start">
                   <IconButton disabled>
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
              />
              <Button variant="contained" onClick={handleSearch}>
                Buscar
              </Button>
          </Box>
        </Slide>
      </Box>
    </ClickAwayListener>
  )
}

const Account = ({user, logout}) => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <IconButton ref={menuRef} onClick={() => setOpen(true)} sx={{
        ...(main.navbar.account.icon),
        ...(open && main.navbar.account.iconActive)
      }}>
        <Avatar src={avatarDefault}/>
      </IconButton>
      <MenuPopover open={open} onClose={() => setOpen(false)} anchorEl={menuRef.current}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            Andres Deniz Reyes
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            adenizreyes@gmail.com
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        {
          navbarAccountItems.map((item) => (
            <MenuItem
              key={item.title}
              to={item.path}
              component={RouterLink}
              onClick={() => setOpen(false)}
              sx={{ typography: 'body2', py: 1, px: 2.5 }}
            >
              <ListItemIcon sx={{width: 24, height: 24}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText disableTypography>
                {item.title}
              </ListItemText>              
            </MenuItem>
          ))
        }
        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={() => logout}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </Box>
  );
}

const Navbar = ({onOpenSidebar}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => authSelector.isAuth(state));
  const user = useSelector((state) => authSelector.user(state));

  const logout = () => {
    dispatch(authAction.logout());
  };

  return (
    <AppBar sx={main.navbar.root} position="static">
      <Toolbar sx={main.navbar.toolabar}>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 2, color: 'text.primary' }}>
            <MenuIcon />
          </IconButton>
        </MHidden>
        <Search />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Account user={user} logout={logout}/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


/*
return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              DOM
            </Typography>
            <Link to="/">
              <Button variant="contained" color="success">
                Inicio
              </Button>
            </Link>
            {isAuth ? (
              <>
                <Link to="/posts">
                  <Button variant="contained" color="info">
                    Posts
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="contained" color="info">
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => logout()}
                >
                  Salir
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="contained" color="info">
                    Ingresar
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained" color="info">
                    Registro
                  </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
  */