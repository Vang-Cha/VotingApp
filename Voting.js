import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';

const Voting = (props) => {
    return (
        <div className="voting">
            <Grid className="component">
                {props.votes} {''}
                {props.lang}
                <button onClick={props.minusVote.bind(this, props.id)} className="minus">-</button>
                <button onClick={props.addVote.bind(this, props.id)} className="add">+</button>
            </Grid>
        </div>
    )
};

export default Voting;