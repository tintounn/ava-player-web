import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { request } from '../../utils';
import { toast } from 'react-toastify';
import DownloadList from '../../components/DownloadList';
import MovieForm from '../../components/MovieForm';

class Download extends Component {

  constructor(props) {
    super(props);

    this.state = {
      downloads: []
    };
  }

  componentWillMount() { 
    request({
      method: 'get',
      url: '/downloads'
    }).then((res) => {
      this.setState({
        downloads: res.data.downloads
      });
    }).catch((err) => {
      toast.error('error while fetching download list');
    });
  }

  render() {
    return (
      <div>
        <DownloadList downloads={this.state.downloads} />
      </div>
    );
  }
}

export default Download;
