import {Card} from 'react-bootstrap';
import { stCapitalize } from '../helperFns';

export default function Projects({data}){
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
                            <span style={{ fontWeight: 600, paddingRight: '10px' }}>{`${item.title}:`}</span>
                            <span>{item.desc}</span>
                            {item.demo ? <Card.Link style={{ paddingLeft: '10px' }} href={item.demo}>Demo</Card.Link> : ""}
                          </div>
                        )
                      })
                    }
                  </div>
                </Card.Body>
              </Card>
   )
}
