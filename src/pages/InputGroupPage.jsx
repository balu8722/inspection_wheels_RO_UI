import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  InputGroup,
  InputGroupText,
  Input,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

import Page from '../components/Page';

const InputGroupPage = () => {
  return (
    <Page
      title="Input Groups"
      breadcrumbs={[{ name: "Input Groups", active: true }]}
    >
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Input Group</CardHeader>
            <CardBody>
              <InputGroup>
                <InputGroupText addonType="prepend">@</InputGroupText>
                <Input placeholder="username" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText addonType="prepend">
                  <InputGroupText>
                    <Input
                      addon
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </InputGroupText>
                </InputGroupText>
                <Input placeholder="Check it out" />
              </InputGroup>
              <br />
              <InputGroup>
                <Input placeholder="username" />
                <InputGroupText addonType="append">@example.com</InputGroupText>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>$</InputGroupText>
                </InputGroupText>
                <Input placeholder="Dolla dolla billz yo!" />
                <InputGroupText addonType="append">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>$</InputGroupText>
                </InputGroupText>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText addonType="prepend">$</InputGroupText>
                <Input placeholder="Amount" type="number" step="1" />
                <InputGroupText addonType="append">.00</InputGroupText>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Addons</CardHeader>
            <CardBody>
              <InputGroup>
                <InputGroupText addonType="prepend">
                  <InputGroupText>To the Left!</InputGroupText>
                </InputGroupText>
                <Input />
              </InputGroup>
              <br />
              <InputGroup>
                <Input />
                <InputGroupText addonType="append">
                  <InputGroupText>To the Right!</InputGroupText>
                </InputGroupText>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText addonType="prepend">
                  <InputGroupText>To the Left!</InputGroupText>
                </InputGroupText>
                <Input placeholder="and..." />
                <InputGroupText addonType="append">
                  <InputGroupText>To the Right!</InputGroupText>
                </InputGroupText>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Addon Sizing</CardHeader>
            <CardBody>
              <InputGroup size="lg">
                <InputGroupText addonType="prepend">@lg</InputGroupText>
                <Input />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText addonType="prepend">@normal</InputGroupText>
                <Input />
              </InputGroup>
              <br />
              <InputGroup size="sm">
                <InputGroupText addonType="prepend">@sm</InputGroupText>
                <Input />
              </InputGroup>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Buttons / Dropdowns</CardHeader>
            <CardBody>
              <InputGroup>
                <InputGroupText addonType="prepend">
                  <Button>I'm a button</Button>
                </InputGroupText>
                <Input />
              </InputGroup>
              <br />
              <InputGroup>
                <Input />
                <UncontrolledButtonDropdown addonType="append">
                  <DropdownToggle caret>Button Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </InputGroup>
              <br />
              <InputGroup>
                <UncontrolledButtonDropdown addonType="prepend">
                  <Button outline>Split Button</Button>
                  <DropdownToggle split outline />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
                <Input placeholder="and..." />
                <InputGroupText addonType="append">
                  <Button color="secondary">I'm a button</Button>
                </InputGroupText>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default InputGroupPage;
