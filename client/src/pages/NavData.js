import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';

export const NavData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Blog",
        icon: <DashboardIcon />,
        link: "/blog"
    },
    {
        title: "Create Post",
        icon: <FormatQuoteIcon />,
        link: "/createpost"
    },
    {
        title: "Movies",
        icon: <LocalMoviesIcon />,
        link: "/reviews"
    },
    {
        title: "Users",
        icon: <PeopleIcon />,
        link: "/users"
    }
]
