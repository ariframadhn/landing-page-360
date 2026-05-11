document.addEventListener('DOMContentLoaded', () => {
    const petaKawasanToggle = document.getElementById('peta-kawasan-toggle');
    const petaDropdown = document.getElementById('peta-dropdown');

    if (petaKawasanToggle && petaDropdown) {
        // Toggle dropdown on click
        petaKawasanToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah scroll ke atas
            e.stopPropagation(); // Mencegah event bubbling ke document

            const isShowing = petaDropdown.classList.contains('show');

            // Menutup dropdown lain jika ada (opsional, untuk skalabilitas)
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                if (menu !== petaDropdown) {
                    menu.classList.remove('show');
                    menu.previousElementSibling.classList.remove('active-dropdown');
                }
            });

            // Toggle state dropdown yang diklik
            if (isShowing) {
                petaDropdown.classList.remove('show');
                petaKawasanToggle.classList.remove('active-dropdown');
            } else {
                petaDropdown.classList.add('show');
                petaKawasanToggle.classList.add('active-dropdown');
            }
        });

        // Menutup dropdown saat mengklik di luar elemen dropdown
        document.addEventListener('click', (e) => {
            if (!petaKawasanToggle.contains(e.target) && !petaDropdown.contains(e.target)) {
                if (petaDropdown.classList.contains('show')) {
                    petaDropdown.classList.remove('show');
                    petaKawasanToggle.classList.remove('active-dropdown');
                }
            }
        });

        // Menutup dropdown saat menekan tombol 'Escape'
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && petaDropdown.classList.contains('show')) {
                petaDropdown.classList.remove('show');
                petaKawasanToggle.classList.remove('active-dropdown');
                petaKawasanToggle.focus(); // Mengembalikan fokus untuk aksesibilitas
            }
        });
    }

    // Efek shadow pada navbar saat di-scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});
