import React from 'react';
import { Container, CardGroup, Card, Row, Col  } from 'react-bootstrap';
import "../Tabs.css";

const styles = {
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 5,
    padding: '3rem'
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 5,
    height: '10%'
  }
}

function ExperienceCards() 
{ 
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Mess 
            Manager</h2></Card.Title>
          <Card.Text>
            <h6>A Portal help easen the ordering process in the mess and to make it more efficient. Built with proper 
              authetication to ensure only the residents have the access to it.

</h6>

     <Col>
              <Card.Img src={require("../assets/1Ctcvx33DP415DmqrjubU1Q.png")} style={styles.cardImage} />
            </Col>     </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title><h2>Customer Segmentation</h2></Card.Title>
          <Card.Text>
            <h6>We have a uses unsupervised learning algorithms to cluster customers into groups based on purchasing data(Under Udacity). </h6>
 <Col>
              <Card.Img src={require("../assets/AI.png")} style={styles.cardImage} />
            </Col> 
          </Card.Text>

        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h5>Prediction tool </h5></Card.Title>
          <Card.Text>
            <h7>A supervised learning approach to 
              predict the type of solution needed.</h7>
 <Col>
              <Card.Img src={require("../assets/brain.jpeg")} style={styles.cardImage} />
            </Col> 
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
} 

export default ExperienceCards;