const headerSx = {
  title: {
    display: { xs: 'none', sm: 'block' },
  },
  search: {
    position: 'relative',
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.25)',
    },
    mr: 2,
    ml: 0,
    width: '100%',
    '@media (min-width:600px)': {
      ml: 3,
      width: 'auto',
    },
  },
  searchIcon: {
    p: 2,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: '8px 8px 8px 0',
    paddingLeft: 'calc(1em + 32px)',
    transition: 'width 200ms',
    width: '100%',
    '@media (min-width:900px)': {
      width: '20ch',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default headerSx;