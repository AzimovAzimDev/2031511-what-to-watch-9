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
  isActive: boolean;
  onSelect: (id: string) => void;
}

/**
 * Парамерты для вкладок фильма
 */
export type TabsProps = {
  items: TabItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

