import { connect } from "react-redux";

class APIContainer {
    APIContainer(){}

    name(params) {
        alert({BASE_URL});
    }
}

const mapStateToProps = state => ({
    BASE_URL: state.BASE_URL,
})

export default connect(mapStateToProps, null);