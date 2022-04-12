import { useState } from "react";

const ConditionalApp = () => {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <h2>Conditional App</h2>
      <button onClick={() => setCondition(!condition)}>Toggle</button>

      {/*condition ? (
        <h3>Show message in true</h3>
      ) : (
        <h3>Another message in false</h3>
      )*/}

      {/*condition ? <h3>Show message only in true</h3> : null*/}

      {/*condition && <h1>Show message only in true</h1>*/}

      <h1>State value is {condition.toString()}</h1>
    </div>
  );
};

export default ConditionalApp;
