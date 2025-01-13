import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    asin: null,
  };

  changeState = (asin) => {
    if (this.state.asin !== asin) {
      this.setState({ asin: asin });
    } else {
      this.setState({ asin: null });
    }
  };

  render() {
    return (
      <>
        <Row className='justify-content-center mt-5'>
          <Col xs={12} md={4} className='text-center'>
            <Form.Group>
              <Form.Control
                type='search'
                placeholder='Cerca un libro'
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='g-2 mt-3'>
          <Col xs={6}>
            <h5>Sezione Libri:</h5>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={6} key={b.asin}>
                    <SingleBook
                      book={b}
                      asin={this.state.asin === b.asin}
                      changeState={this.changeState}
                    />
                  </Col>
                ))}
            </Row>
          </Col>

          <Col xs={6}>
            <h5>Sezione Commenti:</h5>
            {this.state.asin && <CommentArea asin={this.state.asin} />}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
