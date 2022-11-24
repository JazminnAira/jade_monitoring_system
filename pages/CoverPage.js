import Title from "../jade_components/Title"
import Developers from "../jade_components/Developers"
import About from "../jade_components/About"
import Contact from "../jade_components/Contact"
import Link from 'next/link';
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from "reactstrap";

const COVER = () => {
    return (
      <div>
        <Title />
        <About/>
        <Developers/>
        <Contact/>
      </div>
    );
  };
  
  export default COVER;