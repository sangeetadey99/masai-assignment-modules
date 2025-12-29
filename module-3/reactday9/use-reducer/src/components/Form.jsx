import { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  if (state.submitted) {
    return (
      <div>
        <h2>Form Submitted 🎉</h2>
        <p>Name: {state.data.name}</p>
        <p>Email: {state.data.email}</p>
        <p>Username: {state.data.username}</p>

        <button onClick={() => dispatch({ type: "RESET" })}>Fill Again</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Step {state.step}</h2>

      {state.step === 1 && (
        <>
          <input
            placeholder="Enter name"
            value={state.data.name}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "name",
                value: e.target.value,
              })
            }
          />
          <br />

          <input
            placeholder="Enter email"
            value={state.data.email}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "email",
                value: e.target.value,
              })
            }
          />
          <br />

          <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
        </>
      )}

      {state.step === 2 && (
        <>
          <input
            placeholder="Username"
            value={state.data.username}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "username",
                value: e.target.value,
              })
            }
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            value={state.data.password}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_INPUT",
                field: "password",
                value: e.target.value,
              })
            }
          />
          <br />

          <button onClick={() => dispatch({ type: "BACK" })}>Back</button>
          <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
        </>
      )}

      {state.step === 3 && (
        <>
          <h3>Check Details</h3>
          <p>Name: {state.data.name}</p>
          <p>Email: {state.data.email}</p>
          <p>Username: {state.data.username}</p>

          <button onClick={() => dispatch({ type: "BACK" })}>Back</button>
          <button onClick={() => dispatch({ type: "SUBMIT" })}>Submit</button>
        </>
      )}
    </div>
  );
}

export default Form;
