import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    click = () => {
        let {go} = this.props;
        go();
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.click}>走你</button>
            </div>
        )
    }
}
 
export default Login;