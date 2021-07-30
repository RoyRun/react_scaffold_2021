
import React from 'react';

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    render () {
        return <div>
            {this.state.count}
        </div>
    }
}