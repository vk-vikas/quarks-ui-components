import { Button, Input } from "quarks-ui-components";

function App() {
  return (
    <div>
      <div className="m-5">
        <Input
          label="username"
          isInvalid={true}
          errorMessage="incorrect"
          isRequired
        />
        <Button variant="outline_dark_red" movement="active">
          test
        </Button>
      </div>
    </div>
  );
}

export default App;
