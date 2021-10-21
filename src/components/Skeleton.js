import { Component } from "react";

class Skeleton extends Component {
    constructor(props) {
        super(props)
        this.state = { testing: true }
        console.log(this.state);
    }
    render() {
        return this.props.children ? this.props.children : <></> 
    }
}
 
export default Skeleton;