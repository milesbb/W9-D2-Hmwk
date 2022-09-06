import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import books from "../books/history.json";
console.log(books)
const slicedBooks = books.slice(0, 30);
console.log(slicedBooks);

function LatestRelease(slicedBooks) {
  return (
    // <Container>
    //   <Row>
    //     <Col>
    //     <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src="" />
    //           <Card.Body>
    //             <Card.Title>test</Card.Title>
    //             <Card.Text>
    //               test
    //             </Card.Text>
    //             <Button variant="primary">Buy</Button>
    //           </Card.Body>
    //         </Card>
    //       {books.map((book) => {
    //         console.log(book);
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src={book.img} />
    //           <Card.Body>
    //             <Card.Title>{book.title}</Card.Title>
    //             <Card.Text>
    //               {book.category}
    //             </Card.Text>
    //             <Button variant="primary">Buy</Button>
    //           </Card.Body>
    //         </Card>
    //       })}
    //     </Col>
    //   </Row>
    // </Container>
    <ListGroup>
        {books.map((book) => <ListGroup.Item><div style={{backgroundImage: `url("${book.img}")`, backgroundRepeat: "no-repeat", objectFit: "contain", backgroundSize: "300px", height: 400, margin: "auto"}}><div style={{background: "white", position: "absolute", left: "30%", top: "40%", fontSize: "2rem", textAlign: "left"}}>{book.title}</div></div></ListGroup.Item> )}
    </ListGroup>
  );
}

export default LatestRelease;
