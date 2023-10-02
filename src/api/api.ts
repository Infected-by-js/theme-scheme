const BASE_URL = "http://localhost:3000";

interface Params {
  [key: string]: string | number | boolean;
}

export default {
  get: async <T>(
    url: string = "",
    params: Params | null = null
  ): Promise<T | null> => {
    const query = params ? `?${new URLSearchParams(params.toString())}` : "";
    try {
      const response = await fetch(`${BASE_URL}/${url}${query}`);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  set: async (url: string = "", body: any): Promise<boolean> => {
    try {
      const response = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  update: async <T>(url: string = "", body: any): Promise<T | null> => {
    try {
      const response = await fetch(`${BASE_URL}/${url}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  delete: async (url: string = ""): Promise<boolean> => {
    try {
      const response = await fetch(`${BASE_URL}/${url}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
