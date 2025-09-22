// -----------------------------
// تشغيل/إطفاء flicker overlay
// -----------------------------
const toggle = document.getElementById('toggleFlicker');
const overlay = document.querySelector('.overlay');

toggle.addEventListener('change', () => {
  overlay.style.display = toggle.checked ? 'block' : 'none';
});

// -----------------------------
// حماية النصوص
// -----------------------------
document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // منع الزر الأيمن
});

label.addEventListener('click', () => {
  const toggle = document.getElementById('toggleFlicker');
  if(toggle.checked) {
    startFlickerCycle();
  } else {
    console.log("Flicker off"); // للتأكد
  }
});

document.addEventListener('keydown', function(e) {
  // منع اختصارات Ctrl+U و Ctrl+S (عرض المصدر أو حفظ الصفحة)
  if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
    e.preventDefault();
    alert("هذا الإجراء غير مسموح!");
  }
});

// -----------------------------
// حماية الصور والملفات
// -----------------------------

// منع سحب الصور
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', false);
  img.addEventListener('dragstart', e => e.preventDefault());
});

// منع النقر الأيمن على الصور
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
});

// إخفاء مسارات الصور والخطوط
// مثال: استخدام data-src للصور وتحميلها عبر JS
document.querySelectorAll('img[data-src]').forEach(img => {
  img.src = img.getAttribute('data-src');
});
