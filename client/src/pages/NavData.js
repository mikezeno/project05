import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExploreIcon from '@material-ui/icons/Explore';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

export const NavData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Questions", 
        icon: <QuestionAnswerIcon />,
        link: "/questions"
    },
    {
        title: "Ask Question",
        icon: <LibraryAddIcon />,
        link: "/question/ask"
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
    {
        title: "Register",
        icon: <GroupAddIcon />,
        link: "/register"
    },
    {
        title: "Login",
        icon: <LockOpenIcon />,
        link: "/login"
    },
]
