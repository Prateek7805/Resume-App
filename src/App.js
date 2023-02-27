
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbaar from './components/Navbar';

import { useEffect, useState } from 'react';
import Content from './components/Content';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import NotFoundPage from './components/NotFoundPage';

function App() {

  const { id } = useParams();
  const [loading, setLoading] = useState("yes");
  const [data, setData] = useState({});
  const [imgdata, setImgdata] = useState({
    src: "",
    type: "",
    loaded: false
  });

  const [navHeight, setNavHeight] = useState(20);




  useEffect(() => {
    const getData = async () => {
      try {
        const url = process.env.REACT_APP_SERVER_URL;

        const dataResp = await fetch(`${url}/resumedata?id=${id}`);
        if(!dataResp.ok){
          throw new Error(`Error in fetching data for the given ID : ${id}`);
        }
        const jsonData = await dataResp.json();
        setData(jsonData);
        setLoading("success");


        const picData = await fetch(`${url}/profilepic?id=${id}`);
        if(!picData.ok){
          throw new Error(`Error in fetching data for the given ID : ${id}`);
        }
        const picDataJson = await picData.json();


        setImgdata((prev) => {
          return {
            ...prev,
            src: picDataJson.imgdata,
            type: picDataJson.type,
            loaded: true
          }
        });
      } catch (err) {
        setLoading("error");
        console.log(err);
      }


    }

    getData();
  }, []);

  switch (loading) {
    case 'yes': return (
      <div className='d-flex justify-content-center align-items-center' style={{ width: '100vw', height: '100vh' }}>
        <Spinner />
      </div>
    )
    case 'success': return (
      <div className="wrapper">
        <Navbaar dimension={[navHeight, setNavHeight]} data={data}></Navbaar>
        <Content navHeight={navHeight} data={data} imgdata={imgdata} />
      </div>
    )
    case 'error': return (
      <NotFoundPage/>
    )
    default:
      return null;
  }
}

export default App;
