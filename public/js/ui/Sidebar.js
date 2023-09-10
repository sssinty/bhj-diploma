
/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    document.querySelector(".sidebar-toggle").onclick = function(e) {
      e.preventDefault()
      document.querySelector(".skin-blue").classList.toggle("sidebar-open");
      document.querySelector(".skin-blue").classList.toggle("sidebar-collapse");
    };
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    for(let btn of document.querySelectorAll(".menu-item")) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(btn.classList.contains("menu-item_register")) {
         App.getModal('register').open();
        }else if(btn.classList.contains("menu-item_login")) {
         App.getModal('login').open();
        }else if(btn.classList.contains("menu-item_logout")) {
         User.logout(this.response)
         App.setState('init');
        }
       })
    }
  }
}