"use client";
import { ReactNode, useMemo } from "react";

// ========== IMPORTS ==========
// Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Redux
import { Provider } from "react-redux";
import store from "../../redux/store";

// Query
const queryClient = new QueryClient();

const BaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default BaseProvider;
