// -----------------------------
// تشغيل/إطفاء flicker overlay
// -----------------------------
const toggle = document.getElementById('toggleFlicker');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('flicker-active', toggle.checked);
});

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

document.addEventListener('DOMContentLoaded', () => {
  const rainContainer = document.createElement('div');
  rainContainer.classList.add('rain-container');
  document.body.appendChild(rainContainer);

  const dropsCount = 300;

  for (let i = 0; i < dropsCount; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');

    // موضع أفقي عشوائي
    drop.style.left = Math.random() * 100 + 'vw';

    // مدة وسرعة السقوط عشوائية
    const duration = Math.random() * 1.5 + 0.5; // من 0.5s إلى 2s
    drop.style.animationDuration = duration + 's';

    // تأخير عشوائي للسقوط
    drop.style.animationDelay = Math.random() * 5 + 's';

    rainContainer.appendChild(drop);
  }

  // تأثير البرق عند الضغط على الصفحة
  document.body.addEventListener('mousedown', () => {
    document.body.classList.add('lightning');
    setTimeout(() => {
      document.body.classList.remove('lightning');
    }, 200);
  });
});
