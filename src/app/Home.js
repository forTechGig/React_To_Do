import React from "react";
import {connect} from "react-redux";

const mapDispatchToprop = (dispatch) =>{
    return{
        onButtonClick: (comment, name) => {
            console.log(comment + "::::" + name);
            dispatch({
                type: "ADD_USER"
               ,usersList: [comment]
            });
        }
    };
};

const mapConstToProp = (state) => {
    return{
        username: state.username
    };
};

const Home = (props) => 
(
    <div> 
        Name: <input id="username" value={props.username}></input>
        <br></br>
        Comment: <textarea id="comment" cols="10" rows="10" value={props.comment}></textarea>
        <button type="submit" onClick={() => props.onButtonClick(comment.value, username.value)}>Submit</button>
    </div>
)
export default connect(mapConstToProp, mapDispatchToprop)(Home);