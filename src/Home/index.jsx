
import React, { Fragment } from 'react';
import moment from 'moment';
import _ from 'lodash';
import {context, themes} from '../context';
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            count: moment.locale(),
            theme: themes.light,
            data: _.map([1,2,3], item => item+1)
        }
    }
   
    render () {
        return <Fragment>
            <context.Provider value={this.state.theme}>
                {this.state.count}
                <img src="/image.png"/>
            </context.Provider>
        </Fragment>
    }
}