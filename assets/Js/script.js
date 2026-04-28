const row = document.getElementById("galleryRow");

      function scrollGallery(dir) {
        row.scrollBy({
          left: dir * 300,
          behavior: "smooth",
        });
      }

      function openModal(src) {
        const modal = document.createElement("div");
        modal.id = "galleryModal";

        modal.className =
          "fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4";

        modal.innerHTML = `
      <div class="relative w-full flex items-center justify-center">

        <!-- CLOSE BUTTON (mobile safe) -->
        <button 
          id="closeModalBtn"
          class="absolute -top-12 right-0 sm:top-0 sm:right-0 
                 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 
                 text-white flex items-center justify-center text-xl transition">
          ✕
        </button>

        <!-- IMAGE -->
        <img src="${src}" 
          class="w-auto max-w-full max-h-[85vh] sm:max-h-[90vh] 
                 object-contain rounded-xl shadow-lg"/>
      </div>
    `;

        document.body.appendChild(modal);

        // disable outside click close
        modal.onclick = (e) => e.stopPropagation();

        // close only via button
        document.getElementById("closeModalBtn").onclick = () => {
          modal.remove();
        };
      }