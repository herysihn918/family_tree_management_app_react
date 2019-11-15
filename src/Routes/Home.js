import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        window.location.href = '/login'
        return (
            <div> Home </div>
        )
    }
}