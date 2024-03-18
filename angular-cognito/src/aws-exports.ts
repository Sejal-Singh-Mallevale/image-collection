import { AuthConfig } from "@aws-amplify/core";
import { environment } from "./app/environments/environment";

export const awsweb =  {
    mandatorySignIn: true,
    userPoolWebClientId: environment?.userPoolWebClientId,
    userPoolId: environment?.userPoolId,
    region: environment?.region
};

export default awsweb;
