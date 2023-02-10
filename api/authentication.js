import React from "react";
import AuthForm from "../components/AuthForm";

const users = [
  { mail: "test@test.fr", password: "test", nickName: "test" },
  { mail: "admin@test.fr", password: "admin", nickName: "admin" },
  { mail: "jo@ensc.fr", password: "admin", nickName: "Joseph" },
];

// Return null or the authenticated user
const authenticateUser = (mail, password) => {
  return (
    // Search for the first user matching login and password
    users.find((u) => u.mail === mail && u.password === password) || null
  );
};

export default authenticateUser;
