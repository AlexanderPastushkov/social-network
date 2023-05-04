export const required = (value) => {
  if (value) return undefined;

  return "field is required";
};
//========================================================================================================================================================

// export const maxLength30 = (value) => {
//   if (value.length > 30) return "max length is 30 symbols";

//   return undefined;
// };

// export const maxLength50 = (value) => {
//   if (value.length > 50) return "max length is 50 symbols";

//   return undefined;
// };

//========================================================================================================================================================

export const maxLengthCreator = (maxLength) => {
  return (value) => {
    if (value.length > maxLength) return `max length is ${maxLength} symbols`;

    return undefined;
  };
}; //замыкание, чтобы контролировать валидацию длины введенных символов, и чтобы не писать повторяющийся код как в случае с maxLength30 и maxLength50
