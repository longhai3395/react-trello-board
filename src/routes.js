import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from './containers/Base/Base';
import Board from './containers/Board/Board';
import DynameicForm from './containers/DynameicForm/DynamicForm';

export const urls = {
  index: '/',
  dynameicForm: '/df'
};

export const routes = (
  <Route path={urls.index} component={Base}>
    <IndexRoute component={Board} />
    <Route path={urls.dynameicForm} component={DynameicForm}>
    </Route>
  </Route>
);
