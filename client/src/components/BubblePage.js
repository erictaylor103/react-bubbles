import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);

  useEffect(() =>{
    axiosWithAuth().get('/api/colors')
      .then(res => {
        console.log(res.data)
        setColorList(res.data)
        
      })
      .catch(error => {
        console.log(error)
      })
  }, [props])

  return (
    <div>
      <ColorList props={props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
