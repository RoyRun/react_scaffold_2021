
import React, { Fragment } from 'react';
 
import {context, themes} from '../context';
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            theme: themes.light
        }
    }
    
    render () {
        return <Fragment>
            <context.Provider value={this.state.theme}>
                
            </context.Provider>
        </Fragment>
    }
}