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
        link: "/app/home"
    },
    {
        title: "Explore",
        icon: <ExploreIcon />,
        link: "/app/explore"
    },
    {
        title: "Arts & Entertainment", 
        icon: <MovieCreationIcon />,
        link: "/app/category/1"
    },
    {
        title: "Computers & Electronics", 
        icon: <ComputerIcon />,
        link: "/app/category/2"
    },
    {
        title: "Finance & Business", 
        icon: <MonetizationOnIcon />,
        link: "/app/category/3"
    },
    {
        title: "Food & Cooking", 
        icon: <FastfoodIcon />,
        link: "/app/category/4"
    },
    {
        title: "Health & Relationships", 
        icon: <FavoriteBorderIcon />,
        link: "/app/category/5"
    },
    {
        title: "Hobbies & Crafts", 
        icon: <BrushIcon />,
        link: "/app/category/6"
    },
    {
        title: "Home & Garden", 
        icon: <DeckIcon />,
        link: "/app/category/7"
    },
    {
        title: "Pets & Animals", 
        icon: <PetsIcon />,
        link: "/app/category/8"
    },
    {
        title: "Travel & Work", 
        icon: <FlightTakeoffIcon />,
        link: "/app/category/9"
    },
]
