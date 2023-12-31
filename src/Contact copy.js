// import { Base64 } from "js-base64";
// import Toast from "react-bootstrap/Toast";
// import { useEffect, useState } from "react";
// import { useToast, useDisclosure } from "@chakra-ui/core";
// import SignIn from "./SignIn";

// const Contact = () => {
//   const [show, setShow] = useState(true);
//   const successStr = "Sent!";

//   const [isAuthorize, setIsAuthorize] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     const initialGoogleConnection = async () => {
//       await window.gapi.load("client:auth2", {
//         callback: () => {
//           // Handle gapi.client initialization.
//           window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);

//           window.gapi.auth.authorize(
//             {
//               client_id: process.env.REACT_APP_CLIENT_ID,
//               scope: process.env.REACT_APP_SCOPES,
//               immediate: true,
//             },
//             handleAuthResult
//           );
//         },
//         onerror: function () {
//           // Handle loading error.
//           console.log("gapi.client failed to load!");
//         },
//         timeout: 5000, // 5 seconds.
//         ontimeout: function () {
//           // Handle timeout.
//           console.log("gapi.client could not load in a timely manner!");
//         },
//       });
//     };

//     try {
//       initialGoogleConnection();
//     } catch (error) {
//       console.log("error: ", error);
//     }

//     setLoading(false);
//     // eslint-disable-next-line
//   }, []);

//   const handleAuthResult = (authResult) => {
//     if (authResult && !authResult.error) {
//       console.log("Sign-in successful");
//       // setIsAuthorize(true);
//       loadClient();
//     } else {
//       console.error("handleAuthResult...");
//       console.error(authResult);
//     }
//     setLoading(false);
//   };

//   const handleAuthClick = () => {
//     setLoading(true);
//     return window.gapi.auth.authorize(
//       {
//         client_id: process.env.REACT_APP_CLIENT_ID,
//         scope: process.env.REACT_APP_SCOPES,
//         immediate: false,
//       },
//       handleAuthResult
//     );
//   };

//   const loadClient = () => {
//     return window.gapi.client.load("gmail", "v1").then(
//       (res) => {
//         console.log("gapi client loaded for API");
//         setIsAuthorize(true);
//         // getMessages();
//       },
//       (err) => {
//         console.error("Error loading window.gapi client for API", err);
//       }
//     );
//   };

//   return (
//     <div>
//       {isAuthorize ? (
//         <div>yes</div>
//       ) : (
//         <SignIn loading={loading} handleAuthClick={handleAuthClick} />
//       )}
//     </div>
//   );

//   //   const { isOpen, onOpen, onClose } = useDisclosure();
//   //   const toast = useToast();

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();
//   //     const form = e.target;
//   //     const emailTo = "lrmirhan@gmail.com";
//   //     const subject = "Apex Intereset";
//   //     const message = form.elements["message"].value;

//   //     await loadClient();

//   //     if (isAuthorize) {
//   //       // Send Simple Mail && Display Toast
//   //       sendMessage(
//   //         {
//   //           To: emailTo,
//   //           Subject: subject,
//   //         },
//   //         message,
//   //         displayToast
//   //       );

//   //       onClose();
//   //     } else handleAuthClick();
//   //   };

//   //   const sendMessage = (headers_obj, message, callback) => {
//   //     let email = "";

//   //     for (var header in headers_obj)
//   //       email += header += ": " + headers_obj[header] + "\r\n";

//   //     email += "\r\n" + message;

//   //     const base64EncodedEmail = Base64.encodeURI(email);
//   //     const request = window.gapi.client.gmail.users.messages.send({
//   //       userId: "me",
//   //       resource: {
//   //         raw: base64EncodedEmail,
//   //       },
//   //     });
//   //     request.execute(callback);
//   //   };

//   //   const displayToast = ({ result }) => {
//   //     if (result.labelIds.indexOf("SENT") !== -1) {
//   //       toast({
//   //         title: "Message Sent.",
//   //         description: "We've Sent your email.",
//   //         status: "success",
//   //         duration: 9000,
//   //         isClosable: true,
//   //       });
//   //     } else {
//   //       toast({
//   //         title: "An error occurred.",
//   //         description: "Unable to sent your email.",
//   //         status: "error",
//   //         duration: 9000,
//   //         isClosable: true,
//   //       });
//   //     }
//   //   };

//   //   return (
//   //     <div className="contact">
//   //       <h1>Contact</h1>
//   //       <form onSubmit={handleSubmit}>
//   //         <label>Name: </label>
//   //         <input type="text"></input>

//   //         <label>Student name: </label>
//   //         <input type="text"></input>

//   //         <label>Contact info: </label>
//   //         <label>Email: </label>
//   //         <input type="email"></input>
//   //         <label>Phone number: </label>
//   //         <input type="tel"></input>

//   //         <label>Additional info: </label>
//   //         <textarea id="message"></textarea>

//   //         <button>Submit</button>
//   //       </form>
//   //     </div>
//   //   );
// };

// export default Contact;
