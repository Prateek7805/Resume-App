import {Card} from 'react-bootstrap';
import { stCapitalize } from '../helperFns';

export default function Education({data}){
   return (
    <Card id={data.href}>

                <Card.Body>
                  <Card.Title style={{ fontSize: "16px" }}>
                    {stCapitalize(data.title)}
                  </Card.Title>
                  {
                    data.content.map((item, key) => {
                      return (
                        <div key={key} style={{ fontSize: "12px" }}>

                          <hr />
                          <Card.Subtitle style={{ fontSize: "12px" }}>
                            <div>
                              {
                                `${item.course}, ${item.institution}`
                              }
                            </div>
                          </Card.Subtitle>
                          <div>
                              {
                                item.location
                              }
                            </div>
                            <div>
                              {
                                `${item.fromDate}-${item.toDate || "Present"}`
                              }
                            </div>
                          

                        </div>
                      )
                    }

                    )
                  }
                </Card.Body>
              </Card>
   )
}
