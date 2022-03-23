import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import App from "../../App";
import { Page404 } from "../Page404";
import { Profile } from "../Profile";
import { WorksTolistico } from "../WorksTolistico";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/works-tolistico" element={<WorksTolistico/>}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  )
})
