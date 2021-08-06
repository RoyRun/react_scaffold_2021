
import React, { Fragment } from 'react';
 
import Test from '../useCallback';
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
                <Test />
                <img src="/image.png"/>
            </context.Provider>
        </Fragment>
    }
}