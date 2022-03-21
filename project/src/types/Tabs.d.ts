/**
 * Элемент вкладки
 */
export type TabItemProps = {
  to: string;
  title: string;
}

/**
 * Парамерты для вкладок фильма
 */
export type TabsProps = {
  items:TabItemProps[];
}

