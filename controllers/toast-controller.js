  function mostrarErrorToast() {
    const toast = document.getElementById('toastError');
    toast.classList.add('show');
  
    setTimeout(function() {
      toast.classList.remove('show');
    }, 5000);
  }

  function mostrarOkToast() {
    const toast = document.getElementById('toastOk');
    toast.classList.add('show');
  
    setTimeout(function() {
      toast.classList.remove('show');
    }, 5000);
  }
  
  export const toasts = {
    mostrarErrorToast,
    mostrarOkToast,
  }