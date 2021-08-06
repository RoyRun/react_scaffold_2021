
import React, { Fragment } from 'react';
import moment from 'moment';
import Test from '../useCallback';
import {context, themes} from '../context';
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            count: moment.locale(),
            theme: themes.light
        }
    }
    
    render () {
        return <Fragment>
            <context.Provider value={this.state.theme}>
                <Test />
                {this.state.count}
                <img src="/image.png"/>
            </context.Provider>
        </Fragment>
    }
}