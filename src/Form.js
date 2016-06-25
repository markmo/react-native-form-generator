import React, { Component } from 'react';
import {
  ScrollView,
  SliderIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export class Form extends Component {

  constructor(props){
    super(props);
    this.values = {};
    React.Children.map(props.children, (child) => {
      if (!child) {
        return;
      }
      if (child.ref) {
        this.values[child.ref] = child.props.value;
      }
    });
  }

  handleFieldFocused(event, inputHandle) {
    this.props.onFocus && this.props.onFocus(event, inputHandle);
  }

  handleFieldChange(field_ref, value) {
    this.values[field_ref] = value;
    this.props.onChange && this.props.onChange(this.values);
  }

  getValues() {
    return this.values;
  }

  underscoreToSpaced(str) {
    const words = str.split('_');
    const res = [];
    words.map((word, i) => {
      res.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    return res.join(' ');
  }

  clear() {
    for (const child of this.wrappedChildren) {
      child.clear();
    }
  }

  render() {
    const wrappedChildren = [];
    React.Children.map(this.props.children, (child, i) => {
      if (!child) {
        return;
      }
      wrappedChildren.push(React.cloneElement(child, {
        key: child.ref || child.type + i,
        fieldRef: child.ref,
        onFocus: this.handleFieldFocused.bind(this),
        onChange: this.handleFieldChange.bind(this),
      }));
    }, this);
    this.wrappedChildren = wrappedChildren;
    return (
      <View style={this.props.style}>
        {wrappedChildren}
      </View>
    );
  }
}
