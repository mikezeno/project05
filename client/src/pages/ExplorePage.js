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

    let history = useHistory();

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron category-box">
                            <h1 className="display-4">Categories</h1>
                            <hr className="my-4"></hr>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/1')}> <MovieCreationIcon /> Arts & Entertainment</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/2')}><ComputerIcon /> Computers & Electronics </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/3')}><MonetizationOnIcon /> Finance & Business </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/4')}><FastfoodIcon /> Food & Cooking </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/5')}><FavoriteBorderIcon /> Health & Relationships </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/6')}><BrushIcon /> Hobbies & Crafts </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/7')}><DeckIcon /> Home & Garden </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/8')}><PetsIcon /> Pets & Animals </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/category/9')}><FlightTakeoffIcon /> Travel & Work </Link>
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
