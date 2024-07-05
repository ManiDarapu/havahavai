import {Component} from 'react'
import './index.css'
import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
  Button,
  ActionButton,
  Tooltip,
  TooltipTrigger,
  Breadcrumbs,
  Item,
  Tabs,
  TabList,
  TabPanels,
  MenuTrigger,
  Menu,
  ComboBox,
  Switch,
  TextField,
  Dialog,
  DialogTrigger,
  ButtonGroup,
  Content,
  Form,
} from '@adobe/react-spectrum'
import Edit from '@spectrum-icons/workflow/Edit'
import Delete from '@spectrum-icons/workflow/Delete'
import Header from '../Header'

class Home extends Component {
  state = {
    data: [
      {
        name: 'Indra Gandhi International Airport',
        country: 'India',
        code: 'DEL',
        terminals: '3',
      },
      {
        name: 'Dubai International Airport',
        country: 'UAE',
        code: 'DXB',
        terminals: '5',
      },
      {
        name: 'Heathrow Airport',
        country: 'England',
        code: 'LHR',
        terminals: '6',
      },
      {
        name: 'Istanbul International Airport',
        country: 'Turkey',
        code: 'IST',
        terminals: '3',
      },
      {
        name: 'Rajiv Gandhi International Airport',
        country: 'Texas',
        code: 'DFW',
        terminals: '14',
      },
    ],
    airportSelected: false,
    selectedName: '',
    name: '',
    country: '',
    code: '',
    terminals: '',
    formOpen: false,
  }

  onClickDelete = code => {
    const {data} = this.state
    const updatedData = data.filter(each => each.code !== code)
    this.setState({data: updatedData})
  }

  onClickEdit = name => {
    this.setState({airportSelected: true, selectedName: name})
  }

  onClickAddNew = () => {
    this.setState({formOpen: true})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {name, country, code, terminals, data} = this.state
    const newData = {name, country, code, terminals}
    this.setState({
      data: [...data, newData],
      name: '',
      country: '',
      code: '',
      terminals: '',
      formOpen: false,
    })
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeCountry = event => {
    this.setState({country: event.target.value})
  }

  onChangeCode = event => {
    this.setState({code: event.target.value})
  }

  onChangeTerminals = event => {
    this.setState({terminals: event.target.value})
  }

  render() {
    const {data, airportSelected, selectedName, formOpen} = this.state
    return (
      <div className="hDiv1">
        <div className="hLogo formP">
          <img
            src="https://res.cloudinary.com/dfhkhhudf/image/upload/v1720173464/olc2kdx4ai5e0ynuj8mm.png"
            alt="title"
          />
          <img
            src="https://res.cloudinary.com/dfhkhhudf/image/upload/v1720105162/liiz2xtushrzsphzhcal.png"
            alt="profile"
          />
        </div>
        {formOpen ? (
          <form className="newForm" onSubmit={this.onFormSubmit}>
            <lable htmlFor="name" className="label">
              Name
            </lable>
            <input
              className="input"
              onChange={this.onChangeName}
              id="name"
              placeholder="Enter Airport Name"
              type="text"
            />
            <lable className="label" htmlFor="country">
              Country
            </lable>
            <input
              className="input"
              onChange={this.onChangeCountry}
              id="country"
              placeholder="Enter Country"
              type="text"
            />
            <lable className="label" htmlFor="code">
              Code
            </lable>
            <input
              className="input"
              onChange={this.onChangeCode}
              id="code"
              placeholder="Enter Code"
              type="text"
            />
            <lable className="label" htmlFor="terminals">
              Terminals
            </lable>
            <input
              className="input"
              onChange={this.onChangeTerminals}
              id="terminals"
              placeholder="Number of terminals"
              type="number"
            />
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="hDiv2">
            <Header />
            {airportSelected ? (
              <div className="detailsDiv1">
                <Breadcrumbs>
                  <Item key="Airports">Airports</Item>
                  <Item key={selectedName}>{selectedName}</Item>
                </Breadcrumbs>
                <h1>{selectedName}</h1>
                <Tabs aria-label="History of Ancient Rome">
                  <TabList>
                    <Item key="Terminals">Terminals</Item>
                    <Item key="Transport">Transport</Item>
                    <Item key="Contact">Contact Details</Item>
                  </TabList>
                  <TabPanels>
                    <Item key="Terminals">
                      <div className="detailsDiv2">
                        <div className="detailsDiv21">
                          <img
                            src="https://res.cloudinary.com/dfhkhhudf/image/upload/v1720158872/d5caw29zc6ttrhlrxqvq.png"
                            alt="term1"
                          />
                          <div className="detailsDiv211">
                            <div className="detailsDiv2111">
                              <h3>Termial 1</h3>
                              <MenuTrigger>
                                <ActionButton>
                                  <img
                                    src="https://res.cloudinary.com/dfhkhhudf/image/upload/v1720159103/gsakd2dyipc1kdesiqou.png"
                                    alt="edit"
                                  />
                                </ActionButton>
                                <Menu onAction={key => alert(key)}>
                                  <Item key="edit">Edit</Item>
                                  <Item key="delete">Delete</Item>
                                </Menu>
                              </MenuTrigger>
                            </div>
                            <p>Optional metadata should be two lines.</p>
                          </div>
                        </div>
                        <div className="detailsDiv21">
                          <img
                            src="https://res.cloudinary.com/dfhkhhudf/image/upload/v1720158872/d5caw29zc6ttrhlrxqvq.png"
                            alt="term1"
                          />
                          <div className="detailsDiv211">
                            <div className="detailsDiv2111">
                              <h3>Termial 2</h3>
                              <MenuTrigger>
                                <ActionButton>
                                  <img
                                    src="https://res.cloudinary.com/dfhkhhudf/image/upload/v1720159103/gsakd2dyipc1kdesiqou.png"
                                    alt="edit"
                                  />
                                </ActionButton>
                                <Menu onAction={key => alert(key)}>
                                  <Item key="edit">Edit</Item>
                                  <Item key="delete">Delete</Item>
                                </Menu>
                              </MenuTrigger>
                            </div>
                            <p>Optional metadata should be two lines.</p>
                          </div>
                        </div>
                        <DialogTrigger>
                          <ActionButton>+ Add Terminal</ActionButton>
                          {close => (
                            <Dialog size="S">
                              <ButtonGroup>
                                <Button variant="secondary" onPress={close}>
                                  Cancel
                                </Button>
                                <Button
                                  autoFocus
                                  variant="accent"
                                  onPress={close}
                                >
                                  Save
                                </Button>
                              </ButtonGroup>
                              <Content>
                                <Form>
                                  <TextField label="Terminal Title" />
                                  <TextField label="Description" />
                                </Form>
                              </Content>
                            </Dialog>
                          )}
                        </DialogTrigger>
                      </div>
                      <div>
                        <h4>Services</h4>
                        <p className="formP">Lost & found</p>

                        <form className="form">
                          <div className="formDiv1">
                            <TextField
                              label="Service Name"
                              type="text"
                              name="service name"
                            />
                            <ComboBox label="Category">
                              <Item key="1">Option 1</Item>
                              <Item key="2">Option 2</Item>
                              <Item key="3">Option 3</Item>
                              <Item key="4">Option 4</Item>
                              <Item key="5">Option 5</Item>
                              <Item key="6">Option 6</Item>
                            </ComboBox>
                            <ComboBox label="Sub Category">
                              <Item key="1">Option 1</Item>
                              <Item key="2">Option 2</Item>
                              <Item key="3">Option 3</Item>
                              <Item key="4">Option 4</Item>
                              <Item key="5">Option 5</Item>
                              <Item key="6">Option 6</Item>
                            </ComboBox>
                            <TextField
                              label="Upload Image"
                              type="file"
                              name="image"
                              accept="image/*"
                            />
                            <Switch name="show" value="show">
                              Show Image
                            </Switch>
                            <TextField
                              label="Description"
                              type="paragraph"
                              name="description"
                            />
                          </div>
                          <Button
                            variant="primary"
                            style={{color: 'white', backgroundColor: 'black'}}
                          >
                            Save
                          </Button>
                        </form>
                        <p className="formP">Lounge</p>
                        <p className="formP">Money Exchange</p>
                      </div>
                    </Item>

                    <Item key="Transport">
                      <img
                        src="https://cdn.dribbble.com/users/23118/screenshots/3554407/media/1300c2c8bbee1398e34316703d851a95.gif"
                        alt="transporting"
                      />
                    </Item>
                    <Item key="Contact">
                      <img
                        src="https://static.wixstatic.com/media/be8d43_f03deb6ab044459391417391bd063b52~mv2.gif"
                        alt="contact info"
                      />
                    </Item>
                  </TabPanels>
                </Tabs>
              </div>
            ) : (
              <div className="airDiv1">
                <div className="airDiv11">
                  <h2>Airports</h2>
                  <Button className="addBtn" onClick={this.onClickAddNew}>
                    + Add new
                  </Button>
                </div>
                <TableView
                  aria-label="Example table with static contents"
                  selectionMode="multiple"
                >
                  <TableHeader className="tableHead">
                    <Column width={600}>Name</Column>
                    <Column minWidth={100} align="end">
                      Country
                    </Column>
                    <Column align="end">Code</Column>
                    <Column minWidth={100} align="end">
                      Terminals
                    </Column>
                    <Column minWidth={200} align="end">
                      Changes
                    </Column>
                  </TableHeader>
                  <TableBody className="tableHead">
                    {data.map(each => (
                      <Row key={each.code}>
                        <Cell>{each.name}</Cell>
                        <Cell>{each.country}</Cell>
                        <Cell>{each.code}</Cell>
                        <Cell>{each.terminals}</Cell>
                        <Cell>
                          <ActionButton
                            aria-label="Icon only"
                            onPress={() => this.onClickEdit(each.name)}
                          >
                            <Edit />
                          </ActionButton>
                          <TooltipTrigger>
                            <ActionButton
                              aria-label="Danger Will Robinson"
                              onPress={() => this.onClickDelete(each.code)}
                            >
                              <Delete />
                            </ActionButton>
                            <Tooltip variant="negative" showIcon>
                              Dangerous action.
                            </Tooltip>
                          </TooltipTrigger>
                        </Cell>
                      </Row>
                    ))}
                  </TableBody>
                </TableView>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Home
