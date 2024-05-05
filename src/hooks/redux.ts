import { RootState } from "../store/index";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector;
// хук чтобы забирать данные из стора


