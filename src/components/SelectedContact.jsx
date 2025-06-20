import React, { useEffect, useState } from "react";
import "../styles/ContactList.css";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contactDetails, setContactDetails] = useState("");

  //useEffect for fetch data from API
  useEffect(() => {
    const fetchSingleContact = async () => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        // console.log(response);

        const data = await response.json();
        console.log(data);

        //(data) single contact is setContactDetails
        setContactDetails(data);
        console.log(contactDetails);

        //catch any error because of fetching from API
      } catch (error) {
        console.log(error);
      }
    };
    //call fetch
    fetchSingleContact();
    //dependancy array
  }, []);

  return (
    <div>
      <table className="table-info">
        <thead>
          <tr>
            <th colSpan={2}>Contact Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{contactDetails.name}</td>
          </tr>
          <tr>
            <th>email:</th>
            <td>{contactDetails.email}</td>
          </tr>
          <tr>
            <th>username:</th>
            <td>{contactDetails.username}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setSelectedContactId(null)}>Back to Lists</button>
    </div>
  );
};

export default SelectedContact;
