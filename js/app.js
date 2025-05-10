// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const sidebar = document.getElementById('sidebar');
    
    mobileMenuButton.addEventListener('click', function() {
        sidebar.classList.toggle('translate-x-0');
        sidebar.classList.toggle('-translate-x-full');
    });
    
    // Notifications dropdown
    const notificationsButton = document.getElementById('notificationsButton');
    const notificationsDropdown = document.getElementById('notificationsDropdown');
    
    notificationsButton.addEventListener('click', function(e) {
        e.stopPropagation();
        notificationsDropdown.classList.toggle('hidden');
    });
    
    // User menu dropdown
    const userMenuButton = document.getElementById('userMenuButton');
    const userMenuDropdown = document.getElementById('userMenuDropdown');
    
    if (userMenuButton && userMenuDropdown) {
        userMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            userMenuDropdown.classList.toggle('hidden');
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        if (notificationsDropdown) notificationsDropdown.classList.add('hidden');
        if (userMenuDropdown) userMenuDropdown.classList.add('hidden');
    });
    
    // Prevent dropdowns from closing when clicking inside them
    if (notificationsDropdown) {
        notificationsDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    if (userMenuDropdown) {
        userMenuDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('bg-indigo-50', 'text-indigo-700', 'font-medium');
            link.classList.remove('hover:bg-gray-100', 'text-gray-500');
            
            // Update icon color for active link
            const icon = link.querySelector('i');
            if (icon) {
                icon.classList.remove('text-gray-500');
                icon.classList.add('text-indigo-600');
            }
        }
    });
    
    // Form validation example
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Add your validation logic here
            // If validation fails, prevent submission:
            // e.preventDefault();
        });
    });
    
    // Toast notification example
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        }`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
    
    // Example usage:
    // showToast('Settings saved successfully!', 'success');
});
