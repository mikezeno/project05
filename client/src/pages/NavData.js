import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExploreIcon from '@material-ui/icons/Explore';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';

export const NavData = [
    {
        title: "Register",
        icon: <ListAltRoundedIcon />,
        link: "/register"
    },
    {
        title: "Login",
        icon: <ListAltRoundedIcon />,
        link: "/login"
    },
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Movies",
        icon: <LocalMoviesIcon />,
        link: "/reviews"
    },
    {
        title: "Blog",
        icon: <ListAltRoundedIcon />,
        link: "/blog"
    },
    {
        title: "Create Post",
        icon: <FormatQuoteIcon />,
        link: "/createpost"
    },
    {
        title: "Explore", //list of all 
        icon: <ExploreIcon />,
        link: "/explore"
    },
    {
        title: "Bookmarks", //saved posts
        icon: <BookmarksIcon />,
        link: "/bookmarks"
    },
    {
        title: "Profile", 
        icon: <PersonIcon />,
        link: "/user"
    },
]
