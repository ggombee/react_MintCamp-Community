import React from 'react';
<<<<<<< HEAD
=======
import { MainPage } from '../pages/Main';
import { BoardPage } from '../pages/Board';

>>>>>>> 1effe184b7675380a59a569f0337845b14674f4f
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainPage, BoardPage } from 'pages';
import { Layout } from 'components';

// 루트 라우터
export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/board" component={BoardPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
