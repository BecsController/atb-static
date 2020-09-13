import Swal from 'sweetalert2';

export default {
  successfulEmail() {
    Swal.fire({
      title: 'Success!',
      text: "Thanks for your query, we'll be in touch soon.",
      type: 'success',
      position: 'center',
      showConfirmButton: true
    });
  },
  failureOnRequest() {
    Swal.fire({
      title: 'Error',
      text:
        "We're sorry, something has gone a little wrong. Please refresh and try again",
      type: 'error',
      showConfirmButton: true
    });
  }
};
