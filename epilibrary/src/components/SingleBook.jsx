import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // }
  return (
    <>
      <Card
        onClick={() => props.changeState(props.book.asin)}
        style={{
          border: props.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant='top' src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
