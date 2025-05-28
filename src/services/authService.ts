interface AuthResponse {
  token: string;
}

const API_BASE_URL = 'http://localhost:5000/api'; 

export const authService = {
  login: async (credentials: { username: string; password: string }): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data: AuthResponse = await response.json();
    localStorage.setItem('authToken', data.token); 
    return data;
  },

  getToken: (): string | null => {
    return localStorage.getItem('authToken');
  },

  logout: () => {
    localStorage.removeItem('authToken');
  },
};