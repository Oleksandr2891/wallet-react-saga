import {
  Container,
  Header,
  Segment,
  Statistic,
  StatisticLabel,
  StatisticValue,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Form,
  FormGroup,
  FormInput,
  ButtonGroup,
  Button,
  ButtonOr,
  Checkbox,
} from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header as="h1">WALLET made in Ukraine</Header>
      <Statistic size="small">
        <StatisticLabel>Your Balance:</StatisticLabel>
        <StatisticValue>$ 2,550.53</StatisticValue>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn>
              <Statistic size="tiny" color="blue">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Incoming:
                </Statistic.Label>
                <StatisticValue>$ 1,500.20</StatisticValue>
              </Statistic>
            </GridColumn>
            <GridColumn>
              <Statistic size="tiny" color="orange">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses:
                </Statistic.Label>
                <StatisticValue>$ 435.20</StatisticValue>
              </Statistic>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Header as="h3">History</Header>
      <Segment color="orange">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Something
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $ 10.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="blue">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              My Works
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $ 1000.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="orange">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Things
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $ 60.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="blue">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Freelance
            </GridColumn>
            <GridColumn width={3} textAlign="right">
              $ 600.00
            </GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Header as="h3">Ad new transactions:</Header>
      <Form unstackable>
        <FormGroup>
          <FormInput
            icon="tags"
            width={10}
            label="Description"
            placeholder="New shiny thing"
          />
          <FormInput
            icon="dollar"
            width={3}
            label="Value"
            placeholder="100.00"
            iconPosition="left"
          />
          <Checkbox toggle label="Is expenses" width={3}></Checkbox>
        </FormGroup>
        <ButtonGroup>
          <Button negative>Cancel</Button>
          <ButtonOr />
          <Button primary width={10}>
            Add ...
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;
