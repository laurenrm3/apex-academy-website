import { Base64 } from "js-base64";
import Toast from "react-bootstrap/Toast";
import { useEffect, useState } from "react";
import { useToast, useDisclosure } from "@chakra-ui/core";
import SignIn from "./SignIn";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text"></input>

        <label>Student name: </label>
        <input type="text"></input>

        <label>Contact info: </label>
        <label>Email: </label>
        <input type="email"></input>
        <label>Phone number: </label>
        <input type="tel"></input>

        <label>Additional info: </label>
        <textarea id="message"></textarea>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
