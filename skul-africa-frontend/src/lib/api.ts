// Mock API utility for Skul Africa

type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  status: number;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  // Auth
  login: async (credentials: any): Promise<ApiResponse<any>> => {
    await delay(1000); // Simulate network latency
    if (credentials.email === "demo@skul.africa" && credentials.password === "password") {
      return {
        data: {
          token: "mock-jwt-token",
          user: {
            id: "1",
            name: "Demo User",
            email: "demo@skul.africa",
            role: "admin",
          },
        },
        error: null,
        status: 200,
      };
    }
    return {
      data: null,
      error: "Invalid credentials",
      status: 401,
    };
  },

  register: async (data: any): Promise<ApiResponse<any>> => {
    await delay(1500);
    return {
      data: { message: "Registration successful" },
      error: null,
      status: 201,
    };
  },

  // Dashboard
  getStats: async (): Promise<ApiResponse<any>> => {
    await delay(800);
    return {
      data: {
        students: 1234,
        teachers: 45,
        attendance: 92,
        revenue: 50000,
      },
      error: null,
      status: 200,
    };
  },

  // Resources
  getResources: async (): Promise<ApiResponse<any[]>> => {
    await delay(1000);
    return {
      data: [
        { id: 1, title: "Mathematics 101", type: "Course", students: 120 },
        { id: 2, title: "Physics Lab Guide", type: "Document", students: 85 },
        { id: 3, title: "History of Africa", type: "Course", students: 200 },
      ],
      error: null,
      status: 200,
    };
  },
};
