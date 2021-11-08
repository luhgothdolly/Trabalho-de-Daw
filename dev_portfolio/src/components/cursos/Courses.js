// 
import React from "react";
// 
import {Row,  Col, Button, Icon} from 'react-materialize';
//
import Curso from "./cursos";
//
import Eva from '../../images/Eva pong (2).png'

import { Link } from "react-router-dom";

const Courses = () => (
    <Row>
          <h5>Cursos</h5>
        <Col s={20} m={20}>
          <Curso
            titulo="Física"
            texto="Ciência que investiga as leis do universo no que diz respeito à matéria e à energia, que são seus constituintes, e suas interações."
            images={Eva}/>
        
          <Curso
            titulo="fafda"
            texto="Ciência que investiga as leis do universo no que diz respeito à matéria e à energia, que são seus constituintes, e suas interações."
            images={Eva}/>
          </Col>
          <Link to='/create/course'>
                <Button
                    className="black"
                    icon={<Icon>add</Icon>}
                    large
                    node="button"
                    onClick=""
                    />
            </Link>
    </Row>
  );
export default Courses