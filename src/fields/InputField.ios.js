'use strict';

import React, { Component } from 'react';
import ReactNative, { StyleSheet } from 'react-native';
import { InputComponent } from '../lib/InputComponent';

export class InputField extends Component {

  clear() {
    this.refs.ic.clear();
  }

  render() {
    return (
      <InputComponent
        ref="ic"
        {...this.props}
        labelStyle={formStyles.fieldText}
        inputStyle={[
          formStyles.input,
          this.props.multiline ? formStyles.multiline : {},
          this.props.label ? formStyles.textRight : {},
          this.props.style
          ]}
        containerStyle={[
          formStyles.fieldContainer,
          formStyles.horizontalContainer,
          this.props.containerStyle,
          ]}
      />
    );
  }
}

InputField.propTypes = {
  multiline: React.PropTypes.bool,
  placeholder:React.PropTypes.string,
}

const fieldStyles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const formStyles = StyleSheet.create({
  form: { },
  alignRight: { marginTop: 7, position:'absolute', right: 10 },
  textRight: { textAlign: 'right' },
  multiline: {
    lineHeight: 32,
    fontSize: 34/2,
    paddingBottom: 10,
  },
  separatorContainer: {
    paddingTop: 35,
    borderBottomColor: '#C8C7CC',
    borderBottomWidth: 1,
  },
  fieldsWrapper: { },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  fieldContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#C8C7CC',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  fieldText: {
    fontSize: 34/2,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    lineHeight: 32
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  helpTextContainer: {
    marginTop: 9,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  helpText: {
    color: '#7a7a7a',
  }
});
