import packageInfo from '../../package.json';

export const environment = {
  production: true,
  version: packageInfo.version,
  config: '/assets/config-prod.json',
};
