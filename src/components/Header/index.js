import {ListBox, Item, Section} from '@adobe/react-spectrum'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="headDiv1">
    <div className="headDiv2">
      <Link to="/" className="link">
        <div className="headDiv21">
          <img
            src="https://res.cloudinary.com/dfhkhhudf/image/upload/v1720147888/st2gzozkbwukmxfhidrd.png"
            alt="home"
            className="homeP"
          />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/not-found" className="link">
        <div className="headDiv21">
          <img
            src="https://res.cloudinary.com/dfhkhhudf/image/upload/v1720147982/hapa3vxpr8bj792shdyi.png"
            alt="dashboard"
            className="homeP"
          />
          <p>Dashboard</p>
        </div>
      </Link>
    </div>
    <div>
      <Link to="/not-found" className="link">
        <p>Services</p>
      </Link>
      <Link to="/" className="link">
        <p>Airports</p>
      </Link>
      <Link to="/not-found" className="link">
        <p>Videos</p>
      </Link>
    </div>
    <ListBox
      width="size-2400"
      aria-label="Pick your favorite"
      selectionMode="single"
    >
      <Section title="Others">
        <Item key="List1">List 1</Item>
        <Item key="List2">List 2</Item>
        <Item key="List3">List 3</Item>
      </Section>
    </ListBox>
  </div>
)

export default Header
