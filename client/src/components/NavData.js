import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import ComputerIcon from '@material-ui/icons/Computer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BrushIcon from '@material-ui/icons/Brush';
import DeckIcon from '@material-ui/icons/Deck';
import PetsIcon from '@material-ui/icons/Pets';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

export const NavData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Explore",
        icon: <ExploreIcon />,
        link: "/explore"
    },
    {
        title: "Arts & Entertainment", 
        icon: <MovieCreationIcon />,
        link: "/category/1"
    },
    {
        title: "Computers & Electronics", 
        icon: <ComputerIcon />,
        link: "/category/2"
    },
    {
        title: "Finance & Business", 
        icon: <MonetizationOnIcon />,
        link: "/category/3"
    },
    {
        title: "Food & Cooking", 
        icon: <FastfoodIcon />,
        link: "/category/4"
    },
    {
        title: "Health & Relationships", 
        icon: <FavoriteBorderIcon />,
        link: "/category/5"
    },
    {
        title: "Hobbies & Crafts", 
        icon: <BrushIcon />,
        link: "/category/6"
    },
    {
        title: "Home & Garden", 
        icon: <DeckIcon />,
        link: "/category/7"
    },
    {
        title: "Pets & Animals", 
        icon: <PetsIcon />,
        link: "/category/8"
    },
    {
        title: "Travel & Work", 
        icon: <FlightTakeoffIcon />,
        link: "/category/9"
    },
]
