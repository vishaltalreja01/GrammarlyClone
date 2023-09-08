import React, { useState } from "react";
import "./Grammarly.css";
import { BsDot, BsArrowRightShort } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { useMutation } from "react-query";
import axios from "axios";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import {queryClient} from "../../index";

const Grammarly = () => {
  const [expand, setExpand] = useState(false);
  const [dissapear, setDissapear] = useState(false);
  const [value,setValue] = useState()

const location = useLocation();
console.log(location);

const { data, isLoading } = useQuery("getOne-text", async () => {
  return await axios.get(`http://localhost:4000/content/getOne/${location.state.id}`,{

  withCredentials:true,

  });
},{
  onSuccess: (data) => {
   setValue(data.data.contents[0].text)
  }
})


  ////////////update text on ervery Change ////////////////

  

  const mutationSaveNewText = useMutation({
    mutationFn: async(text) => {
      return await axios.put(`http://localhost:4000/content/update/${location.state.id}`, {
        text: text,
        
      },{
        withCredentials:true
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['getAll-text'] })
      console.log("onchange ",data);
      
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const handleExpand = (e) => {
    e.preventDefault();
    setExpand(true);
    setDissapear(true);
  };

  const handleCross = (e) => {
    e.preventDefault();
    setExpand(false);
  };

  const handleSaveNewText = (e) => {
    e.preventDefault();
setValue(e.target.value);
    mutationSaveNewText.mutate(value);
    
  };

  return (
    <div className="parentSection">
      <div className="leftSection">
        <GrammarlyEditorPlugin clientId="client_MC9CT6Q6FAsQv7rfMQBgyU">
          <textarea
            className="area"
            value={value}
            name=""
            id=""
            cols="30"
            rows="20"
            placeholder="Type or paste(Ctrl + V) your text here ..."
            onChange={(e)=>handleSaveNewText(e)}
            
          >

          </textarea>
        </GrammarlyEditorPlugin>
      </div>

      <div className="rightSection">
        <h5>All Suggestions</h5>
        <div className="suggestions">
          <div
            className={`suggestion ${dissapear ? "disappear" : " "}`}
            onClick={handleExpand}
          >
            <i>
              <BsDot size={25} color="red" />
            </i>
            <p style={{ fontSize: "14px" }}>Mistake</p>
            <p style={{ fontSize: "12px", color: "grey" }}>
              Correct your spelling
            </p>
          </div>
          <div className={`suggestionExpand ${expand ? "expand" : " "}`}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <i>
                <BsDot size={25} color="red" />
              </i>

              <p style={{ fontSize: "12px", color: "grey" }}>Spelling</p>
              <i
                style={{ paddingLeft: "240px", cursor: "pointer" }}
                onClick={handleCross}
              >
                <RxCrossCircled size={20} />
              </i>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                gap: "5px",
              }}
            >
              <span
                style={{ fontSize: "14px", textDecoration: "line-through red" }}
              >
                Mistke
              </span>
              <span>
                <i>
                  <BsArrowRightShort size={20} color="grey" />
                </i>
              </span>
              <span className="correction">Mistake</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammarly;
