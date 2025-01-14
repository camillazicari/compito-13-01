import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   asin: null,
  // };
  const [searchQuery, setSearchQuery] = useState("");
  const [asin, setAsin] = useState(null);

  const changeState = (myAsin) => {
    if (asin !== myAsin) {
      //this.setState({ asin: asin });
      setAsin(myAsin);
    } else {
      //this.setState({ asin: null });
      setAsin(null);
    }
  };

  return (
    <>
      <Row className='justify-content-center mt-5'>
        <Col xs={12} md={4} className='text-center'>
          <Form.Group>
            <Form.Control
              type='search'
              placeholder='Cerca un libro'
              value={searchQuery}
              onChange={(e) =>
                // this.setState({ searchQuery: e.target.value })
                setSearchQuery(e.target.value)
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='g-2 mt-3'>
        <Col xs={6}>
          <h5>Sezione Libri:</h5>
          <Row>
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={6} key={b.asin}>
                  <SingleBook
                    book={b}
                    asin={asin === b.asin}
                    changeState={changeState}
                  />
                </Col>
              ))}
          </Row>
        </Col>

        <Col xs={6}>
          <h5>Sezione Commenti:</h5>
          {asin && <CommentArea asin={asin} />}
        </Col>
      </Row>
    </>
  );
};

export default BookList;
