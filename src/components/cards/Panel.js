import { Card} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
const Panel = ({data, imgdata})=>{
    return (

        <Card>
            <Card.Body style={{display:"flex", flexDirection: "row"}}>
                <div className="d-flex flex-column  flex-sm-row justify-content-start align-items-center align-items-sm-start">
                    <div className="d-flex justify-content-center align-items-center panel-image  me-sm-2 me-lg-3">
                        {
                            (imgdata.loaded)? 
                            (<img src={`data:image/${imgdata.type};base64,${imgdata.src}`} className="rounded" alt="Display Picture"/>)
                            :
                            <Spinner />
                        }
                        
                        
                    </div>
                    <div className="panel-data mt-3 mt-sm-0">
                        <Card.Title className="text-center text-sm-start">{data.name}</Card.Title>
                        <Card.Subtitle className="text-center text-sm-start" style={{margin: 0}}>{data.jobTitle}</Card.Subtitle>
                        <Card.Text  className="text-center text-sm-start" style={{marginTop: '10px', fontSize: "15px"}}>{data.Objective}</Card.Text>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    )
}

export default Panel;