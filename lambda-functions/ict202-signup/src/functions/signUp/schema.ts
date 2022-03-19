export default {
  type: "object",
  properties: {
    name: { type: 'string' }
  },
  required: ['email', 'password', 'access'] // <--- fix required fields here
} as const;
