import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Loader, LoaderStyled } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <LoaderStyled>
            <Loader />
          </LoaderStyled>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
