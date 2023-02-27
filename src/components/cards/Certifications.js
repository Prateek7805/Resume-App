import {Row, Col, Card} from 'react-bootstrap';
import { stCapitalize } from '../helperFns';

export default function Certifications({data}){
   return (
    <Card id={data.href}>
    <Card.Body>
      <Card.Title style={{ fontSize: '16px' }}> {stCapitalize(data.title)}</Card.Title>
      <div style={{ fontSize: '12px' }}>
        {
          data.content.map((item, key) => {
            return (
              <div key={key}>
                <hr />
                <Row>
                  <Col md={8} xs={12}>
                    <p style={{ fontWeight: 600 }}>
                      {item.title}
                    </p>
                  </Col>
                  <Col md={4} xs={12}>
                    <p className='text-md-end'>
                      {item.platform}
                    </p>
                  </Col>
                </Row>
              </div>
            )
          })
        }
      </div>
    </Card.Body>
  </Card>
   )
}
