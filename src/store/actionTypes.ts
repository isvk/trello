import * as authActions from "src/store/auth/actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypesInfer<T extends { [key: string]: any }> = ReturnType<
    InferValueTypes<T>
>;

export type allActionsTypes = ActionTypesInfer<typeof authActions>;
