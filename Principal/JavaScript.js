<script>
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 60);
  });
</script>