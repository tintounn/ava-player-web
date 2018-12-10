import React, { Component } from 'react';
import { AutoComplete } from 'antd';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.timeoutId = null;

    this.state = {
      value: this.props.value || ''
    };
  }

  componentWillMount() { }

  handleOnSelect(item, option) {
    if(this.props.onSelect) {
      this.props.onSelect(this.props.data[item]);
      this.emitOnChange(this.props.data[item][this.props.autoCompleteLabel]);
    }
  }

  handleOnSearch(value) {
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.emitOnChange(value);

    this.timeoutId = setTimeout(() => {
      this.props.onSearch(value);
    }, this.props.delay || 500);
  }

  emitOnChange(value) {
    if(this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const children = this.props.data.map((item, index) => {
      return (
        <AutoComplete.Option key={index} >
          {item[this.props.autoCompleteLabel]}
        </AutoComplete.Option>
      );
    });

    return (
      <AutoComplete
        style={this.props.style}
        className={this.props.className}
        onSearch={this.handleOnSearch}
        onSelect={this.handleOnSelect}>

        {children}
      </AutoComplete>
    );
  }
}

export default SearchInput;
