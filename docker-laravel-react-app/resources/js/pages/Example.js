import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core' ;

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">なまけやで！！！</div>
                        <div className="card-body">pages下に移動出来た？？</div>

                        <Button color="primary" variant="contained">Hello World</Button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}