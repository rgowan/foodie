import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FoodsIndex from '../foods/FoodsIndex';
import FoodsNew from '../foods/FoodsNew';
import FoodsShow from '../foods/FoodsShow';
import FoodsEdit from '../foods/FoodsEdit';

const Routes = () => (
  <Switch>
    <Route path="/foods/:id/edit" component={FoodsEdit} />
    <Route path="/foods/new" component={FoodsNew} />
    <Route path="/foods/:id" component={FoodsShow} />
    <Route exact path="/" component={FoodsIndex} />
  </Switch>
);

export default Routes;
