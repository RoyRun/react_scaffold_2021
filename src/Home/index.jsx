
import React, { Fragment } from 'react';
import day from 'dayjs';
import _ from 'lodash';
import {context, themes} from '../context';
import MarkdownText from './markdown_test.md'
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            count: day().format(),
            theme: themes.light,
            data: _.map([1,2,3], item => item+1)
        }
    }
   
    render () {
        console.log(MarkdownText)
        return <Fragment>
            <context.Provider value={this.state.theme}>
                {this.state.count}
                <div dangerouslySetInnerHTML={{ __html: MarkdownText}}></div>
                <img src="/image.png"/>
            </context.Provider>
        </Fragment>
    }
}