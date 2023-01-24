import { alpha } from '@mui/material/styles';

const DRAWER_WIDTH = 280;
const APP_MOBILE = 56;
const APP_DESKTOP = 64;

export default {
  rootPageCenter: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dashboardLayout: {
    root: {
      display: 'flex',
      minHeight: '100vh',
      overflow: 'hidden'
    },
    content: {
      flexGrow: 1,
      overflow: 'auto',
      minHeight: '100%',
    }
  },
  sidebar:{
    root: {
      width: {
        lg: DRAWER_WIDTH
      }
    },
    account: {
      display: 'flex',
      alignItems: 'center',
      padding: th => th.spacing(2,2.5),
      borderRadius: th => th.shape.borderRadiusSm,
      backgroundColor: th => th.palette.grey[200],
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: th => th.palette.grey[500_12],
      }
    },
    scrollbar: {
      height: '100vh',
      '& .simplebar-content': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    },
    drawer: {
      width: DRAWER_WIDTH,
    },
    menu: {
      item: {
        height: 48,
        position: 'relative',
        textTransform: 'capitalize',
        color: 'text.secondary',
        padding: th => th.spacing(0,2.5,0,5)
      },
      active: {
        height: 48,
        position: 'relative',
        textTransform: 'capitalize',
        color: 'primary.main',
        fontWeight: 'fontWeightMedium',
        padding: th => th.spacing(0,2.5,0,5),
        bgcolor: th => th.customAlpha(th.palette.primary.main, th.palette.action.selectedOpacity),
        '&:before': {
          top: 0,
          right: 0,
          width: 3,
          bottom: 0,
          content: "''",
          display: 'block',
          position: 'absolute',
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
          backgroundColor: 'primary.main'
        }
      },
      activeSub: {
        color: 'primary.main',
        fontWeight: 'fontWeightMedium'
      },
      icon: {
        width: 22,
        height: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: th => th.spacing(0, 4, 0, 0)
      },
      subIcon: {
        width: 4,
        height: 4,
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'text.disabled',
        transition: th => th.transitions.create('transform')
      },
      activeSubIcon: {
        transform: 'scale(2)',
        bgcolor: 'primary.main'
      },
    }
  },
  navbar: {
    root: {
      borderBottom: th => `1px solid ${th.palette.grey[500_12]}`,
      boxShadow: 'none',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      backgroundColor: 'background.default',
      width: '100%'
    },
    toolabar: {
    },
    account: {
      icon: {
        padding: 0,
        width: 44,
        height: 44,
      },
      iconActive: {
        '&:before': {
          zIndex: 1,
          content: "''",
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          position: 'absolute',
          bgcolor: th => th.customAlpha(th.palette.grey[900], 0.50)
        }
      }
    },
    popover: {
      marginTop: 1.5,
      marginLeft: 0.5,
      overflow: 'inherit',
      boxShadow: th => th.customShadows.z20,
      border: th => `1px solid ${th.palette.grey[800_8]}`,
      width: 220
    },
    popoverArrow: {
      top: -7,
      zIndex: 1,
      width: 12,
      right: 20,
      height: 12,
      position: 'absolute',
      borderRadius: '0 0 4px 0',
      transform: 'rotate(-135deg)',
      background: 'white',
      borderRight: th => `solid 2px ${th.customAlpha(th.palette.grey[500], 0.12)}`,
      borderBottom: th => `solid 2px ${th.customAlpha(th.palette.grey[500], 0.12)}`
    },
    searchBar: {
      top: 0,
      left: 0,
      zIndex: 99,
      width: '100%',
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      height: {
        xs: APP_MOBILE,
        lg: APP_DESKTOP
      },
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      padding: th => th.spacing(0, 3),
      backgroundColor: th => th.customAlpha(th.palette.background.default, 0.72),
    }
  },
  auth: {
    card: {
      width: '100%',
      maxWidth: 464,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: th => th.spacing(2,0,2,2)
    },
    content: {
      maxWidth: 480,
      margin: 'auto',
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: th =>  th.spacing(12,0)
    }
  }
}