import { LOD_COMPANIES_SUCCESS } from "../../actions/shared/companies.actions";

export function companies(state = [], action) {
  switch (action.type) {
    case LOD_COMPANIES_SUCCESS: {
      return action.companies;
    }
    default:
      return state;
  }
}
