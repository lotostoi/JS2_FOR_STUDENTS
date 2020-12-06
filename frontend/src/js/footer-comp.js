// локальная регистрация компонента footer
// подробнее об отличиях локальной и глобальной регистрации компонента
// тут: https://ru.vuejs.org/v2/guide/components-registration.html
const CompFooter = {
  data: function () {
    return {}
  },
  template: `<footer class="footer">
              <div class="container">
                <div class="footer-wrapper">
                  <div class="header-logo">
                    <img src="http://placehold.it/50x50" alt="Логотип">
                  </div>
                  <div class="footer-copyright">
                    <p>
                      Все права защищены &#169; 
                    </p>
                  </div>
                </div>
              </div>
            </footer>`
}
