import React, { useEffect, useState } from "react";
import ContactRow from "./ContactRow";
import "../styles/ContactList.css";

//final variable && base URL API
const URL_API = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];
// console.log(dummyContacts);

const ContactList = ({ setSelectedContactId }) => {
  //useState declaration
  const [contacts, setContacts] = useState([]);
  //   const [contactId, setContactId] = useState(null);

  //   console.log(contacts);

  useEffect(() => {
    //declare async function before calling it
    //because useEffect should not immediately call the async function as part of its call-back function
    const fetchContacts = async () => {
      try {
        //fetch data
        const response = await fetch(URL_API);
        // console.log(response);

        //parse the json
        const data = await response.json();
        // console.log(data);

        //useState contacts with fetched data
        setContacts(data);

        //catches any error with the fetch API
      } catch (error) {
        console.error(error);
      }
    };
    //call the async fetch
    fetchContacts();
    //nothing in dependancy array
  }, []);

  return (
    <div>
      <table className="table-info">
        <thead>
          <tr>
            <th colSpan={3}>Contact List</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
