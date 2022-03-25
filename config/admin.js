module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc9f2fbc91e44c8715fdcdd269a81b7d'),
  },
});
