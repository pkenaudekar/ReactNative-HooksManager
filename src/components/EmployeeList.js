import _ from 'lodash';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderItem({item}) {
    return <ListItem employee={item} />;
  }

  render() {
    return (
      <>
        <FlatList data={this.props.employees} renderItem={this.renderItem} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.employeeCreate()}
          style={styles.FloatingActionButtonStyle}>
          <Image
            source={require('../../images/add.png')}
            style={styles.FloatingActionButtonImageStyle}
          />
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  FloatingActionButtonStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#0B66D3',
    borderColor: '#000000',
    borderRadius: 200 / 2,
  },

  FloatingActionButtonImageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
