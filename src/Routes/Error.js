import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class Errors extends Component {
    render() {
        return (
            <div> 
                <Helmet>
                    <title>Error | Family Tree</title>
                </Helmet>
                <h1>
                    ERROR 404
                </h1>
                <h2>
                    There is no URL that you require!
                </h2>
                
            </div>
        )
    }
}