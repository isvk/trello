import * as authActions from "src/store/auth/actions";
import * as boardActions from "src/store/boards/actions";
import * as listActions from "src/store/lists/actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypesInfer<T extends { [key: string]: any }> = ReturnType<
    InferValueTypes<T>
>;

export type allActionsTypes = ActionTypesInfer<
    typeof authActions | typeof boardActions | typeof listActions
>;
