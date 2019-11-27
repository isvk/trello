import { TStoreAuth } from "./reducer";

export const getIdMember = (state: TStoreAuth) => state.idMember;
export const getToken = (state: TStoreAuth) => state.token;
export const getKey = (state: TStoreAuth) => state.key;
