
const allData = {
    name: "Prateek Mahajan",
    jobTitle: "Technology Consultant",
    phone: "9483792774",
    location: "Belagavi, Karnataka",
    mail : "prateekm7805@gmail.com",
    linkedIn : "https://www.linkedin.com/in/prateek7805",
    github: "https://github.com/prateek7805",
    Objective: `Currently working as Associate 2 with a cumulative 2 years of experience in Oracle Cloud Applications. I have
    developed and managed multiple Integrations throughout my career. I am self-motivated, a quick learner, and
    committed to integrity and professionalism.`,
    nav: [
        {
            title: "WORK EXPERIENCE",
            href: "work"
        }, {
            title: "EDUCATION",
            href: "edu"
        }, {
            title: "SKILLS",
            href: "skills"
        }, {
            title: "PROJECTS",
            href: "projects"
        }, {
            title: "CERTIFICATIONS",
            href: "certifications"
        }, {
            title: "ACHIEVEMENTS",
            href: "achievements"
        }, {
            title: "LANGUAGES",
            href: "languages"
        }, {
            title: "HOBBIES",
            href: "hobbies",
        }],
    work:
        {
            title: "WORK EXPERIENCE",
            href: "work",
            content: [{
                jobTitle: "Associate 2",
                orgName: "PricewaterhouseCoopers (PwC)",
                location: "Bengaluru, India",
                fromDate: "Aug 2022",
                toDate: "",
                points: [
                    "Developed and managed multiple FBDI Integrations in Fixed Assets and Procurement.",
                    "Developed Event Driven Callbacks for the FBDI Integration to reduce the Integration Runtime.",
                    "Managed Error Handling frameworks in OIC and worked on Oracle Fusion Middleware.",
                    "Developed JavaScript function libraries."
                ]
            },
            {
                jobTitle: "Associate",
                orgName: "PricewaterhouseCoopers (PwC)",
                location: "Bengaluru, India",
                fromDate: "Aug 2021",
                toDate: "Aug 2022",
                points: [
                    "Oracle Integration Cloud developer.",
                    "Developed and managed 15+ OIC integrations.",
                    "Worked with BI Reporting, Oracle REST API/ SOAP Services, and managed PLSQL Procedures.",
                    "Created and managed Scheduled ESS Jobs."
                ]
            },
            {
                jobTitle: "Intern",
                orgName: "PricewaterhouseCoopers (PwC)",
                location: "Bengaluru, India",
                fromDate: "Mar 2021",
                toDate: "Aug 2021",
                points: [
                    "Created App Driven/ Scheduled Integrations.",
                    "Worked with UI-Path, Postman, SOAP UI, Jira, GIT, etc.",
                    "Worked on OIC Insights, SFTP, and Oracle ATP databases."
                ]
            }
            ]
        },
    edu : {
            title: "EDUCATION",
            href: "edu",
            content: [
                {
                    course: "Bachelor of Engineering in E&C",
                    institution: "Gogte Institute of Technology",
                    location: "Belagavi",
                    fromDate: "2017",
                    toDate: "2021",
                },
                {
                    course: "PUC/12th - Science",
                    institution: "K.L.E. Society’s Raja Lakhamagouda Science Institute",
                    location: "Belagavi",
                    fromDate: "2015",
                    toDate: "2017",
                }
            ]
        },
    skills : {
            title: "SKILLS",
            href: "skills",
            content: [{
                type: "Programming",
                skillset: ["JavaScript", "python", "C/C++", "Java", "Matlab", "PLSQL", "XSLT."]
            },
            {
                type: "Web Development",
                skillset: ["React", "HTML", "CSS", "JavaScript", "JSON/XML", "Bootstrap", "ATP Databases"]
            }
            ]
        },
    projects : {
            title: "PROJECTS",
            href: "projects",
            content: [{
                title: "RC car based on websockets",
                desc: "Wi-Fi controlled Car which hosts an interactive interface built using HTML, CSS, and VanillaJS and is controlled in real-time using the WebSockets protocol, the Car is programmed using embedded C++.",
                demo: ""
            },
            {
                title: "Web interface for generating 8x8 LED Matrix graphics",
                desc: "A lightweight web interface to design pixel graphics for 8x8 led matrix display, designed using HTML, CSS, and vanillaJS employing touch-events.",
                demo: "https://prateek7805.github.io/clm-led-generator/"
            },
            {
                title: "Wi-Fi controlled camera car",
                desc: "Wi-Fi controlled car using ESP32Cam programmed using the ESP32 SDK in C++ which hosts a web interface designed in HTML, CSS, and JS used in speed, direction control and to view the video feed in real-time.",
                demo: ""
            },

            ]
        },
    certifications : {
            title: "CERTIFICATIONS",
            href: "certifications",
            content: [

                {
                    title: "HTML, CSS, and Javascript for Web Developers",
                    platform: "Coursera"
                },
                {
                    title: "Object Oriented Programming in JavaScript",
                    platform: "Coursera"
                }
            ]
        },
    achievements: {
            title: "ACHIEVEMENTS",
            href: "achievements",
            content: [
                {
                    title: `Selected and Presented a paper “Precision actuator control of on/off type solenoids” at IEEE I2CT in Pune`
                },
                {
                    title: `Secured 1’st place in “Technocrax” in AVALANCHE 2018, KLS GIT`
                },
                {
                    title: `Secured 1’st place in “PyRapid” in AVALANCHE 2020, KLS GIT`
                },
                {
                    title: `Secured 1’st place in “EC hackathon” in AVALANCHE 2018, KLS GIT`
                },
                {
                    title: `Secured 1’st place in “Micromatics” in AVALANCHE 2020, KLS GIT`
                },
                {
                    title: `Smart Automobile Management System - project selected under NAIN 2018-2019.`
                }

            ]
        },
    languages : {
            title: "LANGUAGES",
            href: "languages",
            content: [
                {
                    language: "English",
                    proficiency: 5
                }
            ]
        },
    hobbies : {
            title: "HOBBIES",
            href: "hobbies",
            content: [
                "PCB Design",
                "Making electronic circuits",
                "Swimming"
            ]
        }
    
};

export default allData;