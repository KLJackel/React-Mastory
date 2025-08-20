import { useState } from "react";
import Alert from "./components/Alert"
import Button from "./components/Button/Button"
import ListGroup from "./components/ListGroup/ListGroup";


function App() {
  const [alertVisible, setAlertVisibility] = useState(false)

    return (
      <>
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
      <ListGroup items={['Tokyo', 'Paris', 'London']} heading={"Cities"} onSelectItem={function (item: string): void {
            throw new Error("Function not implemented.");
          } }>
      </ListGroup>
    </div>
    </>
  )
}


export default App;