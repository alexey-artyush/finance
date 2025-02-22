import { phoneCountryCodes } from 'shared/ui';
import * as yup from 'yup';

export const phoneValidation = () =>
  yup
    .object({
      cellPhone: yup.string().defined(),
      phoneCountryCode: yup.string().defined(),
    })
    .test('format', $TR.get('common.validation.formatInvalid'), (value) => {
      const phoneCountryCode = phoneCountryCodes.find((c) => c.code === value.phoneCountryCode);

      if (phoneCountryCode?.code === '') return true;

      if (!phoneCountryCode) return false;

      const maskLength = phoneCountryCode.mask.replace(/\D+/g, '').length;
      const cellPhoneLength = value.cellPhone.length;

      return maskLength === cellPhoneLength;
    });
