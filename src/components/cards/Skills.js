import {Row, Col, Card} from 'react-bootstrap';
import { stCapitalize } from '../helperFns';

export default function Skills({data}){
   return (
    <Card id={data.href}>

    <Card.Body>
      <Card.Title style={{ fontSize: "16px" }}>
        {stCapitalize(data.title)}
      </Card.Title>
      <div style={{ fontSize: "12px" }}>
        {
          data.content.map((item, key) => {
            return (
              <div key={key}>

                <hr />

                <Row>
                  <Col lg={3} md={4} xs={4}><p style={{ fontWeight: 600 }}>{item.type}</p></Col>
                  <Col lg={9} md={8} xs={8} ><p>{item.skillset.join(', ')}</p>

                  </Col>
                </Row>


              </div>
            )
          }


          )
        }
      </div>
    </Card.Body>
  </Card>
   )
}
