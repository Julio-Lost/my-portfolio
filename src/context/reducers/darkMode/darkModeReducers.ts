import { DarkModeActions } from "../../types/darkMode.types";
import { GenericContext } from "../genericContext";
import { DarkModeState, DARK_MODE_INITIAL_STATE } from "./constants";

export type DarkModeDispatch = (action: DarkModeAction) => void;

export function darkModeReducer(
  state: DarkModeState,
  action: DarkModeAction
): DarkModeState {
  switch (action.type) {
    case DarkModeActions.DARK_MODE: {
      return { ...state, darkMode: action.payload };
    }
    case DarkModeActions.LIGHT_MODE: {
      return DARK_MODE_INITIAL_STATE;
    }

    default: {
      throw new Error(`Ação não identificada: ${action!.type}`);
    }
  }
}

type DarkModeAction =
  | GenericContext<DarkModeActions.DARK_MODE>
  | GenericContext<DarkModeActions.LIGHT_MODE>;
