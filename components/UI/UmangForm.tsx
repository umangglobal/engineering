'use client'

import { useState } from 'react';
import axios from 'axios';
import { FormContact } from './ContactComponents/FormContact';
import { loadRecaptcha } from './loadRecaptcha';

// ---- Types ----
interface IFormData {
  fullname: string;
  phone: string;
  email: string;
  companyName: string;
  website: string;
  message: string;
  country_code: string;
  city: string;
  country: string;
  formUrl: string;
  reasonDownload: string;
  productIntrested: string;
  productSize: string;
  productApplication: string;
  productActives: string;
  productColor: string;
  recaptcha_token: string;
  mode: string;
}

interface UmangFormProps {
  formType: string;
  productTypeSelect?: string;
  productType?: string;
  setProductType?: (value: string) => void;
  heading?: string;
  HeadingBlack?: string;
  HeadingColor?: string;
  SubHeading?: string;
}

const emptyFormData: IFormData = {
  fullname: '',
  phone: '',
  email: '',
  companyName: '',
  website: '',
  message: '',
  country_code: '',
  city: '',
  country: '',
  formUrl: '',
  reasonDownload: '',
  productIntrested: '',
  productSize: '',
  productApplication: '',
  productActives: '',
  productColor: '',
  recaptcha_token: '',
  mode: 'cform',
};

// ---- Component ----
const UmangForm = ({
  formType,
  productTypeSelect,
  productType,
  setProductType,
  heading,
  HeadingBlack,
  HeadingColor,
  SubHeading,
}: UmangFormProps) => {

  const [loading, setLoading] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    ...emptyFormData,
    formUrl: formType,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormFocus = async () => {
    if (!recaptchaReady) {
      await loadRecaptcha();
      setRecaptchaReady(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!window.grecaptcha) {
        alert("reCAPTCHA not ready. Please try again.");
        setLoading(false);
        return;
      }

      const token = await window.grecaptcha.execute(
        '6Le5NTMsAAAAABuCU2khW6qUtVDAaMctWRSM5Q6c',
        { action: 'lead_form' }
      );

      const updatedFormData: IFormData = {
        ...formData,
        recaptcha_token: token,
      };

      const response = await axios.post(
        'https://www.umangglobal.com/forms/main.php',
       new URLSearchParams(updatedFormData as unknown as Record<string, string>).toString(),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      );

      const result = response.data;

      if (result?.result === 1) {
        alert('Form submitted successfully!');
        setFormData({ ...emptyFormData, formUrl: formType });
      } else if (result?.result === 3) {
        alert('Your Response is already recorded. Please use a different email.');
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong while submitting the form.');
    }

    setLoading(false);
  };

  const renderFormFields = () => {
    switch (formType) {
      case "contact":
        return (
          <FormContact
            formData={formData}
            handleChange={handleChange}
            loading={loading}
            HeadingBlack={HeadingBlack}
            HeadingColor={HeadingColor}
            SubHeading={SubHeading}
          />
        );
      default:
        return (
          <FormContact
            formData={formData}
            handleChange={handleChange}
            loading={loading}
            HeadingBlack={HeadingBlack}
            HeadingColor={HeadingColor}
            SubHeading={SubHeading}
          />
        );
    }
  };

  return (
    <form onFocusCapture={handleFormFocus} onSubmit={handleSubmit} className="contform">
      <input type="hidden" id="recaptcha_token" name="recaptcha_token" />
      {renderFormFields()}
    </form>
  );
};

export default UmangForm;