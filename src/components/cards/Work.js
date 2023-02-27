import {Card, ListGroup} from 'react-bootstrap';
import { stCapitalize } from '../helperFns';

export default function Work({data}){
    return (
        <Card id={data.href}>

                <Card.Body>
                  <Card.Title style={{ fontSize: "16px" }}>
                    {stCapitalize(data.title)}
                  </Card.Title>
                  {
                    data.content.map((item, key) => {
                      return (
                        <div key={key}>

                          <hr />
                          <Card.Subtitle style={{ fontSize: "12px" }}>
                            <div>
                              {
                                item.jobTitle
                              }
                            </div>
                            <div>
                              {
                                item.orgName
                              }
                            </div>
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
                            <hr />
                          </Card.Subtitle>
                          <ListGroup as="ul" style={{ fontSize: "12px" }}>
                            {item.points.map((i, k) => {
                              return (
                                <ListGroup.Item as="li" key={k}>
                                  {i}
                                </ListGroup.Item>
                              )
                            })}
                          </ListGroup>
                        </div>
                      )
                    }

                    )
                  }
                </Card.Body>
              </Card>
    )
}
