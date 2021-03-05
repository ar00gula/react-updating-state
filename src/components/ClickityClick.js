// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super()

        this.state = {
            hasBeenClicked: false
        }
    }

    // handleClick = () => {
    //     if (this.state.hasBeenClicked === false) {
    //         this.setState({
    //             hasBeenClicked: true
    //         })
    //     } else {
    //     this.setState({
    //         hasBeenClicked: false
    //     })
    // }

    //ORRRRRRR

    handleClick = () => {
        this.setState(previousState => {
            return {
            hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

