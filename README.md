### sendsay-test-task

---

#### Что использовал

  - Vite вместо create-react-app
  - В качестве CSS - tailwind
  - State Management - redux/toolkit + reselect
  - Для Drag n' Drop - react-dnd
  - Deploy - Github Pages

---

#### Структура папок

`src`

    Main.tsx - стартовый файл
    App.tsx - базовая разметка

`src/redux`

    store.ts - redux store
    hooks.ts - типизированные react-redux hooks
    /calculator - содержит данные о разметке конструктора
    /mode - содержит данные о режиме редактирования: runtime или constructor
    /runtime - содержит непосредственно вычисления калькулятора

`icons`

    SVG иконки сделанные под react компоненты

`components`

    /calculator - UI Блоки калькулятора
      - Display.tsx - дисплей
      - Equal.tsx - кнопка "равно"
      - Numpad.tsx - цифровые кнопки
      - Operators.tsx - операторы
    Button.tsx - UI кнопка
    Canvas.tsx - холст (правая часть макета)
    Constructor.tsx - конструктор (левая часть макета)
    Container.tsx - компонент-обёртка для DnD конструктора (создания калькулятора)
    DragCard.tsx - компонент-обёртка для DnD сортировки элементов на холсте
    ToggleMode.tsx - компонент-переключатель режимов
    

---

#### Из невыполненного ТЗ:

  - На холсте не отображается, куда будет брошен элемент. Вместо этого элементы сортируются по мере перетаскивания
  - Не обработана логика длинных чисел в вычислениях (сделал меньше шрифт при длинной строке, но дальше этого не пошло)
  - Не до конца реализована нативная работа калькулятора