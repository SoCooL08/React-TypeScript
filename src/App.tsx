import Alert from "./components/Alert";
import Calculate from "./components/Calculate";
import Count from "./components/Count";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ListGroup from "./components/ListGroup";
import PassValue from "./components/PassValue";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div>
        <Alert>
          Hello <span>Lume</span>
        </Alert>
        <Input></Input>
        <Calculate x={10} y={20}></Calculate>
        <PassValue></PassValue>
        <Section headingText="Serban section"></Section>
        <Counter></Counter>
      </div>
    </>
  );
}

export default App;
