import {
  Container,
  Header,
  Statistic,
  StatisticLabel,
  StatisticValue,
} from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header as="h1">WALLET made in Ukraine</Header>
      <Statistic size="small">
        <StatisticLabel>Your Balance:</StatisticLabel>
        <StatisticValue>$ 2,550.53</StatisticValue>
      </Statistic>
    </Container>
  );
}

export default App;
