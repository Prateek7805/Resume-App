
import { Card } from "react-bootstrap";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = ({ data }) => {
    return (
        <Card >
            <Card.Body>
                <div style={{ width: "100%", height: "100%" }} className="d-flex justify-content-md-evenly flex-column flex-sm-column flex-md-row flex-wrap">
                    <div className="d-flex align-items-center py-sm-0 py-2">
                        <MailOutlineIcon sx={{color: '#bb001b'}}/>
                        <a className="d-flex  ps-1 pe-1" href={`mailto:${data.mail}`} style={{ textDecoration: "none" }}>
                            {data.mail}
                        </a>
                    </div>
                    <div className="d-flex align-items-center py-sm-0 py-2">
                        <PhoneIphoneIcon color="action"/>
                        <a className="d-flex  ps-1 pe-1" href={`tel:${data.phone}`} style={{ textDecoration: "none" }}>
                            {data.phone}
                        </a>
                    </div>
                    <div className="d-flex align-items-center py-sm-0 py-2">
                        <LinkedInIcon color="primary"/>
                        <a className="d-flex  ps-1 pe-1" href={data.linkedIn} style={{ textDecoration: "none" }}>
                            LinkedIn
                        </a>
                    </div>
                    <div className="d-flex align-items-center py-sm-0 py-2">
                        <GitHubIcon />
                        <a className="d-flex  ps-1 pe-1" href={data.github} style={{ textDecoration: "none" }}>
                            Github
                        </a>
                    </div>
                    <div className="d-flex align-items-center py-sm-0 py-2">
                        <LocationOnIcon sx={{color : '#4D455D'}}/>
                        <span className="d-flex  ps-1 pe-1">
                            {data.location}
                        </span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Contact;
