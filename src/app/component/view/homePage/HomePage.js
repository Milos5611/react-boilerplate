import React, {Component} from "react";
import PropTypes from "prop-types";

class Home extends Component {

    static propTypes = {
        data: PropTypes.string,
        dataLoadedSuccessful: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dataLoadedSuccessful();
    }

    render() {
        const {data} = this.props;
        return (
            data ? <span className="random_class">{data}</span> : null
        );
    }
}

export default Home;
