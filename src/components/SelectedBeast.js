import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component {



  render() {
    return (
      <>

        <Modal show={this.props.show} >
          <Modal.Header >
            <Modal.Title>{this.props.horndBeastTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.hornedBeastUrl}
              style={{ width: "450px" }}
              alt={this.props.horndBeastTitle} />
          </Modal.Body>
          <Modal.Body>
            <p>{this.props.hornedBeastDiscription} </p>

          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={this.props.hide}
              variant="secondary" >
              Close
            </Button>

          </Modal.Footer>
        </Modal>

      </>
    );
  }
}

export default SelectedBeast;