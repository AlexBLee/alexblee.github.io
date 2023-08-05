if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

function showModal(caption, imageSrc) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modalImage");
  var modalCaption = document.getElementById("modalCaption");

  modalImage.src = imageSrc;
  modalCaption.textContent = caption;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}