const Lists = (theme) => ({
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: 'inherit',
        minWidth: 'auto',
      }
    }
  },
  MuiListItemAvatar: {
    styleOverrides: {
      root: {
        minWidth: 'auto',
        marginRight: theme.spacing(2)
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        marginTop: 0,
        marginBottom: 0
      },
      multiline: {
        marginTop: 0,
        marginBottom: 0
      }
    }
  }
});

export default Lists;