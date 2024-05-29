import { Route, Routes as BaseRoutes } from "react-router-dom";
import CodeRender from "@components/CodeRender";
import useData from '@utils/useData';

export default function Routes({ dark }) {
  const { about, experience } = useData('code');
  return (
    <BaseRoutes>
      <Route path="/"  >
        <Route
          index
          element={<CodeRender dark={ dark } text={ about }/>}
        />
        <Route
          path='experience'
          element={<CodeRender dark={ dark } text={ experience } />}
        />
      </Route>
    </BaseRoutes>
  );
}
