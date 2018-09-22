import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getWeb3} from './utils'

class Login extends Component {
  constructor(props) {
    super(props);
    const web3 = getWeb3();
  }
  render() {
    return <div>
      <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
    </div>
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
