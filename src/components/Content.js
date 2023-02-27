import Work from './cards/Work';
import Education from './cards/Education';
import Skills from './cards/Skills';
import Projects from './cards/Projects';
import Certifications from './cards/Certifications';
import Achievements from './cards/Achievements';
import Languages from './cards/Languages';
import Hobbies from './cards/Hobbies';
import { Container, Row, Col } from 'react-bootstrap';
import Panel from './cards/Panel';
import Contact from './cards/Contact';
import { useState, useEffect } from 'react';
import Footer from './Footer';

export default function Content({ navHeight, data, imgdata }) {



    const [ContentHeight, setContentHeight] = useState({ left: 0, right: 0 });
    useEffect(() => {
        const setHeight = () => {
            var left_col = 0;
            var right_col = 0;
            Array.from(document.getElementById("RESUME_LEFT").childNodes).forEach((item) => {
                left_col += item.offsetHeight;
            });
            Array.from(document.getElementById("RESUME_RIGHT").childNodes).forEach((item) => {
                right_col += item.offsetHeight;
            });
            setContentHeight({ left: left_col, right: right_col });


        }
        setHeight();
        window.addEventListener('resize', setHeight);
        return () => {
            window.removeEventListener('resize', setHeight);
        }
    }, [data]);


    const components = [{
        Comp: Work,
        data: "work"
    },
    {
        Comp: Education,
        data: "edu"
    },
    {
        Comp: Skills,
        data: "skills"
    }, {
        Comp: Projects,
        data: "projects"
    },
    {
        Comp: Certifications,
        data: "certifications"
    },
    {
        Comp: Achievements,
        data: "achievements"
    }, {
        Comp: Languages,
        data: "languages"
    },
    {
        Comp: Hobbies,
        data: "hobbies"
    }];

    var splitArray = [components.slice(0, 4), components.slice(4)];
    var splitIndex = parseInt(components.length / 2);

    if (Object.keys(data).length !== 0 && (ContentHeight.left !== 0 || ContentHeight.right !== 0)) {
        var height = 0;
        const totalHeight = parseInt((ContentHeight.left + ContentHeight.right) / 2);

        for (var i = 0; i < data.nav.length; i++) {
            height += document.getElementById(data.nav[i].href).offsetHeight;
            if (height > totalHeight) {
                splitIndex = i;
                break;
            }
        }
        const splitElementHeight = document.getElementById(data.nav[i].href).offsetHeight;
        const deltaHeightInclusive = height - totalHeight;
        const deltaHeightExclusive = totalHeight - (height - splitElementHeight);
        splitIndex = (deltaHeightInclusive < deltaHeightExclusive) ? splitIndex + 1 : splitIndex;
        splitIndex = (splitIndex < 0) ? 0 : (splitIndex > components.length) ? components.length : splitIndex;
        splitArray = [components.slice(0, splitIndex), components.slice(splitIndex)];
    }

    return (

        <Container fluid className="resume-body" id="RESUME_BODY" style={{ top: navHeight }}>
            <Row >
                <Col id="home" className='mt-2' xs={12}>
                    <Panel data={data} imgdata={imgdata} />
                </Col>
                <Col className='mt-2' xs={12}>
                    <Contact data={data} />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col xs={12} md={6} id="RESUME_LEFT" className="resume-col-left">

                    {(data && Object.keys(data).length !== 0) ?
                        splitArray[0].map((Item, key) => {
                            return (
                                <Item.Comp key={key} data={data[Item.data]} />
                            )
                        }) : ""
                    }

                </Col>
                <Col xs={12} md={6} id="RESUME_RIGHT" className="resume-col-right">

                    {
                        (data && Object.keys(data).length !== 0) ?
                            splitArray[1].map((Item, key) => {
                                return (
                                    <Item.Comp key={key} data={data[Item.data]} />
                                )
                            }) : ""
                    }

                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}
