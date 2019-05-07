import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Link';
import { BrowserRouter, Switch, Route ,Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Logo from './logo.png';
import { Register1 } from './Register1';
import { N8 } from './N8';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Home from './Home.js';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
        flexGrow: 1,
    },
    toolbarTitle: {
        flex: 1,
    },
    layout: {
        width: 'inherit',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
          width: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },

    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 'auto',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },

    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },

});



class myApp extends React.Component {

    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        redirect: false
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };
    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl, mobileMoreAnchorEl, redirect } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>My Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>log out</MenuItem>
            </Menu>
        );
        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>

                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className={classes.grow}>

                        <AppBar position="static" color="default" className={classes.appBar} className={classes.grow}>
                            <Toolbar>
                                <Link style={{ textDecoration: "none" }} to="/home">
                                    <img src={Logo} style={{ marginRight: 20 }} height={30} width={70} alt="Smiley face" />
                                </Link>
                                <Typography variant="h5" color="inherit" noWrap style={{ flex: '0.97' }} >
                                    <font face='forte'> Always Designing for People</font>
                                </Typography>

                                
                                <Link style={{ textDecoration: "none" }} to="/Register1">
                                    <Button style={{ marginRight: 20, color: "Black" , Size: "11" }} ><font face="forte"><b>Register</b></font></Button>
                                </Link>
                               

                                <div className={classes.sectionDesktop} style={{ display: 'flex', marginLeft: '20px' }}>
                                    <IconButton
                                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleProfileMenuOpen}
                                        color="inherit"

                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <AppBar position="static" style={{ backgroundColor: '#bf4a61' }}>
                            <Toolbar variant="dense">

                                <Link style={{ textDecoration: "none" }} to="/home">
                                    <Button style={{ marginLeft: 30, marginRight: 50, color: "#FFFFFF" }} >Home</Button>
                                </Link>

                                <Link style={{ textDecoration: "none" }} to="/submit">
                                    <Button style={{ marginRight: 50, color: "#FFFFFF" }} >About</Button>
                                </Link>

                                <Link style={{ textDecoration: "none" }} to="/faq">
                                    <Button style={{ marginRight: 50, color: "#FFFFFF" }} >Apply IJP</Button>
                                </Link>
                                
                                <Link style={{ textDecoration: "none" }} to="/Counselling">
                                    <Button style={{ marginRight: 50, color: "#FFFFFF" }} >Career Counselling</Button>
                                </Link>
                               

                                <div className={classes.grow} />
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                    />
                                </div>

                            </Toolbar>
                        </AppBar>
                        {renderMenu}
                        {renderMobileMenu}
                        <main className={classes.layout} style={{ display: 'flex' }}>

                            <main className={classes.content} style={{ marginTop: 60 }}>
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/Register1" component={Register1} />
                                    <Route path="/N8" component={N8} />
                                    <Route component={Home} />
                                </Switch>
                            </main>

                        </main>
                    </div>
                </BrowserRouter>
            </React.Fragment>

        )
    }
}

myApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(myApp);
