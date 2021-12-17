import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import Pay from '../Pay/Pay';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Button } from 'react-bootstrap';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import GiveReview from '../GiveReview/GiveReview';
import { FaTachometerAlt,FaFirstOrder } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box  >
            <Toolbar />
            <Link style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }} to='/home'> <h5 className='p-sm-2'><FaTachometerAlt />  Home</h5> </Link>
            <Link style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }} to='/products'> <h5 className='p-sm-2'>
                <MdProductionQuantityLimits />  Products</h5> </Link>
            <br />
            <Link style={{ margin: '0', padding: '0', textDecoration: 'none', color: 'black', fontWeight: '600' }} to={`${url}`}> <FaFirstOrder/> My Orders</Link>
            <br />
            <Link style={{ margin: '0', padding: '0', textDecoration: 'none', color: 'black', fontWeight: '600' }} to={`${url}/review`}>Review</Link>
            <br />
            <Link style={{ margin: '0', padding: '0', textDecoration: 'none', color: 'black', fontWeight: '600' }} to={`${url}/pay`}>Pay</Link>
            <br />
            {admin && <Box>
                <Link style={{ margin: '0', padding: '0', textDecoration: 'none', color: 'black', fontWeight: '600' }} to={`${url}/manageAllOrder`}>Manage All Orders</Link>
                <br />
                <Link style={{ margin: '0', padding: '0', textDecoration: 'none', color: 'black', fontWeight: '600' }} to={`${url}/addAProduct`}>Add A Product</Link>
                <br />
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }} to={`${url}/makeAdmin`}>Make Admin</Link>
                <br />
                <Link style={{ margin: '0', padding: '0', textDecoration: 'none', color: 'black', fontWeight: '600' }} to={`${url}/manageAllProduct`}>Manage Products</Link>
            </Box>}
            <Button className='custom-bg-color text-dark mt-3' variant='' onClick={logout}>Log out</Button>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box

                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <GiveReview></GiveReview>
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/manageAllProduct`}>
                        <ManageAllProduct></ManageAllProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addAProduct`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
