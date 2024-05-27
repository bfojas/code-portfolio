import { Route, Routes as BaseRoutes } from "react-router-dom";
import CodeRender from "@components/CodeRender";
import useData from '@utils/useData';

export default function Routes() {
  const { about, experience } = useData('code');
  return (
    <BaseRoutes>
      <Route path="/"  >
        <Route
          index
          element={<CodeRender text={ about }/>}
        />
        <Route
          path='experience'
          element={<CodeRender text={ experience } />}
        />
      </Route>
    </BaseRoutes>
  );
}