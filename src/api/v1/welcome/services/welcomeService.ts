import { Visitor } from "../types/Visitor";

export const greeting = {
  async welcome() {
    try {
      const visitor: Visitor = {
        id: 101,
        email: "visitor@example.com",
        name: "Visitor",
      };

      const data = visitor;
      return data;
    } catch (error) {
      throw error;
    }
  },
};
