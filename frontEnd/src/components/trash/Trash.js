import React from "react";
import "./Trash.css";
import SideBar from "../sidebar/SideBar";
import { useQuery } from "react-query";
import axios from "axios";
import { useMutation } from "react-query";
import { BsTrash3 } from "react-icons/bs";
import { queryClient } from "../..";

const Trash = () => {
  ///////////get all trash/////////////

  const { data } = useQuery(
    "get-trash",
    async () => {
      return await axios.get("http://localhost:4000/getAllTrashContent", {
        withCredentials: true,
      });
    },
    {
      onSuccess: (data) => {
        return console.log(data);
      },
    }
  );

  //   const trash = data && data;

  /////////delete permanently///////////////

  const mutationPermenantDelete = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(`http://localhost:4000/contents/delete/${id}`, {
        withCredentials: true,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-trash"] });
      console.log("permenant dlt ", data);
    },
  });

  const handlePermenantDelete = (e, id) => {
    e.preventDefault();
    mutationPermenantDelete.mutate(id);
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="section">
        {data && data.data.contents.length > 0 ? (
          <>
            <div className="cardParent">
              {data.data.contents.map((item) => {
                return (
                  <div className="card">
                    <div
                      className="new"
                      style={{
                        marginBottom: "10px",
                        height: "100px",
                        overflow: "hidden",
                      }}
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
                          onClick={(e) => handlePermenantDelete(e, item._id)}
                        />
                      </i>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="bin">
            <div>
              <svg
                aria-hidden="true"
                width="74"
                height="108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M22 54h40l-2.83 45.39A5.99 5.99 0 0 1 53.2 105H30.8a5.99 5.99 0 0 1-5.97-5.61L22 54Z"
                    fill="#B5DDE9"
                    stroke="#1F243C"
                    stroke-width="1.2"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M42 71v24M52 71v24"
                    stroke="#1F243C"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.92 105h-.11a5.99 5.99 0 0 1-5.98-5.62l-1.98-32.4c.8-.24 1.63-.32 2.45-.25 6.6.57 11.1 11.06 10.03 23.44-.5 5.82-2.13 11.01-4.41 14.83Z"
                    fill="#1F243C"
                  ></path>
                  <path
                    d="M30.92 105v.6a.6.6 0 0 0 .51-.3l-.51-.3Zm-6.09-5.62.6-.04-.6.04Zm-1.98-32.4-.16-.58a.6.6 0 0 0-.43.61l.6-.03Zm2.45-.25.05-.6-.05.6Zm10.03 23.44-.6-.05.6.05Zm-4.41 14.23h-.11v1.2h.1v-1.2Zm-.11 0a5.39 5.39 0 0 1-5.38-5.06l-1.2.08a6.58 6.58 0 0 0 6.58 6.18v-1.2Zm-5.38-5.06-1.98-32.4-1.2.07 1.99 32.4 1.2-.07Zm-2.41-31.79c.74-.21 1.48-.29 2.23-.23l.1-1.19c-.9-.08-1.8.02-2.66.27l.33 1.15Zm2.23-.23c2.98.26 5.61 2.77 7.4 6.94 1.76 4.13 2.61 9.75 2.09 15.86l1.19.1c.54-6.26-.33-12.09-2.19-16.43-1.85-4.33-4.76-7.35-8.39-7.66l-.1 1.2Zm9.49 22.8c-.5 5.74-2.11 10.85-4.34 14.57l1.03.62c2.33-3.91 4-9.2 4.5-15.09l-1.2-.1Z"
                    fill="#1F243C"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.92 67.06c-4.54 2.05-9.25 7.86-12.04 15.53-2.79 7.67-2.92 15.15-.76 19.64l-.78 2.15 4.7 1.7c5.7 2.09 13.55-5.06 17.51-15.96 3.97-10.9 2.56-21.42-3.15-23.5l-4.7-1.7-.78 2.14Z"
                    fill="#8ECBDE"
                  ></path>
                  <path
                    d="m20.92 67.06.24.55a.6.6 0 0 0 .32-.34l-.56-.2Zm-12.8 35.17.56.2a.6.6 0 0 0-.02-.46l-.54.26Zm-.78 2.15-.57-.2a.6.6 0 0 0 .36.76l.2-.56ZM21.7 64.9l.2-.56a.6.6 0 0 0-.76.36l.56.2ZM9.44 82.8c2.77-7.6 7.4-13.24 11.72-15.2l-.49-1.08c-4.74 2.14-9.53 8.12-12.35 15.87l1.12.4Zm-.78 19.17c-2.06-4.28-1.98-11.58.78-19.17l-1.12-.41c-2.82 7.74-3 15.4-.74 20.1l1.08-.52Zm-.76 2.61.78-2.15-1.12-.4-.79 2.14 1.13.41Zm4.34.95-4.7-1.71-.4 1.12 4.69 1.71.41-1.12ZM28.99 89.9c-1.96 5.38-4.86 9.8-7.95 12.62-3.1 2.83-6.26 3.92-8.8 3l-.41 1.12c3.17 1.15 6.79-.3 10.02-3.24 3.26-2.97 6.26-7.57 8.27-13.09l-1.13-.4Zm-2.8-22.73c2.55.93 4.26 3.8 4.82 7.96.56 4.14-.06 9.4-2.02 14.77l1.13.41c2-5.52 2.66-10.97 2.08-15.34-.58-4.33-2.43-7.77-5.6-8.92l-.4 1.12Zm-4.7-1.7 4.7 1.7.41-1.12-4.7-1.71-.4 1.12Zm0 1.79.77-2.15-1.12-.41-.78 2.15 1.12.4Z"
                    fill="#1F243C"
                  ></path>
                  <ellipse
                    cx="14.52"
                    cy="84.64"
                    rx="11"
                    ry="21"
                    transform="rotate(-160 14.52 84.64)"
                    fill="#B5DDE9"
                    stroke="#1F243C"
                    stroke-width="1.2"
                    stroke-linejoin="round"
                  ></ellipse>
                  <path
                    d="m17.51 79.35-3.76-1.37-4.1 11.28 3.76 1.37"
                    stroke="#1F243C"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20 56a3 3 0 0 1 3-3h38a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H23a3 3 0 0 1-3-3v-2Z"
                    fill="#B5DDE9"
                    stroke="#1F243C"
                    stroke-width="1.2"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29 1.5c-.31 0-.62.04-.9.12a.5.5 0 0 1-.26-.97C28.2.55 28.6.5 29 .5h1.08a.5.5 0 1 1 0 1H29Zm4.92-.5c0-.28.22-.5.5-.5h2.16a.5.5 0 1 1 0 1h-2.16a.5.5 0 0 1-.5-.5Zm6.5 0c0-.28.22-.5.5-.5h2.16a.5.5 0 1 1 0 1h-2.16a.5.5 0 0 1-.5-.5Zm6.5 0c0-.28.22-.5.5-.5h2.16a.5.5 0 1 1 0 1h-2.16a.5.5 0 0 1-.5-.5Zm6.5 0c0-.28.22-.5.5-.5H55c.4 0 .8.05 1.16.15a.5.5 0 0 1-.25.97A3.5 3.5 0 0 0 55 1.5h-1.08a.5.5 0 0 1-.5-.5Zm5.32 2.48a.5.5 0 0 1 .6.36c.1.37.16.76.16 1.16v1.07a.5.5 0 0 1-1 0V5c0-.31-.04-.62-.12-.9a.5.5 0 0 1 .36-.62Zm-33.48 0a.5.5 0 0 1 .36.61c-.08.3-.12.6-.12.91v1.07a.5.5 0 0 1-1 0V5c0-.4.05-.8.15-1.16a.5.5 0 0 1 .61-.36ZM59 9.83c.28 0 .5.23.5.5v2.14a.5.5 0 0 1-1 0v-2.14c0-.27.22-.5.5-.5Zm-34 0c.28 0 .5.23.5.5v2.14a.5.5 0 0 1-1 0v-2.14c0-.27.22-.5.5-.5Zm34 6.4c.28 0 .5.23.5.5v2.14a.5.5 0 0 1-1 0v-2.14c0-.27.22-.5.5-.5Zm-34 0c.28 0 .5.23.5.5v2.14a.5.5 0 0 1-1 0v-2.14c0-.27.22-.5.5-.5Zm0 6.4c.28 0 .5.23.5.5v2.14a.5.5 0 0 1-1 0v-2.14c0-.27.22-.5.5-.5Zm34 0c.28 0 .5.23.5.5v2.14a.5.5 0 0 1-1 0v-2.14c0-.27.22-.5.5-.5Zm-34 6.4c.28 0 .5.23.5.5v2.14a.5.5 0 0 1-1 0v-2.14c0-.27.22-.5.5-.5Zm34 0c.28 0 .5.23.5.5v2.14a.5.5 0 0 1-1 0v-2.14c0-.27.22-.5.5-.5Zm0 6.4c.28 0 .5.23.5.5V37c0 .4-.05.8-.15 1.16a.5.5 0 0 1-.97-.25c.08-.3.12-.6.12-.91v-1.07c0-.27.22-.5.5-.5Zm-34 0c.28 0 .5.23.5.5V37c0 .31.04.62.12.9a.5.5 0 1 1-.97.26A4.5 4.5 0 0 1 24.5 37v-1.07c0-.27.22-.5.5-.5Zm2.48 5.3a.5.5 0 0 1 .61-.35c.3.08.6.12.91.12h1.08a.5.5 0 1 1 0 1H29c-.4 0-.8-.05-1.16-.15a.5.5 0 0 1-.36-.61Zm29.04 0a.5.5 0 0 1-.36.62c-.37.1-.76.15-1.16.15h-1.08a.5.5 0 1 1 0-1H55c.31 0 .62-.04.9-.12a.5.5 0 0 1 .62.36Zm-22.6.27c0-.28.22-.5.5-.5h2.16a.5.5 0 1 1 0 1h-2.16a.5.5 0 0 1-.5-.5Zm6.5 0c0-.28.22-.5.5-.5h2.16a.5.5 0 1 1 0 1h-2.16a.5.5 0 0 1-.5-.5Zm6.5 0c0-.28.22-.5.5-.5h2.16a.5.5 0 1 1 0 1h-2.16a.5.5 0 0 1-.5-.5Z"
                    fill="#1F243C"
                  ></path>
                  <path
                    d="M32 10h7.14M32 19h20M32 28h20"
                    stroke="#1F243C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h74v108H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2>Trash is empty</h2>
            <p>Deleted documents can be found here for 30 days.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trash;
