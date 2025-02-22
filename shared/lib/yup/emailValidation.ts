import * as yup from "yup";
import { $TR } from "@host/shared/services/titler";

export const emailValidation = () => yup.string()
  .email($TR.get("common.validation.shouldEmail"))
  .max(128, $TR.get("common.validation.maxLength"))
  .required($TR.get("common.validation.requiredField"));
