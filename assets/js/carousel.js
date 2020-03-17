const track = document.querySelector('.track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const slideWidth = track.querySelector('.current__slide').clientWidth;
let urutan = 1;
track.style.transform = `translateX(${-slideWidth * urutan}px)`;
const zoomIn = (currentSlide, targetSlide) => {
  currentSlide.classList.remove('current__slide');
  targetSlide.classList.add('current__slide');
}
nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current__slide');
  const nextSlide = currentSlide.nextElementSibling;
  const widthNextSlide = nextSlide.clientWidth;
  zoomIn(currentSlide, nextSlide);
  urutan++;
  track.style.transform = `translateX(${-widthNextSlide * urutan}px)`;
});
prevButton.addEventListener('click', () => { 
  const currentSlide = track.querySelector('.current__slide');
  const prevSlide = currentSlide.previousElementSibling;
  const widthPrevSlide = prevSlide.clientWidth;
  zoomIn(currentSlide, prevSlide);
  urutan--;
  track.style.transform = `translateX(${-widthPrevSlide * urutan}px)`;
});
const kategori = document.querySelectorAll('.kategori');
const waktu = document.querySelectorAll('.waktu');
kategori.forEach(k => {
  k.addEventListener('click', () => {
    k.nextElementSibling.classList.toggle('muncul');
  });
  const daftarKategori = Array.from(k.nextElementSibling.children);
  daftarKategori.forEach(dk => {
    dk.addEventListener('click', () => {
      k.innerHTML = dk.innerHTML;
      k.nextElementSibling.classList.remove('muncul');
    });
  });
})
waktu.forEach(w => {
  w.addEventListener('click', () => {
    w.nextElementSibling.classList.toggle('muncul');
  });
  const daftarWaktu = Array.from(w.nextElementSibling.children);
  daftarWaktu.forEach(dw => {
    dw.addEventListener('click', () => {
      w.innerHTML = dw.innerHTML;
      w.nextElementSibling.classList.remove('muncul');
    });
  });
})