import {Card} from 'react-bootstrap';
import { stCapitalize } from '../helperFns';

export default function Achievements({data}){
   return (
    <Card id={data.href}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px' }}> {stCapitalize(data.title)}</Card.Title>
                  <div style={{ fontSize: '12px' }}>
                  <hr/>    
                  <ul>
                    {
                      data.content.map((item, key) => {
                        return (
                          <li style={{padding: "10px"}} key={key}>{item.title}</li>
                        )
                      })
                    }
                  </ul>
                  </div>
                </Card.Body>
              </Card>
   )
}
