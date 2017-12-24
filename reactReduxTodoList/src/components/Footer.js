import React from 'react';
import { Link } from 'react-router-dom';
import {
  FILTER_ACTIVE,
  FILTER_COMPLETED,
  FILTER_ALL_LABEL,
  FILTER_ACTIVE_LABEL,
  FILTER_COMPLETED_LABEL
} from "./../reducers/constants";
export default (props) => (
  <div className="footer">
      <ul>
        <li>
          <Link to="/">
            {FILTER_ALL_LABEL}
          </Link>
        </li>
        <li>
          <Link to={`/${FILTER_ACTIVE}`}>
            {FILTER_ACTIVE_LABEL}
          </Link>
        </li>
        <li>
          <Link to={`/${FILTER_COMPLETED}`}>
            {FILTER_COMPLETED_LABEL}
          </Link>
        </li>
      </ul>
  </div>
)
