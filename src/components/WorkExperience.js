

export default function({data}){
    return (
        <Row className="card-row">
              <Card>

                <Card.Body>
                  <Card.Title style={{ fontSize: "16px" }}>
                    {stCapitalize(allData[1].title)}
                  </Card.Title>
                  {
                    allData[1].content.map((item, key) => {
                      return (
                        <>

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
                                <>
                                <ListGroup.Item as="li">
                                  {i}
                                </ListGroup.Item>
                                </>
                              )
                            })}
                          </ListGroup>
                        </>
                      )
                    }

                    )
                  }
                </Card.Body>
              </Card>
            </Row>
    )
}