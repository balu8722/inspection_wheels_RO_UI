import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';

const SearchInput = () => {
  return (
    <Form
      className="cr-search-form form-inline"
      onSubmit={(e) => e.preventDefault()}
    >
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        type="search"
        className="cr-search-form__input"
        placeholder="Req/Veh.Reg no"
      />
    </Form>
  );
};

export default SearchInput;
