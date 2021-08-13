import React, { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const body = JSON.stringify({ username, password });
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
  }

  return (
    <div>
      <h1>Signup</h1>
      <form>
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
      </form>
    </div>
  );
}
