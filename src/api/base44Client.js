import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "694ab1e404355904ea7c1efc", 
  requiresAuth: true // Ensure authentication is required for all operations
});
