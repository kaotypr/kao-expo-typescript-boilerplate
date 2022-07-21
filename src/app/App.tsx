import ErrorBoundary from "@components/ErrorBoundary";
import RootNavigation from "@navigations/root";

export default function App() {
  return (
    <ErrorBoundary>
      <RootNavigation />
    </ErrorBoundary>
  );
}
