import { useDispatch } from "react-redux";
import { acProject } from "../Redux/Project";

export function Config() {
  const dispatcher = useDispatch();

  dispatcher(() => acProject());
  return null;
}
