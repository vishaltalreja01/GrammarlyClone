import React from "react";
import "./Dashboard.css";
import SideBar from "../sidebar/SideBar.js";
import { AiOutlineSearch, AiOutlineFile } from "react-icons/ai";
import { RiUpload2Fill } from "react-icons/ri";
import { BsTrash3 } from "react-icons/bs";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { queryClient } from "../..";

const Dashboard = () => {
  const navigate = useNavigate();

  ////////////get all saved text ////////////////

  const { data, isLoading } = useQuery("getAll-text", async () => {
    return await axios.get("http://localhost:4000/getAll", {
      withCredentials: true,
    });
  });

  const savedText = data && data;
  console.log("Saved Text", savedText);

  ////////////Create new document ////////////////

  const mutationNewDocument = useMutation({
    mutationFn: async () => {
      return await axios.post(
        "http://localhost:4000/createContent",
        {
          text: "new dummy Text Added for testing",
        },
        {
          withCredentials: true,
        }
      );
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });

  ////////////delete -> send to trash ////////////////

  const mutationDelete = useMutation({
    mutationFn: async (id) => {
      return await axios.put(
        `http://localhost:4000/content/moveContentToTrash/${id}`,{},
        {
          withCredentials: true,
        }
      );
    },
    onSuccess:(data) => {
      queryClient.invalidateQueries({queryKey:["getAll-text"]})
      console.log('trash can data',data);
    }
  });

  const handleGetText = (e, id) => {
    e.preventDefault();
    navigate("/grammarly", {
      state: {
        id,
      },
    });
  };

  const handleNewDocument = (e) => {
    e.preventDefault();
    mutationNewDocument.mutate();
    navigate("/grammarly");
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    mutationDelete.mutate(id);
  };
  return (
    <div style={{ width: "100%", display: "flex", color: "#8f8f8f" }}>
      <SideBar />
      <div className="section">
        <div className="search">
          <input
            className="inp"
            type="search"
            placeholder="Search..."
            style={{}}
          />
          <i>
            <AiOutlineSearch />
          </i>
        </div>

        <div className="cards">
          <div className="staticCard" onClick={handleNewDocument}>
            <div className="new" style={{ marginBottom: "10px" }}>
              <i>
                <AiOutlineFile size={35} color="#f1768a" />
              </i>
              <h3 style={{ marginTop: "10px", fontWeight: "lighter" }}>New</h3>
            </div>

            {/* <div
              className="upload"
              style={{
                marginTop: "15px",
                paddingBlock: "10px",
              }}
            >
              <i>
                <RiUpload2Fill size={20} color="#f1768a" />
              </i>
              <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                Upload
              </span>
            </div> */}
          </div>

          {data &&
            data.data.contents.map((item) => {
              return (
                <div className="card">
                  <div
                    className="new"
                    style={{
                      marginBottom: "10px",
                      height: "100px",
                      overflow: "hidden",
                    }}
                    onClick={(e) => handleGetText(e, item._id)}
                  >
                    <h4
                      style={{
                        marginTop: "10px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Saved Text
                    </h4>
                    <p style={{ fontSize: "12px" }}>{item.text}</p>
                  </div>

                  <div
                    className="uploadS"
                    style={{
                      marginTop: "15px",
                      paddingBlock: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        paddingRight: "65px",
                      }}
                    >
                      36
                    </span>
                    <i>
                      <BsTrash3
                        size={20}
                        color="#f1768a"
                        onClick={(e) => handleDelete(e, item._id)}
                      />
                    </i>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
