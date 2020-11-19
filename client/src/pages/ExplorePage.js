import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import ComputerIcon from '@material-ui/icons/Computer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BrushIcon from '@material-ui/icons/Brush';
import DeckIcon from '@material-ui/icons/Deck';
import PetsIcon from '@material-ui/icons/Pets';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

export default function ExplorePage() {

    // route params
    let history = useHistory();

    return (
        <div className="page">
            <div className="container">
            <div className="row ml-2 mb-2">
                    <h1>Explore</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron category-box">
                            <h1>Categories</h1>
                            <hr className="my-4"></hr>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <div className="nav-link" activeclassname="active" onClick={() => history.push('/category/1')}> <MovieCreationIcon /> Arts & Entertainment</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/2')}><ComputerIcon /> Computers & Electronics </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/3')}><MonetizationOnIcon /> Finance & Business </li>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/4')}><FastfoodIcon /> Food & Cooking </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/5')}><FavoriteBorderIcon /> Health & Relationships </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/6')}><BrushIcon /> Hobbies & Crafts </li>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/7')}><DeckIcon /> Home & Garden </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/8')}><PetsIcon /> Pets & Animals </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/9')}><FlightTakeoffIcon /> Travel & Work </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
