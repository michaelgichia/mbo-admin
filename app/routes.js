// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import SidebarNavigation from "containers/Layouts/SidebarNavigation";

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: "/stores",
      component: SidebarNavigation,
      childRoutes: [
        {
          path: '/category/create',
          name: 'create',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Category/reducer'),
              import('containers/Category'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
              injectReducer('create', reducer.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/subcategory',
          name: 'subCategory',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/SubCategory/reducer'),
              import('containers/SubCategory'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
              injectReducer('subCategory', reducer.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }
      ]
    }, {
          path: '/login',
          name: 'login',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/User/Login/reducer'),
              import('containers/User/Login'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
              injectReducer('login', reducer.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
    }, {
      path: '/register',
      name: 'register',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/User/Register/reducer'),
          import('containers/User/Register'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('register', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/registration-success',
      name: 'registerResult',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/User/RegisterResult/reducer'),
          import('containers/User/RegisterResult'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('registerResult', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
