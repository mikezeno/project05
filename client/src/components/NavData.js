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
        link: "/app/questions/arts"
    },
    {
        title: "Computers & Electronics", 
        icon: <ComputerIcon />,
        link: "/app/questions/comp"
    },
    {
        title: "Finance & Business", 
        icon: <MonetizationOnIcon />,
        link: "/app/questions/finance"
    },
    {
        title: "Food & Cooking", 
        icon: <FastfoodIcon />,
        link: "/app/questions/food"
    },
    {
        title: "Health & Relationships", 
        icon: <FavoriteBorderIcon />,
        link: "/app/questions/health"
    },
    {
        title: "Hobbies & Crafts", 
        icon: <BrushIcon />,
        link: "/app/questions/hobbies"
    },
    {
        title: "Home & Garden", 
        icon: <DeckIcon />,
        link: "/app/questions/garden"
    },
    {
        title: "Pets & Animals", 
        icon: <PetsIcon />,
        link: "/app/questions/pets"
    },
    {
        title: "Travel & Work", 
        icon: <FlightTakeoffIcon />,
        link: "/app/questions/travel"
    },
]
