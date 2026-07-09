# AUDIT.md en

### Finding 1

**Area:** Accessibility

**Observation:** Some image links and promo blocks on the homepage are exposed with generic labels like `Image` or without clear text. This can be noticed in promotional and media sections.

**Why it matters:** Users with screen readers may not understand what the link or image is about. Clear labels also make the page easier to navigate with a keyboard.

**Suggested fix:** Add meaningful `alt` text for important images and `aria-label` for image-only links. Decorative images can keep empty alt text.

---

### Finding 2

**Area:** UX

**Observation:** The main navigation has many links, categories, services, and external pages shown close together. It takes some time to understand where to go first.

**Why it matters:** Users usually come with a simple goal, like buying a phone, checking a plan, or topping up their account. Too many options can slow them down.

**Suggested fix:** Group navigation items into clearer sections, for example Shop, Mobile, Internet, Support, and Account. Keep the most important actions more visible.

---

### Finding 3

**Area:** UI

**Observation:** On the smartphone catalog page, filter information is shown in several places, such as applied filters, filter counters, and clear actions. This can make the filter state a bit confusing.

**Why it matters:** Filters are important for choosing a product. If users are not sure which filters are active, they may lose trust in the results.

**Suggested fix:** Show active filters in one clear place and keep the reset action nearby. Use counters only where they help explain how many products are available.

---

### Finding 4

**Area:** Responsive design

**Observation:** The smartphone catalog has many filter groups, including brand, model, memory, RAM, color, CPU, and others. On mobile, this can become a long list before the user gets back to the products.

**Why it matters:** Mobile users need quick filtering and easy return to the catalog. A long filter flow can make shopping feel slower.

**Suggested fix:** Use a compact mobile filter modal with active filters at the top and clear/apply actions easy to reach. Long filter lists should scroll inside the modal.

---

### Finding 5

**Area:** Perceived performance

**Observation:** The homepage has many promo blocks, news items, and videos. Because of this, the page can feel heavy, especially on mobile.

**Why it matters:** Users may feel that the site is slow even if it technically loads correctly. This is important for a telecom website where many visitors use mobile internet.

**Suggested fix:** Lazy-load content below the first screen and load video players only after user interaction. Show lightweight previews first.

---

## Quick Win

Improve the catalog filters: make active filters easy to see, keep the clear/reset button close to them, and make filter counters easier to understand. This is a realistic first-day improvement that can make the shopping flow clearer.

# AUDIT.md ru

### Находка 1

**Область:** Accessibility

**Наблюдение:** На главной странице некоторые ссылки-картинки и промо-блоки имеют слишком общий текст, например `Image`, или не имеют понятного описания. Это заметно в промо и медиа-секциях.

**Почему это важно:** Пользователям скринридеров сложнее понять, что находится в блоке и куда ведет ссылка. Понятные подписи также помогают при навигации с клавиатуры.

**Предложение по исправлению:** Добавить нормальные `alt` для важных изображений и `aria-label` для ссылок, где есть только картинка. Декоративные изображения можно оставить с пустым `alt`.

---

### Находка 2

**Область:** UX

**Наблюдение:** В основной навигации много ссылок, категорий, сервисов и внешних страниц рядом друг с другом. Не сразу понятно, куда лучше нажать в первую очередь.

**Почему это важно:** Обычно пользователь приходит с простой задачей: купить телефон, посмотреть тариф или пополнить счет. Слишком много вариантов замедляет выбор.

**Предложение по исправлению:** Сгруппировать пункты меню в более понятные разделы, например Магазин, Мобильная связь, Интернет, Поддержка и Аккаунт. Самые важные действия сделать заметнее.

---

### Находка 3

**Область:** UI

**Наблюдение:** На странице смартфонов информация о фильтрах показана в нескольких местах: активные фильтры, счетчики фильтров и кнопки очистки. Из-за этого состояние фильтров может быть не совсем понятным.

**Почему это важно:** Фильтры важны для выбора товара. Если пользователь не понимает, какие фильтры активны, он может меньше доверять результатам.

**Предложение по исправлению:** Показывать активные фильтры в одном понятном месте и держать кнопку очистки рядом. Счетчики использовать только там, где они реально помогают понять количество товаров.

---

### Находка 4

**Область:** Responsive design**

**Наблюдение:** В каталоге смартфонов много групп фильтров: бренд, модель, память, RAM, цвет, CPU и другие. На мобильном это превращается в длинный список до возврата к товарам.

**Почему это важно:** На телефоне пользователю важно быстро настроить фильтры и вернуться к списку товаров. Слишком длинный сценарий делает покупку медленнее.

**Предложение по исправлению:** Сделать компактную мобильную модалку фильтров: активные фильтры сверху, кнопки очистки и применения рядом и доступны. Длинные списки фильтров должны скроллиться внутри модалки.

---

### Находка 5

**Область:** Perceived performance

**Наблюдение:** На главной странице много промо-блоков, новостей и видео. Из-за этого страница может ощущаться тяжелой, особенно на мобильном.

**Почему это важно:** Пользователь может воспринимать сайт как медленный, даже если технически он загружается нормально. Для телеком-сайта это важно, потому что многие заходят с мобильного интернета.

**Предложение по исправлению:** Загружать блоки ниже первого экрана лениво, а видео-плееры подключать только после действия пользователя. Сначала показывать легкие превью.

---

## Быстрая победа

Улучшить фильтры в каталоге: сделать активные фильтры заметными, кнопку очистки держать рядом и упростить логику счетчиков. Это небольшое улучшение, которое можно сделать быстро и которое сразу сделает каталог понятнее.
