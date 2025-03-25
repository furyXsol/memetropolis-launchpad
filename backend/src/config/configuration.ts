export default () => ({
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  app: {
    IS_CRON_ACTIVE: process.env.IS_CRON_ACTIVE || 'true',
  },
});
