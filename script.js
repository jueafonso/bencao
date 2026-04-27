const weddingDate = new Date("June 13, 2026 12:30:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  const format = (n) => n < 10 ? "0" + n : n;

  document.getElementById("days").innerText = format(days);
  document.getElementById("hours").innerText = format(hours);
  document.getElementById("minutes").innerText = format(minutes);
  document.getElementById("seconds").innerText = format(seconds);
}, 1000);

document.querySelectorAll('.qa-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
