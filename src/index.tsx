/**
 * @class ReactJsonShaper
 */

import * as React from 'react';

import styles from './styles.css';

import ReactJson, {ReactJsonViewProps} from 'react-json-view';

export default class ReactJsonShaper extends React.Component<ReactJsonViewProps> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.jsonView}>
          <ReactJson name={null} {...this.props}></ReactJson>
        </div>
        <div className={styles.shaperController}>
          // TODO Shaper controller <input type="text" />
        </div>
        <div className={styles.jsonView}>
          <ReactJson name={null} {...this.props}></ReactJson>
        </div>
      </div>
    );
  }
}
