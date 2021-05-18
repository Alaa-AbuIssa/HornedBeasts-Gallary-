import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            { clickingCounter: 0, };


    }
    increaseFavorites = () => {
        this.setState(
            {
                clickingCounter: this.state.clickingCounter +1,
            }

        );
    }

    render() {


        return (

            <div>

                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> {this.props.title}</Card.Title>
                        
                        <Card.Img onClick={this.increaseFavorites} src={this.props.img} />
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        favourit💖: {this.state.clickingCounter}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

            </div>
        );
    }
}
export default HornedBeast;