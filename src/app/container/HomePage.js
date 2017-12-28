import { DATA, dataLoadedSuccessful } from "../services/homePage";
import HomePage from "../component/view/homePage/HomePage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    return {
        [DATA]: state.homePage[ DATA ]
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({dataLoadedSuccessful}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
