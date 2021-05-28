import React from 'react';
import HornedBeasts from './HornedBeasts';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import hornsData from './Horned.json';
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            hornedBeastFilter: hornsData,
        }
    }

    horendBeastProps = (title, url, discription) => {
        this.props.appFunctionApptoMain(title, url, discription)
    }

    handleShowprops = (show) => {
        this.props.showHandeling(show)
    }


    renderOption = (event) => {

        let hornedBeastFilterarr = [];
        let hornsNum = event.target.value;
        if (hornsNum == 'All') {
            this.setState({
                hornedBeastFilter: this.props.beastArr,
            })
        }
        else {
            this.props.beastArr.filter((item) => {
                if (item.horns == hornsNum) {
                    hornedBeastFilterarr.push(item);
                }
            });
            this.setState({
                hornedBeastFilter: hornedBeastFilterarr,
            })
        }
    }

    ///rendering 
    render() {
        const bodyStyle = {
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "10px",
        };

        const cardStyle = {
            marginLeft: "3%",
            marginRight: "3%",
        };


        return (
            <div style={bodyStyle} >

                <Form >
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>choose horns number</Form.Label>
                        <Form.Control onChange={this.renderOption} name="select" as="select" size="sm" custom>
                            <option value='All'>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <hr />

                <div style={cardStyle} >
                    <CardColumns  >
                        {this.state.hornedBeastFilter.map((item, index) => {

                            return (
                                <>

                                    <HornedBeasts
                                        title={item.title}
                                        image_url={item.image_url}
                                        alt={item.alt}
                                        description={item.description}
                                        appFunctionMainToHorned={() => this.horendBeastProps(item.title, item.image_url, item.description)}
                                        handleShowpropsToHorned={this.handleShowprops}
                                        key={index}
                                    />
                                </>

                            )
                        })
                        }
                    </CardColumns>
                </div>

            </div>
        )
    }
}

export default Main;