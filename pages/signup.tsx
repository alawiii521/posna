import React, { useState } from "react";
import styled from "styled-components";
import Status from "http-status";
import { PortionCssProp } from "@portion/style";

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
`;

const Error = styled.div`
  color: var(${PortionCssProp.color.red.primary.name});
`;

export default function Signup(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ property: string; message: string }[]>(
    []
  );

  async function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setErrors([]);

    const body = JSON.stringify({ username, password });
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (res.status === Status.BAD_REQUEST) {
      const json = await res.json();
      setErrors(json.error);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <Form>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Usernmare"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleLogin} type="submit">
          Signup
        </button>
      </Form>
      {errors &&
        errors.map((error) => (
          <Error key={error.property + error.message}>
            <b>{error.property}: </b>
            <span>{error.message}</span>
          </Error>
        ))}
    </div>
  );
}
