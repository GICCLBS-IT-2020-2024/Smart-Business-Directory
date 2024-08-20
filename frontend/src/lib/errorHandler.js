export function errorHandler(error) {
  console.log(error.response.data);
  if (error.response.data) {
    return error.response.data;
  } else if (error.message) {
    return { msg: error.message };
  } else {
    return { msg: "Sorry an unexpected error occurred." };
  }
}
