import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class DownloadList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() { }

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.downloads}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    );
  }
}

export default DownloadList;
