import React, { Component } from 'react';
import SortableTree from "react-sortable-tree";
import { getTreeFromFlatData , getFlatDataFromTree } from "./utils/tree-data-utils";
// import logo from './logo.svg';
import './App.css';

const data = [
  {
    "title": "เมล็ดพันธุ์ข้าว กข43",
    "id": 1,
    "parentId": 0
  },
  {
    "title": "ข้าวหอมมะลิ 105",
    "id": 2,
    "parentId": 0
  },
  {
    "title": "ข้าวพันธุ์ กข.43 ที่กรมการข้าว",
    "id": 3,
    "parentId": 0
  },
  {
    "title": "ลูกกข 43",
    "id": 4,
    "parentId": 1
  },
  {
    "title": "ลูก2.2",
    "id": 5,
    "parentId": 4
  },
  {
    "title": "หอมมะลิ",
    "id": 6,
    "parentId": 2
  },
  {
    "title": "102",
    "id": 7,
    "parentId": 2
  }
]
const fucking = []

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      treeData: getTreeFromFlatData({ flatData: data })
    };
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('nextState:--> ', nextState)
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.setState.treeData !== nextState) {
      return true;
    }
  }

  render() {
    console.log(':--->', getTreeFromFlatData({ flatData: data }))
    console.log('TEST GET-FLAT-DATA-FROM-TREE :-->', JSON.stringify(this.state.treeData))
    const newData = getFlatDataFromTree({treeData: this.state.treeData, getNodeKey: (val) => { console.log('val:--> ', val) }});
    getTreeFromFlatData({ flatData: newData })



    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => {
            console.log(treeData)
            this.setState({ treeData })
          }}
        />
      </div>
    );
  }
}

export default App;
