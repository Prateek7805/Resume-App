import {Card, Badge} from 'react-bootstrap';
import { stCapitalize } from '../helperFns';

export default function Languages({data}){
   return (
    <Card id={data.href}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px' }}> {stCapitalize(data.title)}</Card.Title>
                  <div style={{ fontSize: '12px' }}>
                  <hr/>    
                  <ul className='list-group list-group-horizontal-md'>
                    {
                      data.content.map((item, key) => {
                        return (
                          <li className='list-group-item' style={{padding: "10px", fontSize: '14px'}} key={key}>{item.language}</li>
                        )
                      })
                    }
                  </ul>
                  </div>
                </Card.Body>
              </Card>
   )
}
