import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FoodsIndex from '../foods/Index';
import FoodsNew from '../foods/New';
import FoodsShow from '../foods/Show';
import FoodsEdit from '../foods/Edit';

const Routes = () => (
  <Switch>
    <Route path="/foods/:id/edit" component={FoodsEdit} />
    <Route path="/foods/new" component={FoodsNew} />
    <Route path="/foods/:id" component={FoodsShow} />
    <Route exact path="/" component={FoodsIndex} />
  </Switch>
);

export default Routes;
