import React, { useState }  from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Sidebar = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };
    return (
  <Nav className="flex-column text-white p-3 sidebar" style={{ width: '250px', height: 'auto'}}>
  
  <div>
    <span
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }}
>
  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
    <Link to="/" className="text-black fw-bold filters">Filters</Link>
    <button className="btn text-primary fw-semibold border-0">Reset</button>
    <i className="bi bi-sd-card"></i>
  </div>
  <i className="bi bi-arrow-left" style={{ color: 'black', cursor: 'pointer' }}></i>
</span>
    <Form.Group className='form-group' controlId="exampleForm.SelectCustom">
      <Form.Label>Year</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Label>Month</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Label>Shift Date</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Date Range</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Label>Parent Group Name</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Label>Segment</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Select (sample)</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Label>Line/Group</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Select (sample)</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Label>Agg Asset Name</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Select (sample)</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Label>Asset Type</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Select (sample)</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Label>Shift Name</Form.Label>
      <Form.Select
        value={selectedValue}
        onChange={handleSelectChange}
        aria-label="Custom select example"
      >
        <option value="">Select (sample)</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
    </Form.Group>
    </div>
  </Nav>
    )
};

export default Sidebar;
