/* #REGION Initialization */
// אירוע שמופעל ברגע שמסמך ה-HTML נטען במלואו
document.addEventListener('DOMContentLoaded', function () {
    // הדפסה לקונסול לבדיקה שהסקריפטים נטענו
    console.log("HyperActive Scripts Loaded");
    /* #ENDREGION Initialization */

    /* #REGION Accordion Logic */
    // בחירת כל האלמנטים של השאלות באקורדיון
    const questions = document.querySelectorAll('.question');

    // מעבר על כל שאלה שנמצאה
    questions.forEach(question => {
        // הוספת מאזין לאירוע לחיצה על השאלה
        question.addEventListener('click', function () {
            // החלפת ה-class 'active' על השאלה עצמה (לצורך סיבוב האייקון)
            this.classList.toggle('active');

            // מציאת אלמנט התשובה שנמצא מיד אחרי השאלה
            const answer = this.nextElementSibling;

            // בדיקה האם התשובה כבר פתוחה
            if (answer.classList.contains('open')) {
                // אם פתוחה - הסרת ה-class 'open' כדי לסגור אותה
                answer.classList.remove('open');
            } else {
                // אם סגורה - הוספת ה-class 'open' כדי לפתוח אותה
                answer.classList.add('open');
            }
        });
    });
    /* #ENDREGION Accordion Logic */

    /* #REGION Popup Logic */
    // מציאת שכבת הרקע של הפופאפ לפי ה-ID
    const popupOverlay = document.getElementById('popup-overlay');
    // מציאת כפתור הסגירה של הפופאפ
    const closePopupBtn = document.getElementById('close-popup');
    // מציאת הטופס בתוך הפופאפ
    const popupForm = popupOverlay.querySelector('form');

    // בדיקה אם אלמנט הפופאפ קיים בדף
    if (popupOverlay) {
        // הצגת הפופאפ מיד בטעינת הדף על ידי שינוי ה-display ל-flex
        popupOverlay.style.display = 'flex';
    }

    // בדיקה אם כפתור הסגירה קיים
    if (closePopupBtn) {
        // הוספת מאזין ללחיצה על כפתור הסגירה
        closePopupBtn.addEventListener('click', function () {
            // הסתרת הפופאפ על ידי שינוי ה-display ל-none
            popupOverlay.style.display = 'none';
        });
    }

    // לוגיקה לסגירת הפופאפ בלחיצה על הרקע (אופציונלי)
    if (popupOverlay) {
        // הוספת מאזין ללחיצה על שכבת הרקע
        popupOverlay.addEventListener('click', function (e) {
            // בדיקה האם הלחיצה הייתה בדיוק על הרקע ולא על התוכן הפנימי
            if (e.target === popupOverlay) {
                // הסתרת הפופאפ
                popupOverlay.style.display = 'none';
            }
        });
    }

    // מניעת רענון הדף בשליחת הטופס (לצורכי דמו)
    if (popupForm) {
        // הוספת מאזין לאירוע שליחת הטופס
        popupForm.addEventListener('submit', function (e) {
            // מניעת ההתנהגות הדיפולטיבית של הדפדפן (רענון)
            e.preventDefault();
            // הקפצת הודעת תודה למשתמש
            alert('תודה שנרשמת!');
            // סגירת הפופאפ לאחר השליחה
            popupOverlay.style.display = 'none';
        });
    }
    /* #ENDREGION Popup Logic */

    /* #REGION Mobile Menu Logic */
    // בחירת אלמנט ההמבורגר
    const hamburger = document.querySelector('.hamburger');
    // בחירת תפריט המובייל
    const mobileMenu = document.querySelector('.mobile-menu');
    // בחירת כל הקישורים בתוך תפריט המובייל
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    // בדיקה אם האלמנטים קיימים בדף
    if (hamburger && mobileMenu) {
        // הוספת מאזין ללחיצה על ההמבורגר
        hamburger.addEventListener('click', function () {
            // החלפת ה-class 'active' על ההמבורגר (לאנימציית ה-X)
            hamburger.classList.toggle('active');
            // החלפת ה-class 'active' על תפריט המובייל (להצגה/הסתרה)
            mobileMenu.classList.toggle('active');
        });

        // מעבר על כל הקישורים בתפריט המובייל
        mobileLinks.forEach(link => {
            // הוספת מאזין ללחיצה על קישור
            link.addEventListener('click', function () {
                // בדיקה האם הקישור הוא הורה של תפריט נפתח
                if (this.parentElement.classList.contains('mobile-dropdown-parent')) {
                    // מציאת תת-התפריט
                    const submenu = this.nextElementSibling;
                    // בדיקה האם תת-התפריט קיים ויש לו את המחלקה הנכונה
                    if (submenu && submenu.classList.contains('mobile-dropdown-menu')) {
                        // החלפת המצב הפעיל של תת-התפריט (הצגה/הסתרה)
                        submenu.classList.toggle('active');
                        // החלפת המצב הפעיל של ההורה (לסיבוב החץ)
                        this.parentElement.classList.toggle('active');
                        // מניעת סגירת התפריט הראשי והתנהגות הקישור הרגילה
                        // אנו רוצים להישאר בתפריט כדי לראות את האפשרויות שנפתחו
                        event.preventDefault();
                        return; // יציאה מהפונקציה כדי לא לסגור את התפריט
                    }
                }

                // אם זה קישור רגיל (לא פותח תפריט נמשך)
                // הסרת ה-class 'active' מההמבורגר
                hamburger.classList.remove('active');
                // הסרת ה-class 'active' מתפריט המובייל (סגירתו)
                mobileMenu.classList.remove('active');
                // החזרת הגלילה לדף במקרה שבוטלה (כרגע לא בוטלה בקוד זה)
                document.body.style.overflow = 'auto';
            });
        });
    }
    /* #ENDREGION Mobile Menu Logic */
});