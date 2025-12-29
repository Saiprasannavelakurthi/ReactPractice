import { useReducer } from "react";

/* ---------- Initial State ---------- */
const initialState = {
  step: 1,
  isSubmitted: false,
  formData: {
    name: "",
    email: "",
    username: "",
    password: ""
  }
};

/* ---------- Reducer ---------- */
function reducer(state, action) {
  switch (action.type) {

    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

/* ---------- Component ---------- */
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* ----- After Submit ----- */
  if (state.isSubmitted) {
    return (
      <>
        <h2>Form Submitted</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </>
    );
  }

  return (
    <div>
      <h2>Step {state.step} / 3</h2>

      {/* Step 1 */}
      {state.step === 1 && (
        <>
          <input
            placeholder="Name"
            value={state.formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value
              })
            }
          />

          <input
            placeholder="Email"
            value={state.formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value
              })
            }
          />

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {/* Step 2 */}
      {state.step === 2 && (
        <>
          <input
            placeholder="Username"
            value={state.formData.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={state.formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value
              })
            }
          />

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {/* Step 3 */}
      {state.step === 3 && (
        <>
          <p>Name: {state.formData.name}</p>
          <p>Email: {state.formData.email}</p>
          <p>Username: {state.formData.username}</p>
          <p>Password: {state.formData.password}</p>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}
