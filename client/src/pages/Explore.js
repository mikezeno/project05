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

export default function Explore() {

    let history = useHistory();

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron category-box">
                            <h1 class="display-4">Categories</h1>
                            <hr class="my-4"></hr>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}> <MovieCreationIcon /> Arts & Entertainment</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}><ComputerIcon /> Computers & Electronics </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}><MonetizationOnIcon /> Finance & Business </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}><FastfoodIcon /> Food & Cooking </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}><FavoriteBorderIcon /> Health & Relationships </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}><BrushIcon /> Hobbies & Crafts </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}><DeckIcon /> Home & Garden </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}><PetsIcon /> Pets & Animals </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <Link className="nav-link" activeClassName="active" onClick={() => history.push('/app/questions/:catid')}><FlightTakeoffIcon /> Travel & Work </Link>
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
