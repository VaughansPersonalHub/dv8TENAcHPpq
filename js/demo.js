/* Demo behaviours for the LCA Savills demo site.
   The Savills core CSS expects a JS layer for the mobile menu and
   expandable items; this file provides just enough for the demo. */
(function () {
    'use strict';

    /* Mobile navigation */
    var nav = document.querySelector('[data-nav]');

    function closeNav() {
        if (nav) {
            nav.classList.remove('sv-js-toggled');
        }
    }

    if (nav) {
        Array.prototype.forEach.call(document.querySelectorAll('[data-nav-open]'), function (btn) {
            btn.addEventListener('click', function () {
                nav.classList.add('sv-js-toggled');
            });
        });

        Array.prototype.forEach.call(document.querySelectorAll('[data-nav-close]'), function (btn) {
            btn.addEventListener('click', closeNav);
        });

        var desktop = window.matchMedia('(min-width: 1136px)');
        if (desktop.addEventListener) {
            desktop.addEventListener('change', closeNav);
        } else if (desktop.addListener) {
            desktop.addListener(closeNav);
        }
    }

    /* Expandable items (FAQ accordions) */
    Array.prototype.forEach.call(document.querySelectorAll('.sv-expandable-item'), function (item) {
        var header = item.querySelector('.sv-expandable-item__header');
        var content = item.querySelector('.sv-expandable-item__content');
        if (!header || !content) {
            return;
        }

        function toggle() {
            var open = content.getAttribute('aria-expanded') === 'true';
            content.setAttribute('aria-expanded', String(!open));
            header.classList.toggle('sv--expanded', !open);
            header.setAttribute('aria-expanded', String(!open));
        }

        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-expanded', content.getAttribute('aria-expanded') === 'true' ? 'true' : 'false');
        header.addEventListener('click', toggle);
        header.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
                event.preventDefault();
                toggle();
            }
        });
    });

    /* Demo contact form: no back end, just show the success message */
    var form = document.querySelector('[data-demo-form]');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var success = document.querySelector('[data-form-success]');
            form.hidden = true;
            if (success) {
                success.hidden = false;
                if (success.scrollIntoView) {
                    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
}());
