import React from 'react';
class HornedBeast extends React.Component {
    render (){

        return (
            <div>
                <h2>{this.props.name}</h2>
              
               < img src={this.props.url}/>

                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default HornedBeast ;