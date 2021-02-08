import React, {Component} from 'react'
import "./style/main.css"

class Main extends Component{
    state = {
        count : 0,
        tags : ["tag1", "tag2"]
    }
    render(){
        return(
            <div>
                <span className={this.bagdeColor()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Add more</button>
            </div>
        )
    }
    bagdeColor() {
        let classes = "badge m-2 badge-"
        classes += (this.state.count === 0) ? "warning" : "primary"
        return classes
    }

    formatCount (){
        const{count}= this.state
        return count === 0 ? <h6>None</h6> : count
    }
}
export default Main