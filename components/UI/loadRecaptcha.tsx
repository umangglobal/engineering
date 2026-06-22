let recaptchaLoaded = false;

export const loadRecaptcha = (): Promise<void> => {
  return new Promise((resolve) => {
    if (recaptchaLoaded && window.grecaptcha) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6Le5NTMsAAAAABuCU2khW6qUtVDAaMctWRSM5Q6c";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      recaptchaLoaded = true;
      resolve();
    };

    document.body.appendChild(script);
  });
};