import React from "react";
import { Collapse, Icon } from "antd";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Filter.scss";
const { Panel } = Collapse;

const Filter = () => {
  return (
    <Container>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) =>
          isActive ? <Icon type="minus" /> : <Icon type="plus" />
        }
        expandIconPosition="right"
      >
        <Panel style={{ backgroundColor: "#ffffff" }} header="Brands" key="1">
          {["Adidas", "Athleta", "Lululemon", "Nike", "Under Armour"].map(
            brand => (
              <div key={brand}>{brand}</div>
            )
          )}
        </Panel>
        <Panel style={{ backgroundColor: "#ffffff" }} header="Apparel" key="2">
          <Row>
            <Col md={6}>
              <h3>Tops</h3>
              {[
                "Base Layers",
                "Short Sleeves",
                "Long Sleeves",
                "Outerwear"
              ].map(type => (
                <div key={type}>{type}</div>
              ))}
            </Col>
            <Col md={6}>
              <h3>Bottoms</h3>
              {["Base Layers", "Shorts", "Pants", "Leggings"].map(type => (
                <div key={type}>{type}</div>
              ))}
            </Col>
          </Row>
        </Panel>
        <Panel style={{ backgroundColor: "#ffffff" }} header="Size" key="3">
          <div>{"XS (26 - 28)"}</div>
          <div>{"S  (28 - 30)"}</div>
          <div>{"M  (30 - 32)"}</div>
          <div>{"L  (32 - 34)"}</div>
          <div>{"XL (34 - 36)"}</div>
        </Panel>
      </Collapse>
      <Button
        style={{ marginTop: "20px", float: "right" }}
        variant="outline-dark"
      >
        View Results
      </Button>
    </Container>
  );
};

export default Filter;
