/**
 * Элемент вкладки
 */
export type TabItem = {
  id: string;
  title: string;
}

/**
 * Элемент вкладки
 */
export type TabItemProps = TabItem & {
  onSelect: (id: string) => void;
}

/**
 * Парамерты для вкладок фильма
 */
export type TabsProps = {
  items: TabItem[];
  onSelect: (id: string) => void;
}

