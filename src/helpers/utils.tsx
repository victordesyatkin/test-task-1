import { EndpointsType, RoutesType } from '../modules/types';
import { endpoints, routes } from '../configuration';

function isDevelopment(): boolean {
  return process.env.CURRENT_MODE === process.env.DEVELOPMENT_MODE;
}

function isProduction(): boolean {
  return process.env.CURRENT_MODE === process.env.PRODUCTION_MODE;
}

function getEndpoints(): EndpointsType {
  const readyEndpoints = endpoints.common;
  return isProduction()
    ? Object.assign(readyEndpoints, endpoints.production)
    : Object.assign(readyEndpoints, endpoints.development);
}

function getRoutes(): RoutesType {
  const readyRoutes = routes.common;
  return isProduction()
    ? Object.assign(readyRoutes, routes.production)
    : Object.assign(readyRoutes, routes.development);
}

export { isDevelopment, isProduction, getEndpoints, getRoutes };
