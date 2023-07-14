export function mostrarErrorToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
  
    setTimeout(function() {
      toast.classList.remove('show');
    }, 5000);
  }
  