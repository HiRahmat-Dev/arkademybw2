const modalDel = document.querySelector('.modal-del');
modalDel.onclick = function() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Data Dilan 1990 berhasil dihapus!',
        icon: 'success',
        confirmButtonColor: '#FBCC38'
      })
    }
  })
}