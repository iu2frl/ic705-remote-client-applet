// The upstream patcher only checks #accept; it stays locked until the warnings box is ticked too.
const warnings = document.getElementById('accept-warnings');
const accept = document.getElementById('accept');

function sync() {
  accept.disabled = !warnings.checked;
  if (!warnings.checked && accept.checked) {
    accept.checked = false;
    accept.dispatchEvent(new Event('change'));
  }
}

warnings.addEventListener('change', sync);
sync();
